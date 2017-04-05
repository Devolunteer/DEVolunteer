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


  let ratings = [];

  this.addDevRatings = function(rating){
    console.log('in the add dev ratings');
    ratings.push(rating)
    console.log('ratings', ratings);
  }
  //
  // this.averageReviews = function(){
  //   //math here for reviews
  // }

}
