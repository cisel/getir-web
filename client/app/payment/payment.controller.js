'use strict';

angular.module('getirApp')
  .controller('PaymentController', function ($scope, Card, $rootScope, $timeout) {
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
    });

    $rootScope.$on('card added', () => {
      $scope.addCardAction = false;
      $scope.deleteCardAction = false;
      // $scope.card = $scope.tempCard;
    });

    $rootScope.$on('edit card', (e, p) => {
      $scope.deleteCardAction = true;
      $scope.addCardAction = true;
      $scope.card = p;
      // $scope.card = {
      //   cvc: 123,
      //   expire: {
      //     month:11,
      //     year: 2020
      //   },
      //   id: 0,
      //   name: "Cisel",
      //   number: "4242424242424242",
      //   type: "visa"
      // };
    });

    $rootScope.$on('card deleted', () => {
      $scope.addCardAction = false;
      $scope.deleteCardAction = false;
    });
  });
