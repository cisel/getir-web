'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/suggest', {
        templateUrl: 'app/suggest/suggest.html',
        controller: 'SuggestController',
        controllerAs: 'suggest'
      });
  });