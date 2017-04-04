require('./_dev-detail.scss');

module.exports = {
  template: require('./dev-detail.html'),
  controller: ['$log', 'devService','userService', DevDetailController],
  controllerAs: 'devItemCtrl',
  bindings: {
    dev: '<',
  },
};

function DevDetailController($log, devService, userService){
  $log.debug('running galleryUpCtrl');
  this.token = userService.token;
  console.log('token', this.token);
  let ratings = [];

  this.addDevRatings = function(rating){
    ratings.push(rating)
    console.log('ratings', ratings);
  }

  this.averageReviews = function(){
    //math here for reviews
  }
}
