// 'use strict';
//
// module.exports = function(){
//   return available(){
//     console.log('available is clicked');
//   };
//   // };
// };

// let available = function(developers, value){
//   console.log(value);
//   if(!value) return /.*/;
//   developers.dev.forEach(item, function(){
//     if(developers.dev.available == value) {
//       return developers.dev;
//     }
//   });
// };



'use strict';

module.exports = function(){
  return function availableCheck(dev) {
      // Display the wine if
      let displayDev =
      // the wine's category checkbox is checked (`filter[category]` is true)
      devListCtrl.filter[dev.available] ||   // or

      // no checkbox is checked (all `filter[...]` are false)
      noFilter(devListCtrl.filter);

      return displayDev;
    };
    function noFilter(filterObj) {
      return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
}
  };
