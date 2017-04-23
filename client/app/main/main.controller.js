'use strict';

  angular.module('getirApp')
    .controller('MainController', function($http, $scope, $location, $rootScope, Address, Categories, $timeout, Basket, NgMap) {
      // $scope.NgMap = NgMap;
      $scope.categories = Categories.get();
      $scope.basket = Basket.get();
      $scope.addresses = Address.get();
      $scope.selectedAddress = Address.getSelected();

      $scope.chooseAddress = () => {
        $rootScope.fromMain = true;
        $location.url('/my-addresses');
      };

      $timeout(() => {
        NgMap.getMap().then(function(map) {
          $scope.map = map;
        });
      }, 1500);
    });