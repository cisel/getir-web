'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/my-addresses', {
        templateUrl: 'app/address/address.html',
        controller: 'AddressesController'
      });
  });