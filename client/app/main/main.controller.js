'use strict';

  angular.module('getirApp')
    .controller('MainController', function($http, $scope, $location, Address, Categories, $timeout, Basket, NgMap) {
      // $scope.NgMap = NgMap;
      $scope.categories = Categories.get();
      $scope.basket = Basket.get();
      $scope.selectedAddress = Address.getSelected();
      $scope.emptyAddress = null;

      $scope.isAddressesEmpty = () => {
        $scope.emptyAddress = $scope.selectedAddress === null;
        console.log($scope.emptyAddress);
      }
      $scope.isAddressesEmpty();

      $scope.chooseAddress = () => {
        $location.url('/my-addresses');
      };

      $timeout(() => {
        NgMap.getMap().then(function(map) {
          $scope.map = map;
          console.log($scope.map);
        });
      }, 1500);
    });