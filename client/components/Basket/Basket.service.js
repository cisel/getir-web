'use strict';

angular.module('getirApp')
  .factory('Basket', function($localStorage) {
    let orders = [];
    // $localStorage.basket = orders;
    let basket;
    let total = 0;

    const API = {
      add: function (product) {
        if (orders.indexOf(product) >-1) {
          product.count += 1;
        } else {
          orders.push(product);
        }
        $localStorage.basket = orders;
      },
      get: function () {
        basket = $localStorage.basket;
        return basket;
      },
      increaseCount: function (product) {
        product.count += 1;
        total = 0;
      },
      decreaseCount: function (product, index) {
        product.count -= 1;
        if (product.count === 0) {
          basket = $localStorage.basket;
          basket.splice(index, 1);
          $localStorage.basket = basket;
          product.count = 1;
        }
        total = 0;
        return basket;
      },
      price: function () {
        _.forEach(basket, function(o) {
          const p = parseFloat(o.price);
          total += (p * o.count);
        });
        return total;
      }
    };

    return API;
});