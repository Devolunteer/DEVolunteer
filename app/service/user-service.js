'use strict';

module.exports = ['$q', '$log', '$http', 'authService', userService];

function userService($q, $log, $http, authService) {
  let service = {};

  service.showDevEdits = false;
  service.showNpoEdits = false;

  service.fetchUser = function(){
    $log.debug('userService.fetchUser');

    return authService.getToken()
    .then(token => {
      console.log('GETTING THE TOKEN');
      console.log(token);
      let url =`http://localhost:3000/api/user`;//will change this
      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('user retrieved');
      console.log('HERE IS THE RESPONSE DATA');
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      // $log.error(err.message);
      return $q.reject(err);
    });
  };

  service.deleteProfile = function() {
    console.log('trying to DELETE a user');
    $log.debug('userService.deleteUser()');

    return authService.getToken()
    .then(token => {
      let url = `http://localhost:3000/api/user/`;
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
