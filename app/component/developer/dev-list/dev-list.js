'use strict';

require('./_dev-list.scss');

module.exports = {
  template: require('./dev-list.html'),
  controller: ['$log', 'devService', devListController],
  controllerAs: 'devListCtrl',
  bindings: {
    dev: '<'
  }
};

function devListController($log, devService) {
  $log.debug('devServiceController()');
  this.dev = {};
  //retrieve all items in the devService.devList array
  devService.fetchDevs() //returns a Promise that i can filter by specific dev properties that are taken in by the form filter
  .then( devList => {
    this.dev = devList;
    $log.log('response (developers) is saved on .dev property');
  })
  .catch(e => {
    console.log(e);
  });
}
