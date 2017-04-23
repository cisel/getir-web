'use strict';

angular.module('getirApp')
  .factory('Card', function($localStorage, $rootScope, $timeout) {
    let cards = [];
    if (!$localStorage.cards) {
      $localStorage.cards = [];
    } else {
      cards = $localStorage.cards;
    }

    function makeid() {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
        return text;
    }

    const API = {
      add: function(card, cb) {
        $timeout(() => {
          const newCard = _.clone(card);
          newCard.id = makeid();
          newCard.lastPart = newCard.number.substr(newCard.number.length - 4);
          cards.push(newCard);
          $localStorage.cards = cards;
          cb();
        }, 1000);
      },
      get: () => $localStorage.cards,
      delete: (card, cb) => {
        $rootScope.$broadcast('deleteCard');
        $timeout(() => {
          if($localStorage.cards) {
            cards.splice(cards.indexOf(card), 1);
            $localStorage.cards = cards;
            cb();
          }
        }, 1000);
      }
    };
    return API;
});