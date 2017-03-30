'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controller: ['$log', '$location', '$rootScope', 'authService', 'userService', NavBarController],
  controllerAs: 'navBarCtrl',
  bindings: {
    user: '='
  }
};

function NavBarController($log, $location, $rootScope, authService, userService){
  $log.debug('NavBarController');

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

  this.logout = function(){
    $log.log('navBarCtrl.logout()');
    this.hideButtons = true;
    authService.logout()
    .then(() => {
      $location.url('/');
    });
  };

  //
  // // this.checkPath();
  //
  //
  // $rootScope.$on('$locationChangeSuccess', () => {
  //   this.checkPath();
  // });

}
