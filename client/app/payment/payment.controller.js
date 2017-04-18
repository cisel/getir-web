'use strict';

angular.module('getirApp')
  .controller('PaymentController', function ($scope, Card, $rootScope) {
    $scope.cards = Card.get();

    $scope.card = {};

    $scope.addCardAction = false;
    $scope.deleteCardAction = false;

    $scope.openCardInputForm = () => {
      $scope.card = {};
      $scope.addCardAction = true;
    };

    $rootScope.$on('cancel add card', () => {
      $scope.addCardAction = false;
      $scope.deleteCardAction = false;
      $scope.card = {};
    });

    $rootScope.$on('card added', () => {
      $scope.addCardAction = false;
      $scope.deleteCardAction = false;
      $scope.card = {};
    });

    $rootScope.$on('card deleted', () => {
      $scope.addCardAction = false;
      $scope.deleteCardAction = false;
      $scope.card = {};
    });
  });
