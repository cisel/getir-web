'use strict';

angular.module('getirApp')
  .controller('SingleAddressController', function ($scope, $rootScope, $location, Address) {
    $scope.editAddress = (p) => {
      $rootScope.$broadcast('editAddress', p);
    };

    $scope.selectAddress = (p) => {
      Address.select(p);
      $location.url('/');
    };
  });