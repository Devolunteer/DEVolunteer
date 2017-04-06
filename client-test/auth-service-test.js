'use strict';

const angular = require('angular-mocks');

describe('testing authService', function(){
  // let url = 'http://localhost:3000/api/login';
//set up mocks
  beforeEach(() => {
    angular.mock.module('DEVolunteer');
    angular.mock.inject((authService, $window, $rootScope, $httpBackend) => {
      this.authService = authService;
      authService.setToken('testMahToeKin');
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
    });
  });

  afterEach(() => {
    this.authService.token = null; //is this named properly?
    this.$window.localStorage.clear();
  });

//test authService methods since environment is set up
  describe('#authService.getToken()', () => {
    this.authService.token = 'J.R.R. token';

    this.authService.getToken()
    .then(token => {
      expect(token).toEqual('J.R.R. token');
    });
  });
  this.$rootScope.apply();
});
