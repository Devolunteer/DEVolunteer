'use strict';

require('./_home.scss');

module.exports = ['$log', '$rootScope', 'devService', 'questService', HomeController];

function HomeController($log, $rootScope, devService, questService) {
  $log.debug('In the HomeController');

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
}
