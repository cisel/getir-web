'use strict';

  angular.module('getirApp')
    .controller('MainController', function($http, $scope, socket, Categories, Basket) {
      $scope.$http = $http;
      $scope.socket = socket;
      // $scope.NgMap = NgMap;
      $scope.awesomeThings = [];

      $scope.categories = Categories.get();
      $scope.basket = Basket.get();

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      // NgMap.getMap().then(function(map) {
      //   console.log(map.getCenter());
      //   console.log('markers', map.markers);
      //   console.log('shapes', map.shapes);
      // });

      $scope.onInit = () => {
        $scope.$http.get('/api/things')
        .then(response => {
          $scope.awesomeThings = response.data;
          $scope.socket.syncUpdates('thing', $scope.awesomeThings);
        });
      };

      $scope.addThing = () => {
        if ($scope.newThing) {
         $scope.$http.post('/api/things', {
          name: $scope.newThing
        });
        $scope.newThing = '';
        }
      };

      $scope.deleteThing = (thing) => {
        $scope.$http.delete('/api/things/' + thing._id);
      };
    });