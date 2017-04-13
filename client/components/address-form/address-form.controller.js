'use strict';

  angular.module('getirApp')
    .controller('AddressFormController', function($scope, $rootScope, Address) {


      $scope.btnClicked = false;

      $scope.addresses = Address.get();

      $scope.addAddress = () => {
        $scope.btnClicked = true;
        Address.add($scope.address, () => {
          $scope.addresses = Address.get();
          $scope.btnClicked = false;
          $rootScope.$broadcast('addAddress');
        });
      };

      $scope.deleteAddress = (p) => {
        $scope.btnClicked = true;
        Address.delete(p, () => {
          $scope.addresses = Address.get();
          $scope.btnClicked = false;
        });
      };
  });



