'use strict';

class ProductsController {
  constructor($scope, $route, Products) {
    this.$scope = $scope;
    this.$scope.products = Products.get($route.current.params);
  }
}

angular.module('getirApp')
  .controller('ProductsController', ProductsController);