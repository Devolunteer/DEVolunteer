require('./_dev-detail.scss');

module.exports = {
  template: require('./dev-detail.html'),
  controller: ['$log', 'devService', DevDetailController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function DevDetailController($log, devService){
  $log.debug('running galleryUpCtrl');
}
