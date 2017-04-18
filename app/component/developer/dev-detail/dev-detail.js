require('./_dev-detail.scss');

module.exports = {
  template: require('./dev-detail.html'),
  controller: ['$log', '$q', 'devService','userService', 'Cloudinary', DevDetailController],
  controllerAs: 'devDetailCtrl',

  bindings: {
    dev: '<',
  },
};

function DevDetailController($log, $q, devService, userService, Cloudinary){

  $log.debug('running galleryUpCtrl');
  this.token = userService.token;
  console.log('token', this.token);



  this.addDevRating = function(rating){
    this.dev.reviews.push(rating)
    devService.rateDev(this.dev);
  }









//end of controller
}
