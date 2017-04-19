require('./_contact-dev.scss');


module.exports = {
  template: require('./contact-dev.html'),
  controller: ['$log', '$location', 'devService', 'userService', 'authService', 'npoService', contactDevController],
  controllerAs: 'contactDevCtrl',
  bindings: {
    dev: '<',
    npo: '<'
  }
};


function contactDevController($log, $location, devService, userService, authService, npoService){
  $log.debug('running contactDevCtrl');

  this.nonP = {};

  this.isNPO = false;

  npoService.fetchNpo()
  .then(res => {
    if (res) {
      this.nonP.org = res.data.org;
      this.nonP.email = res.data.email;
      this.isNPO = true;
    }
    else {
      this.isNewUser = true;
    }
  });



}
