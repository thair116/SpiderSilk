// TODO: uncomment these after figuring out how to have multiple test files not crash embark
// var assert = require('assert');
// var Embark = require('embark-framework');
// var EmbarkSpec = Embark.initTests();
// var web3 = EmbarkSpec.web3;

// describe("Magazine", function() {
//   // Deploy all contrats using the development config
//   before(function(done) {
//     EmbarkSpec.sim.createAccounts(10, function() {
//       EmbarkSpec.sim.setBalance(web3.eth.accounts[0], 1000000000000000000000, function() {
//         EmbarkSpec.deployAll(done);
//       });
//     });
//   });

//   it("should set owner", function(done) {
//     Queue.owner(function(err, result) {
//       assert.equal(result, web3.eth.accounts[0]);
//       done();
//     });
//   });
// })