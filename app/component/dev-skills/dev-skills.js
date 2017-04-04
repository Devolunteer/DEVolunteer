'use strict';


module.exports = {
  template: require('./dev-skills.html'),
  controller: ['$log', 'devService', devSkillController],
  controllerAs: 'devSkillCtrl',
  bindings: {
    svc: '<',
  }
};

function devSkillController($log, devService) {
  $log.debug('devSkillController()');
}
