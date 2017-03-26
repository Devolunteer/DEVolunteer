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
}
