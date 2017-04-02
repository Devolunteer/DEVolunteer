//need a service for pulling in the npoeloper details.
'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', npoService];

function npoService($q, $log, $http, Upload, authService) {
  $log.debug('npoService');

  let service = {};


  service.showDetail = function(npoData){
    // let url = `${__API_URL__}/api/npo/${npo._id}`;
    let config = {
      headers: {
        Accept: 'application/json',
      }
    };
    return $http.get(url, config)
    .then(res => {
      $log.log('here is a npo, yo');
      service.npo = res.data;
      return service.npo;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject.err;
    });
  };

  service.createNpo = function(npo) {
    console.log('trying to create an npo');
    $log.debug('npoService.createNpo()');

    return authService.getToken()
      .then(token => {
        let url = `http://localhost:3000/api/npo/`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        return $http.post(url, npo, config);
      })
    .then(res => {
      $log.log('npo created');
      let npo = res.data;
      console.log('LOGGING THE npo AFTER A POST');
      console.log(npo);
      return npo;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.fetchNpo = function() {
    return authService.getToken()
    .then(token => {
      let url = `http://localhost:3000/api/npo`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config) //try to get the user from the npo database
      .then(user => { //if you succeed, the the user exists in the npo database
        return user;
      })
      .catch(() => { //if there is no user in the npo database, you should hit the catch
        return false;
      });
    });
  };

  service.updateNpo = function(npo) {
    console.log('trying to UPDATE a npo');
    $log.debug('npoService.updatenpo()');

    return authService.getToken()
      .then(token => {
        let url = `http://localhost:3000/api/npo/`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        return $http.put(url, npo, config)
        .then(res => {
          let npo = res.data;
          console.log('HERE IS THE npo AFTER A PUT');
          console.log(npo);
          return npo;
        })
        .catch(err => {
          console.log(err);
          return $q.reject(err);
        });
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
