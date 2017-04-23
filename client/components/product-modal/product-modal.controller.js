'use strict';

angular.module('getirApp')
  .controller('ProductModalController', function ($scope, $rootScope, Address, Basket) {
    $scope.current = {};
    $rootScope.$on('open', (e, p) => {
      $scope.current = p;
      $('#pr-modal').modal();
    });
    $scope.addBasket = (obj) => {
      if (Address.getSelected() === null) {
        $('#alert-modal').modal();
      } else {
        Basket.add(obj);
      }
      $('#pr-modal').modal('hide');
    };
  });