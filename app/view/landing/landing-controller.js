'use strict';

require('./_landing.scss');


module.exports = ['$log', '$location', '$rootScope', 'authService', landingController];

function landingController($log, $location, authService) {
  console.log('in landing controller');


  //let url = $location.url();
  //this.showSignup = url === '/join#signup' || url === '/join';
}
