'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/promotions', {
        templateUrl: 'app/promotions/promotions.html',
        controller: 'PromotionsController',
        controllerAs: 'promo'
      });
  });
