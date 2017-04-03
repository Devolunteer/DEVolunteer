'use strict';

const server = require('../server.js');
const request = require('superagent');
const expect = require('chai').expect;
const Npo = require('../model/npo.js');
const User = require('../model/user.js');
// const createError = require('http-errors')

const PORT = process.env.PORT || 3000;
const url = 'http://localhost:3000';

const mockUser = {
  username: 'mockUser',
  email: 'mockEmail',
  password: 'mockPassword',
  isNPO: true,
};
const mockUser1 = {
  username: 'mockUser',
  email: 'mockEmail',
  password: 'mockPassword',
  // isDev: true,
};

const mockNPO = {
  username: 'NeedyPeeps',
  org: 'ChairDisability',
  city: 'NeedyCity',
  state: 'NeedyState',
  phone: '555-555-5555',
  email: 'needy@email.com',
  projects: [],
  reviews: [],
  developers: [],

};

const mockDev = {
  username: 'NeedyDev',
  name: 'Clarence',
  city: 'Seattle',
  state: 'WA',
  phone: '222-222-2222',
  picture:'*.png',
  website: ''
}

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
  describe('Testing unauthed GET for all NPOs', function(){
    let testUser;
    let testToken;
    let testNpo;
//depending on how you guys want this to work, we may not need to pass anything through basicAuth if anyone can search this without creating an account.
    beforeEach(done => {
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

    afterEach(done => {
      User.remove({}).exec()
      Npo.remove({}).exec()
      .then(() => done())
      .catch(done);
    })

    it('will return an array with nPOs', (done) => {
      request.get(`${url}/api/npoList`)
      .end((err, res) => {
        // console.log(res.body)
        expect(res.status).to.equal(200);
        // console.log(res.body.isNPO);
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.body[0].username).to.equal('NeedyPeeps');
        expect(res.body[0].org).to.equal('ChairDisability')
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
        // console.log('Error: ', res.status);
        done()
      })
    })
  });
  describe('#POST -- Testing NPO user', function() {
    let testUser;
    let testToken;

    beforeEach(done => {
      new User(mockUser).save()
      .then(user => {
        testUser = user;
        return testUser.generateToken();
      })
    .then(token => {
      testToken = token;
      // return new Npo(mockNPO).save();
    })
    .then(() => done())
    .catch(done);
    });
    afterEach(done => {
      User.remove({}).exec()
      Npo.remove({}).exec()
      .then(() => done())
      .catch(done);
    })

    it('will display correct properties of NPO', (done) => {
      request.post(`${url}/api/npo`)
      .set('Authorization', 'Bearer ' + testToken)
      .send(mockNPO)
      .end((err, res) => {
        // console.log(res.body);
        expect(res.status).to.equal(200);
        expect(res.body.username).to.equal('NeedyPeeps')
        expect(res.body.org).to.equal('ChairDisability')
        expect(res.body.phone).to.equal('555-555-5555')
        expect(res.body.email).to.equal('needy@email.com')
        expect(Array.isArray(res.body.projects)).to.equal(true);
        expect(Array.isArray(res.body.developers)).to.equal(true);
        expect(Array.isArray(res.body.reviews)).to.equal(true);
        done()
      })
    })
  })
  describe.only('#POST -- Testing NPO user', function() {
    let testUser;
    this.testToken;

    beforeEach(done => {
      new User(mockUser1).save()
      .then(user => {
        testUser = user;
        return testUser.generateToken();
      })
    .then(token => {
      this.testToken = token;
      // return new Npo(mockNPO).save();
    })
    .then(() => done())
    .catch(done);
    });
    after(done => {
      User.remove({}).exec()
      // Npo.remove({}).exec()
      .then(() => done())
      .catch(done);
    })

    it('will not allow a dev to POST to NPO', (done) => {
      request.post(`${url}/api/npo`)
      .set('Authorization', 'Bearer ' + this.testToken)
      .send(mockDev)
      .end((err, res) => {
        // console.log(res.body);
        expect(res.status).to.equal(401);
        // console.log(res);
        done()
      })
    })
  })

  describe.only('#PUT for user updating info', () => {
    let testNPO;
    let testToken;

    beforeEach(done => {
      const mockUser = {
        username: 'mockUser',
        email: 'mockEmail',
        password: 'mockPassword',
        isNPO: true,
      };
      const mockNPO = {
        username: 'NeedyPeeps',
        org: 'ChairDisability',
        city: 'NeedyCity',
        state: 'NeedyState',
        phone: '555-555-5555',
        email: 'needy@email.com',
        projects: [],
        reviews: [],
        developers: [],

      };
      new Npo(mockNPO).save()
      .then(npo => {
        console.log('THE USER-PUT beforeEach NPO ROUTER TEST', npo);

        testNPO = npo;
        // return testNPO.generateToken();
      })
    .then(token => {
      testToken = token;
      // return new Npo(mockNPO).save();
    })
    .then(() => done())
    .catch(done);
    });
    afterEach(done => {
      User.remove({}).exec()
      Npo.remove({}).exec()
      .then(() => done())
      .catch(done);
    });
    it('Should Update a NPO info', (done) => {
      console.log('The test token!', this.testToken)
      request.put(`${url}/api/npo/${testNPO._id}`)
      .set('Authorization', 'Bearer ' + this.testToken)
      .send({city: 'Sea', org: 'NewOrg'})
      .end((err, res) => {
        console.log('TEST-NPO IN PUT TEST AFTER RESPONSE', testNPO);
        expect(res.status).to.equal(200)
        // expect(res.body.username).to.equal('testName1')
        done()
      })

    })

  })


});
