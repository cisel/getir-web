'use strict';

angular.module('getirApp')
  .directive('topNavigation', function() {
    return {
      templateUrl: 'components/top-navigation/top-navigation.html',
      restrict: 'E',
      scope: {
        subcategory: '='
      },
      controller: 'TopNavigationController'
    };
  });