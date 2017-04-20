'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor($location, $rootScope, Auth) {
    this.$location = $location;
    this.$rootScope = $rootScope;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.menu = [];

    this.userMenu = [
    {
      link: '/my-addresses',
      title: 'Adreslerim',
    },
    {
      link: '/payment',
      title: 'Ödeme',
    }
    ];

    this.$rootScope.$on('$routeChangeSuccess', () => {
      const currentUrl = this.$location.path().split('/');
      if (currentUrl.indexOf('products') > -1) {
        $('.nav-all').removeClass('container');
        $('.nav-all').addClass('container-fluid');
        $('#affixedNav').removeClass('removeAffix');
        $('#affixedNav').affix({
          offset: {
           top: 110
          }
        });
      } else {
        $('.nav-all').removeClass('container-fluid');
        $('.nav-all').addClass('container');
        $('#affixedNav').addClass('removeAffix');
      }
    });
}
  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('getirApp')
  .controller('NavbarController', NavbarController);
