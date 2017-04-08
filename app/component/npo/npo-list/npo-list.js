'use strict';

require('./_npo-list.scss');

module.exports = {
  template: require('./npo-list.html'),
  controller: ['$log', 'npoService', npoListController],
  controllerAs: 'npoListCtrl',
  bindings: {
    npo: '<'
  }
};

function npoListController($log, npoService) {
  $log.debug('npoServiceController()');
  this.npo;




  //retrieve all items in the devService.devList array
  npoService.fetchNpos() //returns a Promise that i can filter by specific dev properties that are taken in by the form filter
  .then(npoList => {
    this.npo = npoList;
  })
  .catch(err => {
    console.error(err);
  });
}
