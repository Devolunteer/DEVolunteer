'use strict';

module.exports = function() {
  return function(devs, bool=false) {
    console.log('hit the reset filter');
    if(bool === true) {
      // devs = devs.filter(dev => {
      //   return dev.services.includes('angular')
      // })
      return devs
    }
    // return devs;
  };
};
