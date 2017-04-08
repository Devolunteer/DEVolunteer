require('./_npo-profile.scss');

module.exports = {
  template: require('./npo-profile.html'),
  controller: ['$log', '$location', 'npoService', 'userService', 'authService', NpoProfileController],
  controllerAs: 'npoProfileCtrl',
  bindings: {
    user: '='
  }
};


function NpoProfileController($log, $location, npoService, userService, authService) {
  $log.debug('running npoProfileController');

  this.npo = {};
  this.npo.username = '';

  this.isNewUser = true;

  //this will run automatically every time this controller is brought in
  userService.fetchUser()
  .then(user => {
    this.npo.username = user.username;
  })
  .catch(console.log);

  //this will run every time
  npoService.fetchNpo()
  .then(res => {
    if (res) {
      this.isNewUser = false;
      this.npo.org = res.data.org;
      this.npo.website = res.data.website;
      this.npo.city = res.data.city;
      this.npo.state = res.data.state;
      this.npo.phone = res.data.phone;
      this.npo.email = res.data.email;
      this.npo.picture = res.data.picture;
      this.npo.projects = res.data.projects;
      this.npo.reviews = res.data.reviews;
      console.log('pic', this.npo.picture);
    }
    else {
      this.isNewUser = true;
    }
  });

  this.updateProfile = function() {
    if(this.isNewUser) {
      //createNpo goes to a POST route. only for new Npo profiles
      npoService.createNpo(this.npo)
      .then( () => {
        $location.url('/');
      });
    } else {
      npoService.updateNpo(this.npo)
      //updateNpo goes to a PUT route. for existing Npo profiles.
      .then( () => {
        console.log('in the update npo stuff');
        $location.url('/');
      });
    }
    //This is where I will put the is new user logic
  };

  this.deleteMe= function() {
    if(npoService.checkNpo(this.npo)) {
      Promise.all([npoService.deleteNpo(), userService.deleteUser()])
      .then(() => $location.url('/'))
      .then(() => authService.logout())
      .catch(err => {
        console.error(err);
      });
    } else  {
      userService.deleteUser()
      .then(() => $location.url('/'))
        .then(() => authService.logout())
        .catch(err => {
          console.error(err);
        });
    }
  };

  this.uploadPic = function(file) {
    npoService.uploadPic(file)
    .then(picData => {
      this.npo.picture = picData.public_id;
    })
    .catch(err => {
      console.error(err);
    });
  };

}
