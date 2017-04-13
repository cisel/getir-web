'use strict';

angular.module('getirApp')
  .directive('productModal', function() {
    return {
      templateUrl: 'components/product-modal/product-modal.html',
      restrict: 'E',
      controller: 'ProductModalController'
    };
  });