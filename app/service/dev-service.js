//need a service for pulling in the developer details.
'use strict';

module.exports = ['$q', '$log', '$http', 'Upload', 'authService', devService];

function devService($q, $log, $http) {
  $log.debug('devService');

  let service = {};
  service.devList = [];

  service.fetchDevs = function(){
    console.log('in the fetchDevs, yo');
    let url =`http://localhost:3000/api/devList`;
    // let url =`${__API_URL__}/api/dev`;
    console.log('url', url);
      // let config = {
      //   headers: {
      //     Accept: 'application/json',
      //     Authorization: `Bearer ${token}`
      //   }
      // };

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

  



  // service.showDetail = function(devData){
  //   let url = `${__API_URL__}/api/dev/${dev._id}`;
  //   let config = {
  //     headers: {
  //       Accept: 'application/json',
  //     }
  //   };
  //   return $http.get(url, config)
  //   .then(res => {
  //     $log.log('here is a dev, yo');
  //     service.developer = res.data;
  //     return service.developer;
  //   })
  //   .catch(err => {
  //     $log.error(err.message);
  //     return $q.reject.err;
  //   });
  // };


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


  return service;
}
