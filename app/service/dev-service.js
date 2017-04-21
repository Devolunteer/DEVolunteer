'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', 'Cloudinary', devService];

function devService($q, $log, $http, Upload, authService, Cloudinary) {
  $log.debug('devService');
  console.log(Cloudinary);

  let service = {};
  service.devList = [];
  service.dev;
  service.currentDev;

  service.fetchDevs = function() {
    console.log('in the fetchDevs, yo');
    let url =`${__API_URL__}/api/devList`;
    console.log('url', url);

    return $http.get(url)
    .then( res => {
      $log.log('response = you have dev objects from server to work with');
      service.devList = res.data;
      $log.log(service.devList, ' = devService.devList');
      return service.devList;
    })
    .catch( err => {
      console.log('in the fetchDevs catch');
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.checkDev = function(dev) {
    if(dev) {
      return true;
    } else {
      return false;
    }
  };

  service.createDev = function(dev) {
    console.log('trying to create a dev');
    $log.debug('devService.createDev()');

    return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/dev/`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        return $http.post(url, dev, config);
      })
    .then(res => {
      $log.log('dev created');
      let dev = res.data;
      console.log('LOGGING THE DEV AFTER A POST');
      console.log(dev);
      service.devList.unshift(dev);
      return dev;
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.fetchDev = function() {
    //T
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/dev`;
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config) //try to get the user from the dev database
      .then(user => { //if you succeed, the the user exists in the dev database
        return user;
      })
      .catch(() => { //if there is no user in the dev database, you should hit the catch
        return false;
      });
    });
  };

  service.updateDev = function(dev) {
    console.log('trying to UPDATE a dev');
    $log.debug('devService.updateDev()');

    return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/dev/`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        return $http.put(url, dev, config)
        .then(res => {
          let dev = res.data;
          return dev;
        })
        .catch(err => {
          console.log(err);
          return $q.reject(err);
        });
      });
  };


  service.rateDev = function(dev, rating) {
    $log.debug('devService.rateDev()');
    return authService.getToken()
      .then(token => {
        let url = `${__API_URL__}/api/dev/`;
        let config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        $log.log('set the headers');
        return $http.put(url, dev, config)
        .then(res => {
          console.log('res', res);
          let dev = res.data;
          console.log('returned dev', dev)
          return dev;
        })
        .catch(err => {
          console.log('in the rateDev catch');
          console.log(err);
          return $q.reject(err);
        });
      });
  };

  service.sendMail = function(email) {
    $log.debug('devService.sendMail()')

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/dev/contact`

    let config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    return $http.post(url, email, config)
    .then(res => {
      console.log('res', res);
    })
    .catch(err => {
      console.log('in the sendMail catch');
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
      console.log('LOGGING THE RESPONSE DATA');
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      console.error(err);
      return $q.reject(err);
    });
  };




  service.showDetail = function(){
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/dev`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config)
      .then(res => {
        $log.log('here is a dev, yo', res.data);
        service.dev = res.data;
        return service.dev;
      });
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  //grabbing individual dev by their ._id prop
  service.getDevByID = function(dev){
    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/dev/${dev._id}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config)
      .then(res => {
        $log.log('here is a dev, yo', res.data);
        service.currentDev = res.data;
        console.log('res', res.data);
        return service.currentDev;
      });
    })
    .catch(err => {
      $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deleteDev = function() {
    console.log('trying to DELETE a dev');
    $log.debug('devService.deleteDev()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/dev`
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
