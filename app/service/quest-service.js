//service for displaying the questions on the questionnaire.
'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', questService];

function questService($q, $log, $http, Upload, authService) {
  $log.debug('devService');

  let service = {};


  // service.showDetail = function(devData){
  //   let url = `${__API_URL__}/api/`
  // }


  return service;
};
