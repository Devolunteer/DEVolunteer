require('./_contact-dev.scss');

module.exports = {
  template: require('./contact-dev.html'),
  controller: ['$log', '$location', 'devService', 'userService', 'Cloudinary', devItemController],
  controllerAs: 'contactDevCtrl',
  bindings: {
    dev: '<'
  }
};

function contactDevController($log, $location, devService, userService, Cloudinary){
  $log.debug('running contactDevCtrl');

  // this.selectedDev = {};
  // this.showDev = false;
  // this.showMsg = false;

  this.contactDev = false;


  this.contactDev = function(){
    this.contactDev = true;
  };

  this.cancelContact = function() {
    this.contactDev = false;
  };

  //here below will be the call to the back end to actually send the message.

  //this.emailDev = function(dev) {
    //in here, 
// }
