module.exports = {
  template: require('./dev-profile.html'),
  controller: ['$log', 'devService', editProfileController],
  controllerAs: 'editProfileCtrl',
  bindings: {
    gallery: '<'
  }
};

function editProfileController($log, devService) {
  $log.debug('running editProfileController');

  this.updateProfile = function() {
    devService.updateProfile(this.dev._id);
  };

  this.deleteProfile = function(this.dev._id){
    devService.deleteProfile();
  }

  this.uploadPic = function(this.dev._id){
    devService.uploadPic();
  }
};
