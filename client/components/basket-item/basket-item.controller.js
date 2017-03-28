'use strict';

  angular.module('getirApp')
    .controller('BasketItemController', function($scope, Basket) {

    $scope.increaseCount = function (obj) {
      Basket.increaseCount(obj);
      $scope.callback();
    };

    $scope.decreaseCount = function (obj, index) {
      Basket.decreaseCount(obj, index);
      $scope.callback();
    };

    $('.btn-wrapper').height($('.basket-item').height() / 3);
    $('.count-wrapper').height($('.basket-item').height() / 3);


  });