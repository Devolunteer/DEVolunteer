'use strict';

const angular = require('angular');

describe('dev-item-controller environment', function(){

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


  describe('devItemCtrl.showDetailView', () => {
    it('#showDetailView should be called', () => {
      //showDetailView gets a dev and 1)sets it equal to .selectedDev on the controller 2) sets a .showDev flag to true 3) .catch checks to see that .showMsg gets tripped as an un-authed error
      let url = `http://localhost:3000/api/dev/12345`;

      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.testToken}`
      };

      let mockBindings = {
        dev: {
          _id: '12345',
          username: 'Testacular',
          desc: 'test desc',
          city: 'test city',
          state: 'test state',
          phone: '123-456-7891',
          available: true,
        },
        showDev: false,
        showMsg: false,
        showDetailView: function(mockBindings){
          expect(mockBindings.dev.username).toEqual('Testacular');
          expect(mockBindings.showDev).toBe(false);
          // expect(mockBindings.showMsg).toBe(false);
        }
      };

      this.$httpBackend.expectGET(url, mockBindings, headers).respond(204, mockBindings);

      let devItemCtrl = this.$componentController('devItem', null, mockBindings);

      devItemCtrl.showDetailView(mockBindings);
      expect(mockBindings.showDev).toBe(false);
    });
  });
});
