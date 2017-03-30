'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      });
  });
