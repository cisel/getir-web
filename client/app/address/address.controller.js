'use strict';

angular.module('getirApp')
  .controller('AddressesController', function ($scope, $rootScope, Address, $timeout) {
    $scope.addButtons = [
      {
        name: 'Ev Adresi Ekle',
        icon: 'fa fa-home',
        value: 'Ev'
      },
      {
        name: 'İş Adresi Ekle',
        icon: 'fa fa-building-o',
        value: 'Is'
      },
      {
        name: 'Diğer Adres Ekle',
        icon: 'fa fa-map-marker',
        value: null
      }
    ];
    $scope.addresses = Address.get();

    $scope.tempAddress = {
        name: null,
        desc: null,
        buildingNo: null,
        apartmentNo: null,
        floor: null,
        exp: null
      };

    $scope.address = {
      name: null,
      desc: null,
      buildingNo: null,
      apartmentNo: null,
      floor: null,
      exp: null
    };

    $scope.addAction = false;
    $scope.deleteAction = false;
    $rootScope.$on('openAddressForm', (e, p) => {
      $scope.addAction = true;
      $scope.address.name = p;
    });

    $rootScope.$on('updatedAddress', () => {
      $scope.addAction = false;
      $scope.deleteAction = false;
      $scope.address = $scope.tempAddress;
    });

    $rootScope.$on('editAddress', (e, p) => {
      $scope.deleteAction = true;
      $scope.addAction = true;
      $scope.address = p;
    });

    $rootScope.$on('delete', () => {
      $timeout(() => {
        $scope.addAction = false;
        $scope.deleteAction = false;
      }, 1000);
    });

    $rootScope.$on('cancel add address', () => {
      $scope.addAction = false;
      $scope.deleteAction = false;
    });
  });