'use strict';

angular.module('getirApp')
  .factory('categorySearch', function($scope, $route) {
    this.$scope = $scope;
    this.$scope.myFunc = function (categories) {
        this.currentParams = $route.current.params;
        if(categories.indexOf(this.currentParams.category) !== -1) {
          return true;
        } else {
          return false;
        }
    }
});