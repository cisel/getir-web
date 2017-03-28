'use strict';

  angular.module('getirApp')
    .controller('BasketIconController', function($scope, Basket) {
      $scope.basketPrice = Basket.price();
    });