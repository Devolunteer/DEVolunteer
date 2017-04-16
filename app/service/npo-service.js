//need a service for pulling in the npoeloper details.
'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', npoService];

function npoService($q, $log, $http, Upload, authService) {
  $log.debug('npoService');

  let service = {};
  service.npoList = [];


  service.fetchNpos = function() {
    // let url =`${__API_URL__}/api/npoList`;
    let url =`http://localhost:3000/api/npoList`;

    return $http.get(url)
    .then( res => {
      $log.log('response = you have dev objects from server to work with');
      service.npoList = res.data;
      $log.log(service.npoList, ' = devService.devList');
      return service.npoList;
    })
    .catch( err => {
      console.log('in the fetchNpos catch');
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.checkNpo = function(npo) {
    if(npo) {
      return true;
    } else {
      return false;
    }
  };


  service.showDetail = function(npoData){
    // let url = `${__API_URL__}/api/npo/${npo._id}`;
    let config = {
      headers: {
        Accept: 'application/json'
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
    $log.debug('npoService.createNpo()');

    return authService.getToken()
      .then(token => {
        let url = `http://localhost:3000/api/npo`
        // let url = `${__API_URL__}/api/npo/`;
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
      // let url = `${__API_URL__}/api/npo`;
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
    $log.debug('npoService.updateNpo()');

    return authService.getToken()
      .then(token => {
        let url = `http://localhost:3000/api/npo`
        // let url = `${__API_URL__}/api/npo/`;
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
          console.log(npo);
          return npo;
        })
        .catch(err => {
          console.log(err);
          return $q.reject(err);
        });
      });
  };
  service.uploadPic = function(file) {
    return Upload.upload({
      url: `https://api.cloudinary.com/v1_1/dy7kdxxqe/image/upload`,
      data: {
        upload_preset:'Devolunteer',
        file: file
      }
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.error(err);
      return $q.reject(err);
    });
  };

  service.deleteNpo = function() {
    console.log('trying to DELETE a npo');
    $log.debug('npoService.deleteNpo()');

    return authService.getToken()
    .then(token => {
      let url = `http://localhost:3000/api/npo`
      // let url = `${__API_URL__}/api/npo/`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      return $http.delete(url, config);
    })
    .catch(err => {
      console.log(err);
      return $q.reject(err);
    });
  };

  return service;
}
