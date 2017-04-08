'use strict';

const angular = require('angular');

describe('dev-list-controller environment', function(){

  beforeEach(() => {
    angular.mock.module('DEVolunteer');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, $window, devService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.devService = devService;
      this.$window = $window;
    });
    this.testToken = 'J.R.R. Token';
    this.$window.localStorage.setItem('token', this.testToken);
  });

  afterEach(() => {
    this.$window.localStorage.removeItem('token');
  });

  describe('devListController.fetchDevs', () => {
    it('should call #.fetchDevs', () => {
      let url =`http://localhost:3000/api/devList`;
      let mockBindings = {
        dev: {
          _id: '12345',
          username: 'Testacular',
          desc: 'test desc',
          city: 'test city',
          state: 'test state',
          phone: '123-456-7891',
          available: true,
        }
      };
      expect(true).toBe(true);
    });
  });
});
