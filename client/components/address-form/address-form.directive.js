'use strict';

angular.module('getirApp')
  .directive('addressForm', function() {
    return {
      templateUrl: 'components/address-form/address-form.html',
      restrict: 'E',
      scope: {
        address: '=',
        delete: '='
      },
      controller: 'AddressFormController'
    };
  });