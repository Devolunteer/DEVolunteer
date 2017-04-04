module.exports = {
  template: require('./dev-profile.html'),
  controller: ['$log', '$location', 'authService', 'devService', 'userService', 'Cloudinary', DevProfileController],
  controllerAs: 'devProfileCtrl',
  bindings: {
    user: '='
  }
};

function DevProfileController($log, $location, authService, devService, userService, Cloudinary) {
  $log.debug('running DevProfileController');

  this.dev = {};

  this.dev.username = '';
  this.isNewUser = true;

  //this will run automatically every time this controller is brought in

  userService.fetchUser()
  .then(user => {
    this.dev.username = user.username;
    this.dev.name = user.name;

  });


  //this will run every time
  devService.fetchDev()
  .then(res => {
    if (res) {
      this.isNewUser = false;
      this.dev.name = res.data.name;
      this.dev.desc = res.data.desc;
      this.dev.city = res.data.city;
      this.dev.state = res.data.state;
      this.dev.phone = res.data.phone;
      this.dev.email = res.data.email;
      this.dev.picture = res.data.picture;
      this.dev.website = res.data.website;
      this.dev.javascript = res.data.javascript;
      this.dev.html = res.data.html;
      this.dev.angular = res.data.angular;
      this.dev.react = res.data.react;
      this.dev.python = res.data.python;
      this.dev.otherlang = res.data.otherlang;
      this.dev.websitework = res.data.websitework;
      this.dev.webapp = res.data.webapp;
      this.dev.mobileapp = res.data.mobileapp;
      this.dev.otherwork = res.data.otherwork;
      this.dev.available = res.data.available;
      this.dev.reviews = res.data.reviews;
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
