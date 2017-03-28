'use strict';

class ProductModalController {
  //end-non-standard

  //start-non-standard
  constructor($scope, p) {
    this.$scope = $scope;
    this.$scope.p = p;

  }
}

  angular.module('getirApp')
    .controller('ProductModalController', ProductModalController);