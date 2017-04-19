'use strict';

  angular.module('getirApp')
    .controller('MainController', function($http, $scope, $location, Address, Categories, $timeout, Auth, Basket, NgMap) {
      // $scope.NgMap = NgMap;
      $scope.awesomeThings = [];

      $scope.categories = Categories.get();
      $scope.basket = Basket.get();
      $scope.selectedAddress = Address.getSelected();

      $scope.chooseAddress = () => {
        $location.url('/my-addresses');
      };

      $scope.onInit = () => {
        $http.get('/api/things')
        .then(response => {
          $scope.awesomeThings = response.data;
        });
      };

      $scope.addThing = () => {
        if ($scope.newThing) {
         $http.post('/api/things', {
          name: $scope.newThing
        });
        $scope.newThing = '';
        }
      };

      $scope.deleteThing = (thing) => {
        $http.delete('/api/things/' + thing._id);
      };

      $timeout(() => {
        NgMap.getMap().then(function(map) {
          $scope.map = map;
          // console.log($scope.map);
          $scope.callbackFunc(map);
        });
      }, 1500);
    });