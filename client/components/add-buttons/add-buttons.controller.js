'use strict';

  angular.module('getirApp')
    .controller('AddButtonsController', function($scope, $rootScope) {
      $scope.addAction = false;

      $scope.openAddressForm = (p) => {
        $rootScope.$broadcast('openAddressForm', p);
      };
  });
