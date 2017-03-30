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
    beforeEach(done => {
      Promise.all([
        User.remove({}),
        Dev.remove({}),
      ])
      .then(() => {
        return new User(mockUser).save();
      })
      .then(user => {
        testUser = user;
        return testUser.generateToken();
      })
    .then(token => {
      console.log(token);
      testToken = token;
      console.log(testToken);
      return new Dev(mockDev).save();
    })
    .then(dev => {
      testDev = dev;
    })
    .then(() => done())
    .catch(done);
    });

    //req.user should be a individual user which the bearer auth will identify
    // router.post('/api/dev', bearerAuth, jsonParser, (req, res, next) => {
    //   if(!req.user.isDev) return next(createError(401, 'Please log in as a Developer'))
    //
    //   //req.body will be values from the form they fill out on angular front-end
    //   const dev = new Dev(req.body)
    //   dev.save()
    //   .then(dev => res.json(dev))
    //   .catch(next)
    // })

    it('will return an array with devs', (done) => {
      request.get(`${url}/api/devList`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].username).to.equal('mockUser');
        expect(res.body[0].city).to.equal('mockCity');
        done();
      });
    });
    it('will post a new dev', (done) => {
      request.post(`${url}/api/dev`)
      .set({'Authorization' : `Bearer ${testToken}`})
      .end((err, res) => {
        console.log(testToken);
        expect(true).to.equal(true);
        done();
      });
    });
  });
});
