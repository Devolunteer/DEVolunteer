require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', 'devService', devItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function devItemController($log, devService){
  $log.debug('running devItemCtrl');

  this.showDetailView = function() {
    devService.showDetail(this.dev._id);
  };
}
