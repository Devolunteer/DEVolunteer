'use strict';

const server = require('../backend/server');
const expect = require('chai').expect;
const request = require('superagent');
const User = require('../backend/model/user');
const serverToggle = require('./lib/server-toggle')

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

  afterEach(done => {
    User.remove({})
    .then( () => done())
    .catch(done);
  });


  describe('#POST route /api/signup', function() {
    describe('Signing up a New Dev User', function(){
      it('should return a token', (done) => {
        request.post(`${url}/api/signup`)
        .send(testUserDev)
        .end((err, res) => {
          console.error(err);
          if(err) return done(err);
          console.log('TOKEN', res.text);
          expect(res.status).to.equal(200);
          expect(!!res.text).to.equal(true);
          done();
        });
      });
    });

  });

  after(done => serverToggle.serverDown(server, done));
});
