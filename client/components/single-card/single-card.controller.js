'use strict';

  angular.module('getirApp')
    .controller('SingleCardController', function($scope, $rootScope) {
      $scope.editCard = (p) => {
        $rootScope.$broadcast('edit card', p);
      };
    });