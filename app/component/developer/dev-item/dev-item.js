require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', 'developerService', DevItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function DevItemController($log, developerService){
  $log.debug('running galleryUpCtrl');

  // this.showEditGallery = false;

  // this.deleteGallery = function(){
  //   developerService.deleteGallery(this.gallery._id);
}
