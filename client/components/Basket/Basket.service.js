'use strict';

angular.module('getirApp')
  .factory('Basket', function(Auth, $localStorage, $rootScope) {
    let basket = [];
    if (!$localStorage.basket) {
      $localStorage.basket = [];
    } else {
      basket = $localStorage.basket;
    }

    const API = {
      add: function (product) {
        if (Auth.isLoggedIn()) {
          const filtered = _.filter(basket, p => p.id === product.id);
          if (filtered.length > 0) {
            filtered[0].count += 1;
          } else {
            basket.push(product);
          }
          $localStorage.basket = basket;
          $rootScope.$broadcast('add', product);
        } else {
          // Notification.danger('Lutfen once adres ekleyin.')
        }
      },
      get: function () {
        basket = $localStorage.basket;
        return basket;
      },
      increaseCount: function (product) {
        product.count += 1;
        $rootScope.$broadcast('increase', product);
      },
      decreaseCount: function (product) {
        product.count -= 1;
        if (product.count === 0) {
          basket = $localStorage.basket;
          basket.splice(basket.indexOf(product), 1);
          $localStorage.basket = basket;
          product.count = 1;
        }
        $rootScope.$broadcast('decrease', product);
        return basket;
      },
      price: function () {
        let total = 0;
        _.forEach(basket, function(o) {
          const p = parseFloat(o.price);
          total += (p * o.count);
        });
        return total;
      },
      remove: function () {
        $localStorage.basket = [];
      }
    };

    return API;
});