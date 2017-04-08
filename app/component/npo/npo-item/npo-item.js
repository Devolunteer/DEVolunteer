require('./_npo-item.scss');

module.exports = {
  template: require('./npo-item.html'),
  controller: ['$log', 'npoService', npoItemController],
  controllerAs: 'npoItemCtrl',
  bindings: {
    npo: '<',
  },
};

function npoItemController($log, npoService) {
  $log.log('in npoItemCtrl');

  this.showDetailView = function() {
    npoService.showDetail(this.npo._id);
  };
}
