'use strict';

angular.module('getirApp')
  .factory('Products', function() {
    const products = [
      {
        name: 'Altınkılıç Ezine Peynir',
        img: 'ezinepeynir.png',
        price: '19.90',
        count: 1,
        categories: ['yeni', 'sut&kahvaltilik'],
        subcategories: ['Yeni Ürünler', 'Peynir']
      },
      {
        name: 'Beluga Mercimek',
        img: 'belugamercimek.png',
        price: '9.40',
        count: 1,
        categories: ['yiyecek', 'fit&form'],
        subcategories: ['Taze Yemek']
      },
      {
        name: 'Fırında Tavuklu Dürüm',
        img: 'firindatavukludurum.png',
        price: '15.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Hazır Yemek']
      },
      {
        name: 'Köfteli Dürüm',
        img: 'koftelidurum.png',
        price: '19.90',
        count: 1,
        categories: ['yiyecek'],
        subcategories: ['Hazır Yemek']
      },
      {
        name: 'Finish Klasik Jel',
        img: 'finishklasikjel.png',
        price: '15.90',
        count: 1,
        categories: ['yeni', 'evbakim'],
        subcategories: ['Yeni Ürünler', 'Bulaşık']
      },
      {
        name: 'Kahve Dünyası Gofrik 8\'li',
        img: 'gofrik.png',
        price: '18.90',
        count: 1,
        categories: ['yeni', 'atistirmalik'],
        subcategories: ['Yeni Ürünler', 'Gofret']
      },
      {
        name: 'Hub Kuskus',
        img: 'hubkuskus.png',
        price: '7.90',
        count: 1,
        categories: ['yiyecek', 'fit&form'],
        subcategories: ['Taze Yemek']
      },
      {
        name: 'Exotic Limonata',
        img: 'limonata.png',
        price: '4.50',
        count: 1,
        categories: ['yeni', 'icecek'],
        subcategories: ['Yeni Ürünler', 'Meyve Suyu']
      },
      {
        name: 'Double Bal & Badem',
        img: 'magnum.png',
        price: '4.00',
        count: 1,
        categories: ['yeni', 'dondurma'],
        subcategories: ['Yeni Ürünler', 'Dondurma']
      }
    ];

    _.forEach(products, function (obj, i) {
      obj.id = i;
    });

    const API = {
      get: function (query, sub, arr) {
        if (query.category) {
          const pr = _.filter(products, p => p.categories.indexOf(query.category) > -1);
          _.forEach(sub.subcategories, function (s) {
            const x = _.filter(pr, p => p.subcategories.indexOf(s) > -1);
            arr.push(x);
          });
        }
      }
    };
    return API;
});