'use strict';

angular.module('getirApp')
  .controller('ProductsController', function ($scope, Categories, $localStorage, $route, $timeout, Products) {
    $scope.subcategories = Categories.getSubcategory($route.current.params);
    $scope.products = [];
    Products.get($route.current.params, $scope.subcategories[0], $scope.products);

    $('#products-general').height($('.sub').height());

    $timeout(()=>{
      $('.top-category-menu').animate({
        scrollLeft: $localStorage.oldScrollPosition
      }, 0);
    }, 0)

    $timeout(() => {
      const scrollLeft = parseInt($(`#${$route.current.params.category}`).data('width'), 10) - 120;
      $('.top-category-menu').animate({ scrollLeft }, 300);
      $localStorage.oldScrollPosition = scrollLeft;
    }, 1);
  });