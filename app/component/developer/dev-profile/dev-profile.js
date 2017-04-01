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

  // this.isNewUser = true;

  this.dev.username = '';
  this.isNewUser = true;

  //this will run automatically every time this controller is brought in
  userService.fetchUser()
  .then(user => {
    this.dev.username = user.username;
  });

  //this will run every time 
  devService.fetchDev()
  .then(res => {
    if (res) {
      this.isNewUser = false;
    }
    else {
      this.isNewUser = true;
    }
  });

  this.updateProfile = function() {
    //This is where I will put the is new user logic
    devService.updateDev(this.dev)
    .then( () => {
      $location.url('/');
    });
  };
}
