module.exports = {
  template: require('./npo-profile.html'),
  controller: ['$log', 'npoService', 'userService', NpoProfileController],
  controllerAs: 'npoProfileCtrl',
  bindings: {
    user: '='
  }
};

function NpoProfileController($log, npoService, userService) {
  $log.debug('running npoProfileController');

  this.username = '';

  //this will run automatically every time this controller is brought in
  userService.fetchUser()
  .then(user => {
    this.username = user.username;
  })
  .catch(console.log);



  this.updateProfile = function() {
    npoService.updateProfile(this.npo._id);
  };

  this.deleteProfile = function(param){
    npoService.deleteProfile(this.npo._id);
  }

  this.uploadPic = function(param){
    npoService.uploadPic(this.npo._id);
  }
}
