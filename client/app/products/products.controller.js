'use strict';

angular.module('getirApp')
  .controller('ProductsController', function ($scope, Categories, $route, Products) {
    $scope.subcategories = Categories.getSubcategory($route.current.params);
    $scope.products = [];
    Products.get($route.current.params, $scope.subcategories[0], $scope.products);

    $('#products-general').height($('.sub').height());
  });