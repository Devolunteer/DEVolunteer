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
  this.checked = true;


  //retrieve all items in the devService.devList array
  devService.fetchDevs() //returns a Promise that i can filter by specific dev properties that are taken in by the form filter
  .then( devList => {
    this.dev = devList;
    this.dev.forEach(function(dev){
      dev.services = [];
      for(let key in dev){
        if(dev[key] === true){
          dev.services.push(key)
        }
        // console.log('services array', dev.services);
      }
    })




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
// this.jsCheck = function(){
//   console.log('in the jsCheck');
//   for(var i = this.dev.length - 1; i >= 0; i--){
//     console.log('index', this.dev[i].services);
//     for(var k = this.dev[i].services.length - 1; k >=0; k--){
//       if(this.dev[i].services[k] === 'javascript'){
//         console.log('found js');
//         this.filtered.push(this.dev[i]);
//
//       }
//     }
//   }
//   console.log('Showfiltered', this.filtered);
//   return this.filtered;
// };

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
