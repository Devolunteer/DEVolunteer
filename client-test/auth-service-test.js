'use strict';

const angular = require('angular');


describe('testing authService', function(){
  // let url = 'http://localhost:3000/api/login';
//set up mocks
  beforeEach(() => {
    angular.mock.module('DEVolunteer');
    angular.mock.inject((authService, $window, $rootScope, $httpBackend) => {
      this.authService = authService;
      // authService.setToken('testMahToeKin');
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


//test getToken()

  describe('authService.getToken()', () => {
    it('should return a token named J.R.R. Token', () => {
      this.$window.localStorage.setItem('token', 'J.R.R. Token');

      this.authService.getToken()
      .then(token => {
        expect(token).toEqual('J.R.R. Token');
      });

      this.$window.localStorage.removeItem('token');
      this.$rootScope.$apply();
    });

    it('should return "token not found"', () => {
      this.authService.getToken()
      .catch(err => {
        expect(err.message).toEqual('token not found');
      });

      this.$rootScope.$apply();
    });
  });
});
