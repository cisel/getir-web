'use strict';

angular.module('getirApp')
  .controller('AlertModalController', function ($scope, $location) {
    $scope.cancel = () => {
      $('#alert-modal').modal('hide');
    };

    $scope.redirect = () => {
      $('#alert-modal').modal('hide');
      $('.modal-backdrop').remove();
      $location.url('/my-addresses');
    };

  });