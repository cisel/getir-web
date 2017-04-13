'use strict';

angular.module('getirApp')
  .directive('creditCardInput', function() {
    return {
      templateUrl: 'components/credit-card-input/credit-card-input.html',
      restrict: 'E',
      scope: {
        showDelete: '=',
        card: '='
      },
      controller: 'CreditCardInputController'
    };
  });