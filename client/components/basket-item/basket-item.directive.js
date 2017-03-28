'use strict';

angular.module('getirApp')
  .directive('basketItem', function() {
    return {
      templateUrl: 'components/basket-item/basket-item.html',
      restrict: 'E',
      scope: {
        order: '=',
        callback: '&'
      },
      controller: 'BasketItemController'
    };
  });