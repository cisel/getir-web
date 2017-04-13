'use strict';

  angular.module('getirApp')
    .controller('CreditCardInputController', function($scope, Card, $rootScope) {
      $scope.buttonClicked = false;
      $scope.cancel = () => {
        $rootScope.$broadcast('cancel add card');
      };
      $scope.addCard = () => {
        $scope.buttonClicked = true;
        Card.add($scope.card, () => {
          $scope.buttonClicked = false;
          $rootScope.$broadcast('card added');
        });
      };

      $scope.deleteCard = (p) => {
        $scope.buttonClicked = true;
        Card.delete(p, () => {
          $scope.buttonClicked = false;
          $rootScope.$broadcast('card deleted');
        });
      };
    });