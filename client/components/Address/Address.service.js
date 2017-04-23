'use strict';

angular.module('getirApp')
  .factory('Address', function($localStorage, $timeout, $rootScope) {
    let addresses = [];
    let selectedAddress = null;

    if (!$localStorage.addresses) {
      $localStorage.addresses = [];
    } else {
      addresses = $localStorage.addresses;
    }

    if (!$localStorage.selectedAddress) {
      $localStorage.selectedAddress = null;
    } else {
      selectedAddress = $localStorage.selectedAddress;
    }

    const API = {
      add: function(address, cb) {
        $timeout(() => {
          const newAddress = _.clone(address);
          newAddress.id = $localStorage.addresses.length;
          addresses.push(newAddress);
          $localStorage.addresses = addresses;
          if ($localStorage.addresses.length === 1) {
            $localStorage.selectedAddress = $localStorage.addresses[0];
          }
          cb();
        }, 1000);
      },
      get: () => $localStorage.addresses,
      delete: (address, cb) => {
        $rootScope.$broadcast('delete');
        $timeout(() => {
          if ($localStorage.addresses) {
            addresses.splice(addresses.indexOf(address), 1);
            $localStorage.addresses = addresses;
            cb();
          }

          if ($localStorage.selectedAddress && address.id === $localStorage.selectedAddress.id) {
            $localStorage.selectedAddress = null;
          }
        }, 1000);
      },
      edit: (address, cb) => {
        $timeout(() => {
          let editAddressIndex = _.findIndex(addresses, a => a.id === address.id);
          addresses[editAddressIndex] = address;
          $localStorage.addresses = addresses;
          cb();
        }, 1000);
      },
      select: (p) => {
        selectedAddress = p;
        $localStorage.selectedAddress = selectedAddress;
      },
      getSelected: () => $localStorage.selectedAddress
    };

    return API;
});