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
      let url =`${__API_URL__}/api/user`;

      let config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('user retrieved');
      return res.data;
    })
    .catch(err => {
      // $log.error(err.message);
      return $q.reject(err);
    });
  };


  service.deleteUser = function() {
    $log.debug('userService.deleteUser()');

    return authService.getToken()
    .then(token => {
      let url = `${__API_URL__}/api/user/`;

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
