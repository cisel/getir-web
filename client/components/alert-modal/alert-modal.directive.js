'use strict';

angular.module('getirApp')
  .directive('alertModal', function() {
    return {
      templateUrl: 'components/alert-modal/alert-modal.html',
      restrict: 'E',
      controller: 'AlertModalController'
    };
  });