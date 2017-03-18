'use strict';

angular.module('getirApp.auth', ['getirApp.constants', 'getirApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
