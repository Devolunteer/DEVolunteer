'use strict';

require('./_dev-list.scss');

module.exports = {
  template: require('./dev-list.html'),
  controller: ['$log', 'devService', devListController],
  controllerAs: 'devListCtrl',
  bindings: {
    dev: '<',
  }
};

function devListController($log, devService) {
  $log.debug('devServiceController()');
  this.dev;
  this.filtered = [];




  //retrieve all items in the devService.devList array
  devService.fetchDevs() //returns a Promise that i can filter by specific dev properties that are taken in by the form filter
  .then( devList => {
    this.dev = devList;
    this.dev.forEach(function(dev){
      dev.services = [];
      for(let key in dev){
        if(dev[key] === true){
          dev.services.push(key)
        }
      }
    })

    $log.log('response (developers) is saved on .dev property');
    console.log('length', this.dev.length);
  })
  .catch(e => {
    console.log(e);
  });







//end of the controller
}
