'use strict';

require('./_devDetails.scss');


module.exports = ['$log', DevDetailsController];

function DevDetailsController($log) {
  $log.debug('In the devDetails view controller');
}
