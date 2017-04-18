'use strict';

  angular.module('getirApp')
    .controller('MainController', function($http, $scope, $location, socket, Address, Categories, $timeout, Auth, Basket, NgMap) {
      $scope.socket = socket;
      // $scope.NgMap = NgMap;
      $scope.awesomeThings = [];

      $scope.categories = Categories.get();
      $scope.basket = Basket.get();
      $scope.selectedAddress = Address.getSelected();

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      $scope.callbackFunc = function (param) {
        console.log('I know where '+ param +' are. ' + $scope.message);
        console.log('You are at' + $scope.map.getCenter());
      };

      $scope.chooseAddress = () => {
        $location.url('/my-addresses');
      };

      $scope.onInit = () => {
        $http.get('/api/things')
        .then(response => {
          $scope.awesomeThings = response.data;
          $scope.socket.syncUpdates('thing', $scope.awesomeThings);
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
          console.log(map);
          $scope.map = map;
          // console.log($scope.map);
          $scope.callbackFunc(map);
        });
      }, 1500);
    });