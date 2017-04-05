'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', devService];

function devService($q, $log, $http, Upload, authService) {
  $log.debug('devService');

  let service = {};
  service.devList = [];
  service.dev;
  service.currentDev;

  let __API_URL__ = 'http://localhost:3000';

  service.fetchDevs = function() {
    console.log('in the fetchDevs, yo');
    let url =`http://localhost:3000/api/devList`;
    // let url =`${__API_URL__}/api/dev`;
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

  service.createDev = function(dev) {
    console.log('trying to create a dev');
    $log.debug('devService.createDev()');

    return authService.getToken()
      .then(token => {
        let url = `http://localhost:3000/api/dev/`;
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
      let url = `http://localhost:3000/api/dev`;
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
        let url = `http://localhost:3000/api/dev/`;
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
      return $q.reject.err;
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
      return $q.reject.err;
    });
  };


  return service;
}
//   service.deleteDev = function() {
//     console.log('trying to DELETE a dev');
//     $log.debug('devService.deleteDev()');
//
//     return authService.getToken()
//     .then(token => {
//       let url = `http://localhost:3000/api/dev/`;
//       let config = {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       };
//       return $http.delete(url, config);
//     })
//     .catch(err => {
//       console.log(err);
//       return $q.reject(err);
//     });
//   };
//   return service;
// }





//BELOW HERE IS THE EDIT DEVELOPER PROFILE FUNCTIONALITY. DO WE EVEN NEED THIS, IF WE'RE LETTING A DEV EDIT HIS PROFILE FROM THE PROFILE PAGE?

  // service.updateDev = function(devID, devData) {
  //   $log.debug('running devService.updateDev()');
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

    //NEED TO LOOK INTO THIS, WE'RE NOT MODIFYING AN ARRAY, SO CHECK PREVIOUS LABS ON HOW TO EDIT THIS.
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


//BELOW HERE IS THE DELETE A DEV FROM THE DB FUNCTION.  THIS WILL ALLOW A DEVELOPER TO REMOVE THEIR PROFILE FROM THE APP.

  // service.deleteDev = function(devID){
  //   $log.debug('running devService.deleteDev')
  //     return authService.getToken()
  //     .then(token => {
  //       let url = `${__API_URL__}/api/devs/${dev._ID}`;
  //       let config = {
  //         headers: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       };
  //       return $http.delete(url, config);
  //     })
  //     .then(res => {

        //THIS IS GOING TO BE TRICKY...WE'RE NOT DELETING FROM AN ARRAY, BUT FROM THE DB.  NEED TO LOOK UP HOW TO DO THAT FROM A PREVIOUS LAB.

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


//BELOW WILL BE THE LOGIC TO SUBMIT THE CONTACT DEVELOPER FORM
  // service.contactDev = function(){}
