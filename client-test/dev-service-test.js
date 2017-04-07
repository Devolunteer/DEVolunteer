'use strict';

const angular = require('angular');

describe('setting up devService environment', function() {
  beforeEach(() => {
    angular.mock.module('DEVolunteer');
    angular.mock.inject(($rootScope, $window, $httpBackend, authService, devService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
      this.devService = devService;
    });
    this.testToken = 'testToken';
    this.$window.localStorage.setItem('token', this.testToken);
  });

  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  });

  describe('#devService.createDev', () => {
    it('should create a new dev', () => {
      let testDev = {
        username: 'Testacular',
        desc: 'test desc',
        city: 'test city',
        state: 'test state',
        phone: '123-456-7891',
        available: true
      };

      let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.testToken}`
      };
//do you want to have a slash at the end of dev for the mock endpoint?
      this.$httpBackend.expectPOST('http://localhost:3000/api/dev/', testDev, headers).respond(200, {
        _id : '12345',
        username: testDev.username,
        desc: testDev.desc,
        city: testDev.city,
        state: testDev.state,
        phone: testDev.phone,
        available: true,
      });

      this.devService.createDev(testDev);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
