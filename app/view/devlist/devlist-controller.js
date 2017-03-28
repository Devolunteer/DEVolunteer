'use strict';

require('./_devlist.scss');


module.exports = ['$log', DevlistController];

function DevlistController($log) {
  $log.debug('In the devlist view controller');
}
