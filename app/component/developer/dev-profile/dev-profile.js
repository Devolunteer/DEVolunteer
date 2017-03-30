module.exports = {
  template: require('./dev-profile.html'),
  controller: ['$log', 'devService', 'userService', EditProfileController],
  controllerAs: 'editProfileCtrl',
  bindings: {
    user: '='
  }
};

function EditProfileController($log, devService, userService) {
  $log.debug('running editProfileController');

  this.username = '';

  //this will run automatically every time this controller is brought in
  userService.fetchUser()
  .then(user => {
    this.username = user.username;
  })
  .catch(console.log);



  this.updateProfile = function() {
    devService.updateProfile(this.dev._id);
  };

  this.deleteProfile = function(param){
    devService.deleteProfile(this.dev._id);
  }

  this.uploadPic = function(param){
    devService.uploadPic(this.dev._id);
  }
}
