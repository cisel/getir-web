'use strict';

angular.module('getirApp')
  .directive('singleCard', function() {
    return {
      templateUrl: 'components/single-card/single-card.html',
      restrict: 'E',
      controller: 'SingleCardController',
      scope: {
        card: '='
      }
    };
  });