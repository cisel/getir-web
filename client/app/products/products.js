'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/products', {
        templateUrl: 'app/products/products.html',
        controller: 'ProductsController'
      });
  });