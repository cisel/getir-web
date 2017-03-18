'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      // this.NgMap = NgMap;
      this.awesomeThings = [];

      this.categories = [{
        name: 'Yeni Ürünler',
        img:'yeni.png',
        path: 'yeni'
      },
      {
        name: 'Sıcak Kahve',
        img:'sicakkahve.png',
        path: 'sicakkahve'
      },
      {
        name: 'Yiyecek',
        img:'yiyecek.png',
        path: 'yiyecek'
      },
      {
        name: 'Dondurma',
        img:'dondurma.png',
        path: 'dondurma'
      },
      {
        name: 'İçecek',
        img:'icecek.png',
        path: 'icecek'
      },
      {
        name: 'Fit & Form',
        img:'fit.png',
        path: 'fit&form'
      },
      {
        name: 'Atıştırmalık',
        img:'atistirmalik.png',
        path: 'atistirmalik'
      },
      {
        name: 'Fırından',
        img:'firindan.png',
        path: 'firindan'
      },
      {
        name: 'Kişisel Bakım',
        img:'kisiselbakim.png',
        path: 'kisiselbakim'
      },
      {
        name: 'Süt & Kahvaltılık',
        img:'kahvaltilik.png',
        path: 'sut&kahvaltilik'
      },
      {
        name: 'Temel Gıda',
        img:'temelgida.png',
        path: 'temelgida'
      },
      {
        name: 'BiTaksi',
        img:'bitaksi.png',
        path: 'bitaksi'
      },
      {
        name: 'Ev Bakım',
        img:'evbakim.png',
        path: 'evbakim'
      },
      {
        name: 'Teknoloji',
        img:'teknoloji.png',
        path: 'teknoloji'
      },
      {
        name: 'Dergi & Kitap',
        img:'dergi.png',
        path: 'dergi&kitap'
      },
      {
        name: 'Evcil Hayvan',
        img:'evcilhayvan.png',
        path: 'evcilhayvan'
      },
      {
        name: 'Bebek',
        img:'bebek.png',
        path: 'bebek'
      },
      {
        name: 'Cinsel Sağlık',
        img:'cinselsaglik.png',
        path: 'cinselsaglik'
      },
      {
        name: 'Aksesuar',
        img:'aksesuar.png',
        path: 'aksesuar'
      },
      {
        name: 'Sağlık',
        img:'saglik.png',
        path: 'saglik'
      },
      {
        name: 'Küçük Ev Aletleri',
        img:'evaletleri.png',
        path: 'evaletleri'
      },
      {
        name: 'Ivır Zıvır',
        img:'ivirzivir.png',
        path: 'ivirzivir'
      }];

      console.log(this.currentLocation)
      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      // NgMap.getMap().then(function(map) {
      //   console.log(map.getCenter());
      //   console.log('markers', map.markers);
      //   console.log('shapes', map.shapes);
      // });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('getirApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
