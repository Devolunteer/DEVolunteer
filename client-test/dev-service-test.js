// 'use strict';
//
// const angular = require('angular');
//
// describe('setting up devService environment', function() {
//   beforeEach(() => {
//     angular.mock.module('DEVolunteer');
//     angular.mock.inject(($rootScope, $window, $httpBackend, authService, devService) => {
//       this.$rootScope = $rootScope;
//       this.$window = $window;
//       this.$httpBackend = $httpBackend;
//       this.authService = authService;
//       this.devService = devService;
//     });
//     this.testToken = 'testToken';
//     this.$window.localStorage.setItem('token', this.testToken);
//   });
//
//   afterEach(() => {
//     this.$window.localStorage.removeItem('token');
//   });
//
//   describe('#devService.createDev', () => {
//     it('should create a new dev', () => {
//       let testDev = {
//         username: 'Testacular',
//         desc: 'test desc',
//         city: 'test city',
//         state: 'test state',
//         phone: '123-456-7891',
//         available: true
//       };
//
//       let headers = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${this.testToken}`
//       };
// //do you want to have a slash at the end of dev for the mock endpoint?
//       this.$httpBackend.expectPOST('http://localhost:3000/api/dev/', testDev, headers).respond(200, {
//         _id : '12345',
//         username: testDev.username,
//         desc: testDev.desc,
//         city: testDev.city,
//         state: testDev.state,
//         phone: testDev.phone,
//         available: true,
//       });
//
//
//       this.devService.createDev(testDev);
//
//       expect(testDev.username).toBe('Testacular');
//       expect(testDev.desc).toBe('test desc');
//       expect(testDev.city).toBe('test city');
//       expect(testDev.state).toBe('test state');
//       expect(testDev.phone).toBe('123-456-7891');
//       expect(testDev.available).toBe(true);
//
//       this.$httpBackend.flush();
//       this.$rootScope.$apply();
//     });
//   });
//
// //fetchDevs is an unauthed route. do not pass in authentication
//   describe('#devService.fetchDevs', () => {
//     it('should return a devList', () => {
//
//       this.$httpBackend.expectGET('http://localhost:3000/api/devList').respond(200);
//
//       this.devService.fetchDevs();
//
//       expect(Array.isArray(this.devService.devList)).toBe(true);
//
//       this.$httpBackend.flush();
//       this.$rootScope.$apply();
//     });
//   });
//
//   describe('#devService.fetchDev', () => {
//     it('should return status code 200', () => {
//
//       let headers = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${this.testToken}`
//       };
//
//       this.$httpBackend.expectGET('http://localhost:3000/api/dev', headers).respond(200);
//
//       this.devService.fetchDev();
//       this.$rootScope.$apply();
//
//
//     });
//   });
// });
