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

  this.deleteProfile = function(param){
    devService.deleteProfile(this.dev._id);
  }

  this.uploadPic = function(param){
    devService.uploadPic(this.dev._id);
  }
}
