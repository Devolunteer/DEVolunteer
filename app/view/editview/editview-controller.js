'use strict';

require('./_editview.scss');


module.exports = ['$log', 'userService', EditviewController];

function EditviewController($log, userService) {
  $log.debug('In the edit view controller');

  this.showDevEdits = function() {
    if (userService.showDevEdits === true) {
      return true;
    } else {
      return false;
    }
  };
  this.showNpoEdits = function() {
    if(userService.showNpoEdits === true) {
      return true;
    } else {
      return false;
    }
  };
}
