'use strict';

angular.module('getirApp')
  .directive('singleAddress', function() {
    return {
      templateUrl: 'components/single-address/single-address.html',
      restrict: 'E',
      scope: {
        address: '=',
        showEdit: '=',
        hideAddress: '='
      },
      controller: 'SingleAddressController'
    };
  });