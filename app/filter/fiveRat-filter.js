'use strict';

module.exports = function(){
  return function (developers, value){
    console.log(value);
    if(!value) return /.*/;
    developers.dev.forEach(developer, function(){
      if(developers.dev.ratings == value) {
        return developers.dev;
      }
    });
  };
};
