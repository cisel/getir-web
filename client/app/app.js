'use strict';

angular.module('getirApp', [
    'getirApp.auth',
    'getirApp.admin',
    'getirApp.constants',
    'ngCookies',
    'ngStorage',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'btford.socket-io',
    'ui.bootstrap',
    'validation.match',
    'payment',
    'duScroll',
    'ngMap'
  ])
  .config(function($routeProvider, $locationProvider) {
    // $routeProvider.otherwise({
    //   redirectTo: '/'
    // });

    $locationProvider.html5Mode(true);
  });
