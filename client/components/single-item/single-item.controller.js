'use strict';

angular.module('getirApp')
  .controller('SingleItemController', function ($scope, Address, Basket, $rootScope) {
    $scope.addOrder = (obj) => {
      if (Address.getSelected() === null) {
        $('#alert-modal').modal();
      } else {
        Basket.add(obj);
      }
    };
    $scope.opnMdl = (p) => {
      $rootScope.$broadcast('open', p);
      $('#pr-modal').modal();
    };
  });