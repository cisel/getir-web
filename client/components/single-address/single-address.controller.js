'use strict';

angular.module('getirApp')
  .controller('SingleAddressController', function ($scope, $rootScope) {
    $scope.editAddress = (p) => {
      $rootScope.$broadcast('editAddress', p);
    }
  });