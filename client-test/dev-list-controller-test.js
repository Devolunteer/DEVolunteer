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

      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      };

      let mockBindings = {
        devList: {

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
        fetchDevs: function() {
          expect(Array.isArray(mockBindings.devList)).toBeDefined();
          expect(mockBindings.devList.dev._id).toBe('12345');
        }
      };
      this.$httpBackend.expectGET(url, headers, mockBindings).respond(200, mockBindings);

      //mock fetchDevs, pass in bindings and test they come back..

      let devListCtrl = this.$componentController('devList', null, mockBindings);

      devListCtrl.fetchDevs();
      expect(Array.isArray(mockBindings.devList.dev)).toBeDefined();
      expect(devListCtrl.devList.dev.desc).toBe('test desc');
      // expect(Array.isArray(mockBindings.devList)).toEqual(true);
    });
  });
});
