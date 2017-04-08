'use strict';

module.exports = function() {
  return function(devs, bool=false) {
    if(bool === true) {
      devs = devs.filter(dev => {
        return dev.services.includes('python')
      })
      console.log('devs length', devs.length);
      return devs;
    }
    return devs;
  };
};
