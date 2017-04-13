'use strict';

angular.module('getirApp')
  .factory('Address', function($localStorage, $timeout, $rootScope) {
    let addresses = [];
    if (!$localStorage.addresses) {
      $localStorage.addresses = [];
    } else {
      addresses = $localStorage.addresses;
    }

    const API = {
      add: function(address, cb) {
        $timeout(() => {
          const newAddress = _.clone(address);
          newAddress.id = $localStorage.addresses.length;
          addresses.push(newAddress);
          $localStorage.addresses = addresses;
          cb();
        }, 1000);
      },
      get: () => $localStorage.addresses,
      delete: (address, cb) => {
        $rootScope.$broadcast('delete');
        $timeout(() => {
          if($localStorage.addresses) {
            addresses.splice(addresses.indexOf(address), 1);
            $localStorage.addresses = addresses;
            cb();
          }
        }, 1000);
      }
    };

    return API;
});