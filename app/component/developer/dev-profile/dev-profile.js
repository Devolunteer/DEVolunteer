module.exports = {
  template: require('./dev-profile.html'),
  controller: ['$log', 'devService', 'userService', DevProfileController],
  controllerAs: 'devProfileCtrl',
  bindings: {
    user: '='
  }
};

function DevProfileController($log, devService, userService) {
  $log.debug('running DevProfileController');

  this.username = '';

  //this will run automatically every time this controller is brought in
  userService.fetchUser()
  .then(user => {
    this.username = user.username;
  })
  .catch(console.log);



  this.updateProfile = function() {
    devService.updateDev(this.username);
  };
}
