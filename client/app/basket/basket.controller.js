'use strict';

angular.module('getirApp')
  .controller('BasketController', function($scope, $route, Basket) {
    $scope.basket = Basket.get();
    $scope.price = Basket.price();
    $scope.calcPrice = function () {
      console.log('auv');
      $scope.price = Basket.price();
      console.log($scope.price);
    };
  });