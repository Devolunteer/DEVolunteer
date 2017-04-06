'use strict';

require('./_partners.scss');


module.exports = ['$log', PartnersController];

function PartnersController($log) {
  $log.debug('In the partners controller');
}


  // THIS WILL NEED TO PULL IN OR HAVE THE INFORMATION FOR THE QUESTIONAIRE TO DISPLAY.


  // this.today = new Date();
  // this.galleries = [];
  // console.log('this.galleries', this.galleries);
  //
  // this.showQuestions = function(){
  //   questService.showQuest()
  //   .then(galleries => {
  //     this.galleries = galleries;
  //     console.log('this.galleries2', this.galleries);
  //   });
  // };

  // $rootScope.$on('$locationChangeSuccess', () =>{
  //   this.fetchGalleries();
  // })
