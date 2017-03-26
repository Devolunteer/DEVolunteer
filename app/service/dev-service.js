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

  // service.updateGallery = function(galleryID, galleryData) {
  //   $log.debug('running galleryService.updateGallery()');
  //
  //   return authService.getToken()
  //   .then(token => {
  //     let url = `${__API_URL__}/api/gallery/${galleryID}`;
  //     let config = {
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //     return $http.put(url, galleryData, config);
  //   })
  //   .then(res => {
  //     for(let i=0; i<service.galleries.length; i++) {
  //       let current = service.galleries[i];
  //       if(current._id === galleryID) {
  //         service.galleries[i] = res.data;
  //         break;
  //       };
  //     };
  //     return res.data;
  //   })
  //   .catch(err => {
  //     $log.error(err.message);
  //     return $q.reject(err);
  //   });
  // };

  // service.deleteGallery = function(galleryID){
  //   $log.debug('running galleryService.updateGallery()/delete')
  //     return authService.getToken()
  //     .then(token => {
  //       let url = `${__API_URL__}/api/gallery/${galleryID}`;
  //       let config = {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       };
  //       return $http.delete(url, config);
  //     })
  //     .then(res => {
  //       for(let i = 0; i < service.galleries.length; i++) {
  //         let current = service.galleries[i];
  //         if(current._id === galleryID) {
  //           service.galleries.splice(i, 1);
  //           break;
  //         };
  //       };
  //     })
  //     .catch(err => {
  //       $log.error(err.message);
  //       return $q.reject(err);
  //     });
  //   };



  return service;
}
