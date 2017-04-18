'use strict';

  angular.module('getirApp')
    .controller('CreditCardInputController', function($scope, Card, $rootScope) {
      $scope.buttonClicked = false;

      $scope.buttonDisabled = (obj) => !(obj.name && obj.expire && obj.cvc && obj.number && obj.number.length === 16 && !$scope.buttonClicked);

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
    });