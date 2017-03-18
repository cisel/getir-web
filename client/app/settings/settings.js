'use strict';

angular.module('getirApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      });
  });