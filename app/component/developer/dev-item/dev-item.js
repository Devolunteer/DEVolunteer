require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', '$location', 'devService', 'Cloudinary', devItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function devItemController($log, $location, devService, Cloudinary){
  $log.debug('running devItemCtrl');

  this.selectedDev = {};
  this.showDev = false;
  this.showMsg = false;



  this.showDetailView = function(dev) {
    devService.getDevByID(dev)
    .then(dev => {
      $log.log('this is a dev ', dev);
      this.selectedDev = dev;
      this.showDev = true
      console.log('selectedDev', this.selectedDev);
      console.log('selected Name', this.selectedDev.name);
    })
    .catch(() => {
      this.showMsg = true;
    });
  };
}
