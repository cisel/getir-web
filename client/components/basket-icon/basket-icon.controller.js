'use strict';

  angular.module('getirApp')
    .controller('BasketIconController', function($scope, $rootScope, $localStorage, $route, Basket) {
      $scope.basket = Basket.get();
      $scope.price = Basket.price();
      $scope.calcPrice = function () {
        $scope.price = Basket.price();
      };

      $scope.openBasket = () => {
        $('.basket').toggleClass('active-basket');
        $('.basket-dir').toggleClass('active-basket-dir');
      }

      $scope.removeBasket = () => {
        Basket.remove();
        $scope.basket = Basket.get();
      };

      $scope.$watch(function () { return $localStorage.basket; }, function () {
        $scope.basket = Basket.get();
      });

      $rootScope.$on('decrease', () => {
        $scope.calcPrice();
      });

      $rootScope.$on('increase', () => {
        $scope.calcPrice();
      });

      $rootScope.$on('add', () => {
        $scope.calcPrice();
        if(!$('.basket').hasClass('active-basket')) {
          $scope.openBasket();
        }
      });

      $(document).ready(function() {
        function setHeight() {
          $scope.windowHeight = $(window).innerHeight();
          $('.basket').css('height', $scope.windowHeight);
          $('.basket-inner').height($('.basket').height() - 130);
        };
        setHeight();

        $(window).resize(function() {
          setHeight();
        });
      });



    });