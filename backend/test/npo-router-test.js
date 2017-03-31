'use strict';

const server = require('../server.js');
const request = require('superagent');
const expect = require('chai').expect;
const Npo = require('../model/npo.js');
const User = require('../model/user.js');
const createError = require('http-errors')

const PORT = process.env.PORT || 3000;
const url = 'http://localhost:3000';

const mockUser = {
  username: 'mockUser',
  email: 'mockEmail',
  password: 'mockPassword',
  isNPO: true,
};

const mockNPO = {
  username: 'NeedyPeeps',
  org: 'Chair Disability',
  city: 'NeedyCity',
  state: 'NeedyState',
  projects: [],
  reviews: [],
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
  describe('testing unauthed GET for all NPOs', function(){
    let testUser;
    let testToken;
    let testNpo;
//depending on how you guys want this to work, we may not need to pass anything through basicAuth if anyone can search this without creating an account.
    before(done => {
      new User(mockUser).save()
      .then(user => {
        testUser = user;
        return testUser.generateToken();
      })
    .then(token => {
      testToken = token;
      return new Npo(mockNPO).save();
    })
    .then(npo => {
      testNpo = npo;
    })
    .then(() => done())
    .catch(done);
    });

    after(done => {
      User.remove().exec()
      Npo.remove().exec()
      .then(() => done())
      .catch(done);
    })
    it('will return an array with nPOs', (done) => {
      request.get(`${url}/api/npoList`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        // console.log(res.body);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].username).to.equal('NeedyPeeps');
        expect(res.body[0].org).to.equal('Chair Disability')
        expect(res.body[0].city).to.equal('NeedyCity');
        expect(res.body[0].password).to.equal(undefined);
        done();
      });
    });
    it('will error if wrong path hit', (done) => {
      request.get(`${url}/npoList`)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        // expect(res.error).to.equal('[Error: cannot GET /npoList (404)]')
        console.log('Error: ', res.status);
        done()
      })
    })
  });
});
