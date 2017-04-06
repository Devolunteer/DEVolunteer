// 'use strict';
//
// console.log('in the controller');
// require('./_about-us.scss');
//
// require('angular').module('DEVolunteer')
// .component('aboutUs', {
//   template: require('./about-us.html'),
//   controllerAs: 'aboutUsCtrl',
//   controller: [function() {
//     console.log('booyah');
//     this.$onInit = function() {
//       this.imageURI = require('../../assets/img/coders/me.png');
//       console.log('this is the image', this.imageURI);
//     }
//   }]
// });

'use strict';

require('./_about-us.scss');


module.exports = {
  template: require('./about-us.html'),
  controller: ['$log', AboutUsController],
  controllerAs: 'aboutUsCtrl',
};

function AboutUsController($log) {
  $log.debug('AboutUs Controller');

  this.$onInit = function() {
    this.imgURI = require('../../assets/img/coders/me.png');
    console.log(this.imgURI);
  }
}
