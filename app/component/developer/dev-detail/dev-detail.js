require('./_dev-detail.scss');

module.exports = {
  template: require('./dev-detail.html'),
  controller: ['$log', 'devService', DevDetailController],
  controllerAs: 'devDetailCtrl',
  bindings: {
    dev: '<',
  },
};

function DevDetailController($log, devService){
  $log.log('DevDetailController');
  console.log(devService.dev, ' = devService.dev ');
  // this.infoToView = function(){
  //   devService.showDetailView();
  //
  // }
}
