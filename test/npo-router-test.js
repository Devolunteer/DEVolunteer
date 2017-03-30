'use strict';

const server = require('../backend/server.js');
const request = require('superagent');
const expect = require('chai').expect;
const Npo = require('../backend/model/npo.js');
const User = require('../backend/model/user.js');

const PORT = process.env.PORT || 3000;
const url = 'http://localhost:3000';

const mockUser = {
  username: 'mockUser',
  email: 'mockEmail',
  password: 'mockPassword',
};

const mockNPO = {
  username: 'mockUser',
  org: 'mockOrg',
  state: 'mockState',
  developers: [],
  reviews: [],
};

describe('should start and stop the server before/after unit tests', function(){
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
  
});
