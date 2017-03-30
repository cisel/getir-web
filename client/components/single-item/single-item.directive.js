'use strict';

angular.module('getirApp')
  .directive('singleItem', function() {
    return {
      templateUrl: 'components/single-item/single-item.html',
      restrict: 'E',
      scope: {
        product: '=',
        callback: '&'
      },
      controller: 'SingleItemController'
    };
  });