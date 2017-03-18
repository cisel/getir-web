'use strict';

angular.module('getirApp')
  .factory('Products', function() {
    const products = [
      {
        name: 'Altınkılıç Ezine Peynir',
        img: 'ezinepeynir.png',
        price: '19,90',
        categories: ['yeni', 'sut&kahvaltilik']
      },
      {
        name: 'Beluga Mercimek',
        img: 'belugamercimek.png',
        price: '9,40',
        categories: ['yiyecek', 'fit&form']
      },
      {
        name: 'Firinda Tavuklu Durum',
        img: 'firindatavukludurum.png',
        price: '15,90',
        categories: ['yiyecek']
      },
      {
        name: 'Kofteli Durum',
        img: 'koftelidurum.png',
        price: '19,90',
        categories: ['yiyecek']
      },
      {
        name: 'Finish Klasik Jel',
        img: 'finishklasikjel.png',
        price: '15,90',
        categories: ['yeni', 'evbakim']
      },
      {
        name: 'Kahve Dunyasi Gofrik 8\'li',
        img: 'gofrik.png',
        price: '18,90',
        categories: ['yeni', 'atistirmalik']
      },
      {
        name: 'Hub Kuskus',
        img: 'hubkuskus.png',
        price: '7,90',
        categories: ['yiyecek', 'fit&form']
      },
      {
        name: 'Exotic Limonata',
        img: 'limonata.png',
        price: '4,50',
        categories: ['yeni', 'icecek']
      },
      {
        name: 'Double Bal & Badem',
        img: 'magnum.png',
        price: '4,00',
        categories: ['yeni', 'dondurma']
      }
    ];

    const API = {
      get: function (query) {
        if (query.category) {
          return _.filter(products, p => p.categories.indexOf(query.category) > -1);
        }
        return products;
      }
    };

    return API;
});