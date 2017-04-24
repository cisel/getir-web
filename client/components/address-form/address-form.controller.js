'use strict';

  angular.module('getirApp')
    .controller('AddressFormController', function($scope, $rootScope, Notification, Address) {
      $scope.btnClicked = false;
      $scope.modalProduct = $rootScope.selectedProduct;

      $scope.addresses = Address.get();

      $scope.updateAddress = () => {
        if (!($scope.address.lat && $scope.address.lng)) {
          Notification.error('Lütfen haritadan konum seçiniz.')
          return false;
        }
        $scope.btnClicked = true;

        Address[(typeof $scope.address.id !== 'undefined') ? 'edit' : 'add']($scope.address, () => {
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

      $scope.markerDragEnd = (event) => {
        $scope.address.lat = event.latLng.lat();
        $scope.address.lng = event.latLng.lng();
      };

      if ($scope.address.lat && $scope.address.lng) {
        $scope.latLng = `${$scope.address.lat}, ${$scope.address.lng}`;
      } else {
        $scope.latLng = 'current';
      }
  });



