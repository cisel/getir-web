'use strict';

  angular.module('getirApp')
    .controller('SingleCardController', function($scope, $rootScope, Card) {
      $scope.deleteCard = (p) => {
        $scope.buttonClicked = true;
        Card.delete(p, () => {
          $scope.buttonClicked = false;
          $rootScope.$broadcast('card deleted');
        });
      };
    });