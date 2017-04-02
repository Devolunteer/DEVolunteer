'use strict';

require('./_dev-list.scss');

module.exports = {
  template: require('./dev-list.html'),
  controller: ['$log', 'devService', devListController],
  controllerAs: 'devListCtrl',
  bindings: {
    dev: '<'
  }
};

function devListController($log, devService) {
  $log.debug('devServiceController()');
  this.dev = {};
  this.checked = true;


  //retrieve all items in the devService.devList array
  devService.fetchDevs() //returns a Promise that i can filter by specific dev properties that are taken in by the form filter
  .then( devList => {
    this.dev = devList;
    $log.log('response (developers) is saved on .dev property');
  })
  .catch(e => {
    console.log(e);
  });



  //filter stuff:

 this.availCheck = function(){
   let devArr = this.dev;
   for(var i=0; i < devArr.length; i++){
     let devArridx = devArr[i];
     console.log('avail', devArridx.available);

     devArr.reduce(function(devArr){
       if(devArridx.available === false){
         devArr.splice(i, 0)
       }
       console.log('dev3333', devArr);
     });
     return devArr;
   }
 };
//
//
// this.devlist - this.devlist.reduce()
//
// ng-checked runs a function in the controller, and that function will reduce the dev list.
}
