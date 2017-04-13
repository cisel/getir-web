'use strict';

angular.module('getirApp')
  .directive('addButtons', function() {
    return {
      templateUrl: 'components/add-buttons/add-buttons.html',
      restrict: 'E',
      controller: 'AddButtonsController'
    };
  });