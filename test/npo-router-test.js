// 'use strict';
//
// const server = require('../backend/server.js');
// const request = require('superagent');
// const expect = require('chai').expect;
// const Npo = require('../backend/model/npo.js');
// const User = require('../backend/model/user.js');
//
//
// const PORT = process.env.PORT || 3000;
// const url = 'http://localhost:3000';
//
// const token = 'testyToken';
//
// const mockUser = {
//   username: 'mockUser',
//   email: 'mockEmail',
//   password: 'mockPassword',
//   isNPO: true,
// };
//
// const mockNPO = {
//   username: 'mockUser',
//   org: 'mockOrg',
//   state: 'mockState',
//   developers: [],
//   reviews: [],
// };
//
// describe('should start and stop the server before/after unit tests', function(){
//   before('start the server', function(done) {
//     if(server.isRunning === false){
//       server.listen(PORT, function(){
//         server.isRunning = true;
//         done();
//       });
//     } else {
//       done();
//     }
//   });
//   after('turn off server after unit test', function(done){
//     server.close((err) => {
//       server.isRunning = false;
//       if(err){
//         done(err);
//       } else {
//         done();
//       }
//     });
//   });
//   describe('setup test environment', function(){
//     let tokenData;
//     let testUser = new User(mockUser);
//     before(done => {
//       testUser.generateToken()
//       .then(() => testUser.save())
//       .then(token => {
//         tokenData = token;
//         done();
//       })
//       .catch(done);
//     });
//     after(done => {
//       User.remove({}).exec()
//       .then(() => done())
//       .catch(done);
//     });
//     it('will allow an NPO to post', function(done) {
//       request.post(`${url}/api/npo`)
//       .send(mockNPO)
//       .set({Authorization: `Bearer ${token}`})
//       .end((err, res) => {
//         expect(res.status).to.equal(200);
//         expect(res.text).to.equal(testUser);
//         done();
//       });
//     });
//   });
//
//   // router.post('/api/npo', bearerAuth, jsonParser, (req, res, next) => {
//   //   if(!req.user.isNPO) return next(createError(401, 'Please log in as a Non Profit Organization'))
//   //
//   //   //req.body will be values from the form they fill out on angular front-end
//   //   const npo = new Npo(req.body)
//   //   npo.save()
//   //   .then(npo => res.json(npo))
//   //   .catch(next)
//   // })
// });
