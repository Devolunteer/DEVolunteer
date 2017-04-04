module.exports = {
  template: require('./npo-profile.html'),
  controller: ['$log', '$location', 'npoService', 'userService', NpoProfileController],
  controllerAs: 'npoProfileCtrl',
  bindings: {
    user: '='
  }
};

function NpoProfileController($log, $location, npoService, userService) {
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


  npoService.fetchNpo()
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
}
