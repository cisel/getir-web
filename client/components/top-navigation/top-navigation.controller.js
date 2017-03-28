'use strict';

class TopNavigationController {
  //end-non-standard

  //start-non-standard
  constructor(Categories, $scope, $route) {
    this.$scope = $scope;
    this.$scope.categories = Categories.get();
    this.$scope.activeCategory = $route.current.params;
    this.$scope.currentCategory = Categories.getSubcategory($scope.activeCategory);

    $('#affixedPanel').affix({
      offset: {
       top: 162,
      }
    });

    $('.subcategory-wrapper').height($('.top-subcategory').height());


  }
}

  angular.module('getirApp')
    .controller('TopNavigationController', TopNavigationController);