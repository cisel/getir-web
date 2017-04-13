'use strict';

angular.module('getirApp')
  .factory('Card', function($localStorage, $rootScope, $timeout) {
    let cards = [];
    if (!$localStorage.cards) {
      $localStorage.cards = [];
    } else {
      cards = $localStorage.cards;
    }

    const API = {
      add: function(card, cb) {
        $timeout(() => {
          const newCard = _.clone(card);
          newCard.id = $localStorage.cards.length;
          cards.push(newCard);
          $localStorage.cards = cards;
          console.log(newCard);
          console.log($localStorage.cards)
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