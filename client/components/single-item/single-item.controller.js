'use strict';

angular.module('getirApp')
  .controller('SingleItemController', function ($scope, Basket, $rootScope) {
    $scope.addOrder = (obj) => {
      Basket.add(obj);
    };
    $scope.opnMdl = (p) => {
      $rootScope.$broadcast('open', p);
      $('#pr-modal').modal();
    };
  });