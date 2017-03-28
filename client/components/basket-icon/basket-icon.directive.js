'use strict';

angular.module('getirApp')
  .directive('basketIcon', function() {
    return {
      templateUrl: 'components/basket-icon/basket-icon.html',
      restrict: 'E',
      controller: 'BasketIconController'
    };
  });