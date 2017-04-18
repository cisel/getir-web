'use strict';

angular.module('getirApp')
  .controller('ProductModalController', function ($scope, $rootScope, Basket) {
    $scope.current = {};
    $rootScope.$on('open', (e, p) => {
        $scope.current = p;
    });
    $scope.addBasket = (obj) => {
      Basket.add(obj);
      $('#pr-modal').modal('hide');
    };
  });