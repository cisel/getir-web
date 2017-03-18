'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/help', {
        templateUrl: 'app/help/help.html',
        controller: 'HelpController',
        controllerAs: 'help'
      });
  });