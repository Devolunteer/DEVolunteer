'use strict';

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', 'userService', SignupController],
  controllerAs: 'signupCtrl'
};

function SignupController($log, $location, authService, userService) {
  $log.debug('SignupController');

  // authService.getToken()
  // .then( () => {
  //   $location.url('/home');
  // }); keep this commented out plz

  this.signup = function(user) {
    $log.debug('signupCtrl.signup()');

    authService.signup(user)
    .then( () => {
      $location.url('/');
    });
  };

  this.editUser = function(user) {
    if (user.isDev) {
      userService.showDevEdits = true; //connects to service --> connects to new controller
      userService.showNpoEdits = false;
    } else {
      userService.showDevEdits = false;
      userService.showNpoEdits = true;
    }
  };
}
