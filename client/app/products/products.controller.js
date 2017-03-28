'use strict';

class ProductsController {
  constructor($scope, $route, Products, Categories) {
    this.$scope = $scope;
    this.$scope.subcategories = Categories.getSubcategory($route.current.params);
    this.$scope.products = [];
    Products.get($route.current.params, $scope.subcategories[0], $scope.products);

    $('#products-general').height($('.sub').height());


    //$('#products-general').scrollspy({
     //target: '#affixedPanel'
   //});
  }
}

angular.module('getirApp')
  .controller('ProductsController', ProductsController);