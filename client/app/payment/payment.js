'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/payment', {
        templateUrl: 'app/payment/payment.html',
        controller: 'PaymentController'
      });
  });