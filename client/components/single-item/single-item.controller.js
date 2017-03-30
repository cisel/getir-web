'use strict';

angular.module('getirApp')
  .controller('SingleItemController', function ($scope, Basket) {
    $scope.addOrder = (obj) => {
      Basket.add(obj);
      $scope.callback();
    };
  });