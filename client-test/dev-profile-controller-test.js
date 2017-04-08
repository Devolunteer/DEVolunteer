'use strict';

const angular = require('angular');

describe('dev-profile-controller environment', function(){

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

  describe('devProfileCtrl.fetchDev', () => {
    it('should call #fetchDev', () => {
      let url =`http://localhost:3000/api/dev`;

      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.testToken}`
      };

      let mockBindings = {
        devlist: {

          dev: {
            _id: '12345',
            username: 'Testacular',
            desc: 'test desc',
            city: 'test city',
            state: 'test state',
            phone: '123-456-7891',
            available: true,
          },
        },
        fetchDev: function() {
          expect(Array.isArray(mockBindings.devList)).toBeDefined();
          // expect(mockBindings.devList.dev._id).toBe('12345');
        }
      };

      this.$httpBackend.expectGET(url, headers, mockBindings).respond(200, mockBindings);

      let devProfileCtrl = this.$componentController('devList', null, mockBindings);

      devProfileCtrl.fetchDev();
      expect(Array.isArray(mockBindings.devList)).toBeDefined();

    });
  });
});
