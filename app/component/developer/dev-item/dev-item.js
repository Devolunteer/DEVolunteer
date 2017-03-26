require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', 'developerService', devItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};


//IT IS IN HERE THAT I PUT THE LOGIC FROM THE CLICK OF THE 'VIEW MORE' ON THE LIST ITEM, THAT THE DETAIL VIEW SHOWS.

function devItemController($log, devService){
  $log.debug('running devItemCtrl');

  this.showDetailView = function() {
    devService.showDetail(this.dev._id);
  };
}
