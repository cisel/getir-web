'use strict';

  angular.module('getirApp')
    .controller('AddressFormController', function($scope, $rootScope, Address) {
      $scope.btnClicked = false;
      $scope.modalProduct = $rootScope.selectedProduct;

      $scope.addresses = Address.get();

      $scope.updateAddress = () => {
        $scope.btnClicked = true;

        Address[($scope.address.id) ? 'edit' : 'add']($scope.address, () => {
          $scope.addresses = Address.get();
          $scope.btnClicked = false;
          $rootScope.$broadcast('updatedAddress');
        });
        if ($scope.modalProduct) {
          console.log($scope.modalProduct);
          $rootScope.$broadcast('open', $scope.modalProduct);
        }
      };

      $scope.deleteAddress = (p) => {
        $scope.btnClicked = true;
        Address.delete(p, () => {
          $scope.addresses = Address.get();
          $scope.btnClicked = false;
        });
      };

      $scope.cancel = () => {
        $rootScope.$broadcast('cancel add address');
      };
  });



