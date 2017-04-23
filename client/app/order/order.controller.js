'use strict';

angular.module('getirApp')
  .controller('OrderController', function ($scope, $location, $rootScope, $timeout, Address, Auth, Basket, Card) {
    $scope.selectedAddress = Address.getSelected();
    $scope.cards = Card.get();
    $scope.deliveryPrice = 2.90;
    $scope.basketPrice = Basket.price();
    $scope.totalPrice = $scope.deliveryPrice + $scope.basketPrice;
    $scope.selectedCard = $scope.cards[0];
    $scope.orderSent = false;

    function Order(address, basket, card) {
      this.address = address;
      this.card = card;
      this.basket = basket;
    }

    $scope.sendOrder = (a, c) => {
      if (Auth.isLoggedIn()) {
        $scope.myOrder = new Order(a, Basket.get(), c);
        $timeout(() => {
          Basket.remove();
          $scope.orderSent = true;
        }, 1000);
      } else {
        $location.url('/login');
      }
    };

    $scope.cancelOrder = () => {
      $location.url('/');
    };

    $scope.addCardFromOrder = () => {
      $rootScope.redirectBackToOrder = true;
      $location.url('/payment');
    };
  });