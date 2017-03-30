'use strict';
// DEPS
const server = require('../backend/server');
const expect = require('chai').expect;
const request = require('superagent');
const Promise = require('bluebird');
const mongoose = require('mongoose');
require('../backend/server')
// USER FILES
const User = require('../backend/model/user');
// const testUser = require('./lib/test-user');
const serverToggle = require('./lib/server-toggle');

mongoose.Promise = Promise;

const PORT = process.env.PORT || 3000;
const url = 'http://localhost:3000';

const testUserDev = {
  username: 'testerDev',
  password: 'testerDevpass123',
  email: 'testDev@dev.test',
  isDev: true,
  isNPO: false,  // TODO: MABYE REDUNDANT?
};

const testUserNPO = {
  username: 'testerNPO',
  password: 'testerNPOpass123',
  email: 'testNPO@npo.test',
  isNPO: true,
  isDev: false,  // TODO: MABYE REDUNDANT?
};

describe('The AUTH ROUTE', function(){
  before(done => serverToggle.serverUp(server, done));
  // after(done => serverToggle.serverDown(server, done));

  afterEach(done => {
    // console.log(req);
    User.remove({})
    .then( () => done())
    .catch(done);
  });


  describe('#POST route /api/signup', function() {
    describe('Signing up a New Dev User', function(){
      it('should return a token', (done) => {
        request.post(`${url}/api/signup`)
        .set('Content-type', 'application/json')
        .send(testUserDev)
        .end((err, res) => {
          // console.error(err);
          if(err) return done(err);
          console.log('RES.TEXT:\n', res.text);
          console.log('\nRES.BODY :\n', res.body);
          console.log('\nSTATUS:\n', res.status);
          expect(res.status).to.equal(200);
          expect(!!res.text).to.equal(true);
          done();
        });
      });
    });
    describe('No username verification', function(){
      it('should return a status of 500', (done) => {
        // console.log(testUserDev.username)
        request.post(`${url}/api/signup`)
        .send({
          password: testUserDev.password,
          email: testUserDev.email,
        })
        .end((err, res) => {
          console.log('RES.TEXT:\n', res.text);
          console.log('\nRES.BODY :\n', res.body);
          console.log('\nSTATUS:\n', res.status);
          expect(res.status).to.equal(500);
          expect(res.text).to.equal('InternalServerError');
          done();
        });
      });
    });
  //
  //   describe('with no password', function(){
  //     it('should return a status of 400', (done) => {
  //       request.post(`${url}/api/signup`)
  //       .send({
  //         username: testUserDev.name,
  //         email: testUserDev.email,
  //       })
  //       .end((err, res) => {
  //         expect(res.status).to.equal(400);
  //         expect(res.text).to.equal('BadRequestError');
  //         done();
  //       });
  //     });
  //   });
  //
  //   describe('with no email', function(){
  //     it('should return a status code of 400', (done) => {
  //       request.post(`${url}/api/signup`)
  //       .send({
  //         username: testUserDev.username,
  //         password: testUserDev.password,
  //       })
  //       .end((err, res) => {
  //         expect(res.status).to.equal(400);
  //         expect(res.text).to.equal('BadRequestError');
  //         done();
  //       });
  //     });
  //   });
  //
  });

});
