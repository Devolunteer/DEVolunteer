require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', '$location', 'devService', devItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function devItemController($log, $location, devService){
  $log.debug('running devItemCtrl');

  this.selectedDev = {};
  this.showDetailView = function(dev) {
    devService.getDevByID(dev)
    .then(dev => {
      $log.log('this is a dev ', dev);
      this.selectedDev = dev;
    });
  };
}
