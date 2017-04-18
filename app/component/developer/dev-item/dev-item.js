require('./_dev-item.scss');

module.exports = {
  template: require('./dev-item.html'),
  controller: ['$log', '$location', 'devService', 'userService', 'Cloudinary', devItemController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<'
  }
};

function devItemController($log, $location, devService, userService, Cloudinary){
  $log.debug('running devItemCtrl');

  this.selectedDev = {};
  this.showDev = false;
  this.showMsg = false;
  // this.dev.avg;

  this.showLess = function() {
    this.showDev = false;
  };

  this.isUser = false;
  this.username = '';

  userService.fetchUser()
    .then(user => {
      if(!user) {
        this.isUser = false;
      } else {
        this.isUser = true;
      }
    });


  this.showDetailView = function(dev) {
    devService.getDevByID(dev)
    .then(dev => {
      $log.log('this is a dev ', dev);
      this.selectedDev = dev;
      this.showDev = true;
      console.log('selectedDev', this.selectedDev);
      console.log('selected Name', this.selectedDev.name);
      console.log('reviews', this.selectedDev.reviews);
    })
    .catch(() => {
      this.showMsg = true;
    });
  };








}
