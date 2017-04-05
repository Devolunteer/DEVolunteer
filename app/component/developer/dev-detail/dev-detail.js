require('./_dev-detail.scss');

module.exports = {
  template: require('./dev-detail.html'),

  controller: ['$log', '$q', 'devService','userService', DevDetailController],
  controllerAs: 'devDetailCtrl',
  bindings: {
    dev: '<',
  },
};

function DevDetailController($log, devService, userService){
  $log.debug('running galleryUpCtrl');
  this.token = userService.token;
  console.log('token', this.token);



  // let ratings = [];
  // this.userAuthenticated = false;
  //
  // this.setAuthenticated = function(){
  //   userService.fetchUser()
  //   .then(user => {
  //     console.log('user is auth');
  //     return user.userAuthenticated = true;
  //   })
  //   .catch(err);
  //     return $q.reject(err);
  // };
  //
  // this.addDevRatings = function(rating){
  //   ratings.push(rating)
  //   console.log('ratings', ratings);
  // }
  //
  // this.averageReviews = function(){
  //   //math here for reviews
  // }


}
