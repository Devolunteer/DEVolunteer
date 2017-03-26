//need a service for pulling in the developer details.
'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', devService];

function devService($q, $log, $http, Upload, authService) {
  $log.debug('devService');

  let service = {};


  service.showDetail = function(devData){
    let url = `${__API_URL__}/api/dev/${dev._id}`;
    let config = {
      headers: {
        Accept: 'application/json',
      }
    };
    return $http.get(url, config)
    .then(res => {
      $log.log('here is a dev, yo');
      service.developer = res.data;
      return service.developer;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject.err;
    });
  };


  return service;
}
