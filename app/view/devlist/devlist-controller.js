'use strict';

require('./_devlist.scss');


module.exports = ['$log', devListController];

function devListController($log) {
  $log.debug('In the devlist view controller666');
}
