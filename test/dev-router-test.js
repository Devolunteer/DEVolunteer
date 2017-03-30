'use strict';

const server = require('../backend/server.js');
const request = require('superagent');
const expect = require('chai').expect;
const Dev = require('../backend/model/dev.js');
const User = require('../backend/model/user.js');

const PORT = process.env.PORT || 3000;
const url = 'http://localhost:3000';

const mockUser = {
  username: 'mockUser',
  email: 'mockEmail',
  password: 'mockPassword',
};

const mockDev = {
  username: 'mockUser',
  city: 'mockCity',
  state: 'mockState',
  languages: [],
  available: true,
};

//start test server

describe('should start and kill server before unit test', function(){
  before('start the server', function(done) {
    if(server.isRunning === false){
      server.listen(PORT, function(){
        server.isRunning = true;
        done();
      });
    } else {
      done();
    }
  });
  after('turn off server after unit test', function(done){
    server.close((err) => {
      server.isRunning = false;
      if(err){
        done(err);
      } else {
        done();
      }
    });
  });
  describe('testing unauthed GET for all devs', function(){
    let testUser;
    let testToken;
    let testDev;
//depending on how you guys want this to work, we may not need to pass anything through basicAuth if anyone can search this without creating an account.
    before(done => {
      User.remove().exec();
      Dev.remove().exec();
      new User(mockUser).save()
      .then(user => {
        testUser = user;
        return testUser.generateToken();
      })
    .then(token => {
      testToken = token;
      return new Dev(mockDev).save();
    })
    .then(dev => {
      testDev = dev;
    })
    .then(() => done())
    .catch(done);
    });
    it('will return an array with devs', (done) => {
      request.get(`${url}/api/devList`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].username).to.equal('mockUser');
        expect(res.body[0].city).to.equal('mockCity');
        expect(res.body[0].password).to.equal(undefined);
        done();
      });
    });
  });
});
