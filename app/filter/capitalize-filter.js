'use strict';

module.exports = function() {
  return function(devs) {
    console.log('dev svcs', devs);
    return devs.charAt(0).toUpperCase() + devs.slice(1);
  };
};
