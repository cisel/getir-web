'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [{
      link: '/promotions',
      title: 'Promosyon'
    },
    {
      link: '/suggest',
      title: 'Ürün Öner'
    },
    {
      link: '/settings',
      title: 'Ayarlar'
    },
    {
      link: '/help',
      title: 'Yardım'
    }]
}
  isActive(route) {
    return route === this.$location.path();
  };
}

angular.module('getirApp')
  .controller('NavbarController', NavbarController);
