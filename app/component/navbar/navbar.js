'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', 'authService', 'userService', 'devService', NavBarController],
  controllerAs: 'navBarCtrl',
  bindings: {
    user: '='
  }
};

function NavBarController($log, $location, $rootScope, authService, userService, devService){
  $log.debug('NavBarController');

  this.isUser = false;
  this.username = '';

  this.checkUser = function() {
    userService.fetchUser()
    .then(user => {
      if(!user) {
        this.isUser = false;
      } else {
        this.isUser = true;
        this.username = user.username;
      }
    });
  };


//I WANT USER TO BE ABLE TO SEARCH FOR DEVS FROM THE NAV BAR.
  // this.fetchDevs = function(){
  //   devService.fetchDevs();
  //   $location.url('/devlist');
  // }

  this.editUser = function() {
    userService.fetchUser()
    .then(user => {
      if(!user) return false;
      if (user.isDev) {
        userService.showDevEdits = true; //connects to service --> connects to new controller
        userService.showNpoEdits = false;
      } else {
        userService.showDevEdits = false;
        userService.showNpoEdits = true;
      }
    });
  };

  this.aboutUs = function() {
    $log.log('navBarCtrl.aboutUs()');
    $location.url('/about-us');
  };

  this.logout = function(){
    $log.log('navBarCtrl.logout()');
    this.hideButtons = true;
    this.isUser = false;
    authService.logout()
    .then(() => {
      $location.url('/');
    });
  };

  $rootScope.$on('$locationChangeSuccess', () => {
    this.checkUser();
  });
}
