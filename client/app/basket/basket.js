'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/basket', {
        templateUrl: 'app/basket/basket.html',
        controller: 'BasketController'
      });
  });