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

//is the dev available
// this.availCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(!devArr[i].available){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };

//Type of Work the Dev Does:
// this.websiteCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === website){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.mobileCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === mobile){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.webAppCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === webapp){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.otherWorkCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === other){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };


//Languages the Dev Knows
this.jsCheck = function(){
  let devArr = this.dev;
  for(var i=devArr.length - 1; i >= 0; i--){
    if(devArr[i].javascript){
      devArr.splice(i, 1);
    }
  }
  return devArr;
};

this.htmlCheck = function(){
  let devArr = this.dev;
  for(var i=devArr.length - 1; i >= 0; i--){
    if(devArr[i].html){
      devArr.splice(i, 1);
    }
  }
  return devArr;
};

this.angularCheck = function(){
  let devArr = this.dev;
  for(var i=devArr.length - 1; i >= 0; i--){
    if(devArr[i].angular){
      devArr.splice(i, 1);
    }
  }
  return devArr;
};

this.reactCheck = function(){
  let devArr = this.dev;
  for(var i=devArr.length - 1; i >= 0; i--){
    if(devArr[i].react == true){
      devArr.splice(i, 1);
    }
  }
  return devArr;
};

this.pythonCheck = function(){
  let devArr = this.dev;
  for(var i=devArr.length - 1; i >= 0; i--){
    if(devArr[i].python){
      devArr.splice(i, 1);
    }
  }
  return devArr;
};

this.unknownCheck = function(){
  let devArr = this.dev;
  for(var i=devArr.length - 1; i >= 0; i--){
    if(devArr[i].otherlang){
      devArr.splice(i, 1);
    }
  }
  return devArr;
};
//
// //Reviews the Dev has received
//
// this.fiveCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === website){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.fourCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === website){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.threeCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === website){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.twoCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === website){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };
//
// this.oneCheck = function(){
//   let devArr = this.dev;
//   for(var i=devArr.length - 1; i >= 0; i--){
//     if(devArr[i].services === website){
//       devArr.splice(i, 1);
//     }
//   }
//   return devArr;
// };


// this.resetFilters = function(){
//
// }





//end of the controller
}
