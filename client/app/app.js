'use strict';

angular.module('getirApp', ['getirApp.auth', 'getirApp.admin', 'getirApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap', 'validation.match',
    'ngMap'
  ])
  .config(function($routeProvider, $locationProvider) {
    // $routeProvider.otherwise({
    //   redirectTo: '/'
    // });

    $locationProvider.html5Mode(true);
  });
