'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/order', {
        templateUrl: 'app/order/order.html',
        controller: 'OrderController'
      });
  });