require('./_dev-detail.scss');

module.exports = {
  template: require('./dev-detail.html'),
  controller: ['$log', 'developerService', DevDetailController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function DevDetailController($log, developerService){
  $log.debug('running galleryUpCtrl');

  // this.showEditGallery = false;
  //
  // this.deleteGallery = function(){
  //   galleryService.deleteGallery(this.gallery._id);
  // };
};
