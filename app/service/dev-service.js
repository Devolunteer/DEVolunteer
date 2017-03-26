//need a service for pulling in the developer details.
'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', devService];

function devService($q, $log, $http, Upload, authService) {
  $log.debug('devService');

  let service = {};


  service.showDetail = function(devData){
    let url = `${__API_URL__}/api/`
  }


  return service;
};
