require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', 'devService', devItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
    booleanKey: '<'
  },
};

function devItemController($log, devService){
  $log.debug('running devItemCtrl');


  this.selectedDev = {};
  
  this.showDetailView = function(dev) {
    devService.getDevByID(dev)
    .then(dev => {
      $log.log('this is a dev ', dev);
      this.selectedDev = dev;
      console.log('selectedDev', this.selectedDev);
      console.log('selected Name', this.selectedDev.name);
    });

  };
}
