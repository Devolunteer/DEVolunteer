module.exports = {
  template: require('./dev-profile.html'),
  controller: ['$log', '$location', 'authService', 'devService', 'userService', DevProfileController],
  controllerAs: 'devProfileCtrl',
  bindings: {
    user: '='
  }
};

function DevProfileController($log, $location, authService, devService, userService) {
  $log.debug('running DevProfileController');

  this.dev = {};

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
    if(this.isNewUser) {
      //createDev goes to a POST route. only for new dev profiles
      devService.createDev(this.dev)
      .then( () => {
        $location.url('/');
      });
    } else {
      devService.updateDev(this.dev)
      //updateDev goes to a PUT route. for existing dev profiles.
      .then( () => {
        console.log('in the update dev stuff');
        $location.url('/');
      });
    }
    //This is where I will put the is new user logic
  };

  this.deleteUser= function() {
    userService.deleteUser()
    .then(() => authService.logout())
    .then(()=> {
      $location.url('/');
      delete this.dev;
    })
    .then(() => {
    })
    .catch(err => {
      console.error(err);
    });
  };
}
