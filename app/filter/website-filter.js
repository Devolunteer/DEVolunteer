'use strict';

module.exports = function() {
  return function(devs, bool=false) {
    // console.log('checked is', devs.selected);
    if(bool === true) {
      devs = devs.filter(dev => {
        return dev.services.includes('websitework')
      })
      return devs
    }
    return devs;
  };
};
