module.exports = {
  template: require('./dev-profile.html'),
  controller: ['$log', '$location', 'devService', 'userService', DevProfileController],
  controllerAs: 'devProfileCtrl',
  bindings: {
    user: '='
  }
};

function DevProfileController($log, $location, devService, userService) {
  $log.debug('running DevProfileController');

  this.dev = {};

  this.dev.username = '';

  //this will run automatically every time this controller is brought in
  userService.fetchUser()
  .then(user => {
    this.dev.username = user.username;
  })
  .catch(console.log);

  this.updateProfile = function() {
    devService.updateDev(this.dev)
    .then( () => {
      $location.url('/');
    });
  };
}
