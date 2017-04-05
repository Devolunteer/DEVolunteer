'use strict';

require('./_dev-details.scss');


module.exports = ['$log', DevDetailsController];

function DevDetailsController($log) {
  $log.debug('In the devDetails view controller');
}
