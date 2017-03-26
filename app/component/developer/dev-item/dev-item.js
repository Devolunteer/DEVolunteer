require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', 'developerService', DevItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};


//IT IS IN HERE THAT I PUT THE LOGIC FROM THE CLICK OF THE 'VIEW MORE' ON THE LIST ITEM, THAT THE DETAIL VIEW SHOWS.

function DevItemController($log, developerService){
  $log.debug('running devItemCtrl');

  this.showDetailView = function() {
    developerService.showDetail(this.dev._id);
  };
}
