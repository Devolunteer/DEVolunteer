'use strict';

require('./_dev-list.scss');

module.exports = {
  template: require('./dev-list.html'),
  controller: ['$log', 'devService', devListController],
  controllerAs: 'devListCtrl',
  bindings: {
    dev: '<',
  }
};

function devListController($log, devService) {
  $log.debug('devServiceController()');
  this.dev;
  this.filtered = [];
  this.devRev;




  //retrieve all items in the devService.devList array
  devService.fetchDevs() //returns a Promise that i can filter by specific dev properties that are taken in by the form filter
  .then( devList => {
    this.dev = devList;
    this.dev.forEach(function(dev){
      dev.services = [];
      for(let key in dev){
        if(dev[key] === true){
          dev.services.push(key);
        }
      }
    });

    $log.log('response (developers) is saved on .dev property');
    console.log('length', this.dev.length);
    console.log('devs', this.dev);
  })
  .then( devList => {
    this.dev.forEach(function(dev){
      let sum = 0;
      for( var i = 0; i < dev.reviews.length; i++){
        sum += parseInt(dev.reviews[i], 10);
      }
      console.log('sum', sum);
      dev.avg = sum/dev.reviews.length;
      console.log('avg', dev.avg);
    })
  })







  .catch(e => {
    console.log(e);
  });

  // this.getAverageRating = function()

  // this.getAverageRating = function(dev){
  //   console.log('running get average rating');
  //   devService.getDevByID(dev)
  //   .then(dev => {
  //     console.log('dev', dev);
  //     // let sum = 0;
  //     // for( var i = 0; i < dev.reviews.length; i++){
  //     //   sum += parseInt(dev.reviews[i], 10);
  //     // }
  //     // let avg = sum/dev.reviews.length;
  //   });
  //   // this.dev.avg = dev.avg;
  // };


//end of the controller
}
