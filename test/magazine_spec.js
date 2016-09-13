var assert = require('assert');
var Embark = require('embark-framework');
var EmbarkSpec = Embark.initTests();
var web3 = EmbarkSpec.web3;

describe("Magazine", function() {
  before(function(done) {
    EmbarkSpec.sim.createAccounts(10, function() {
      EmbarkSpec.sim.setBalance(web3.eth.accounts[0], 1000000000000000000000, function() {
        EmbarkSpec.deployAll(done);
      });
    });
  });

  it("should set owner", function(done) {
    Magazine.owner(function(err, result) {
      assert.equal(result, web3.eth.accounts[0]);
      done();
    });
  });

  it("should only let owner modify editor");
  it("should only let owner modify publisher");
  it("should only let owner modify queue");
  it("should only let owner modify owner");

  it("should set initial value", function(done) {
    Magazine.storedData(function(err, result) {
      assert.equal(result.toNumber(), 100);
      done();
    });
  });

  it("should set editor", function(done) {
    Magazine.setEditor(web3.eth.accounts[1], function() {
      Magazine.editor(function(err, result) {
        assert.equal(result, web3.eth.accounts[1]);
        done();
      });
    });
  });

  it("should set publisher", function(done) {
    Magazine.setPublisher(web3.eth.accounts[2], function() {
      Magazine.publisher(function(err, result) {
        assert.equal(result, web3.eth.accounts[2]);
        done();
      });
    });
  });

  it("should add to Queue", function(done) {
    Magazine.addEntity(3, function() {
      Magazine.latestEntity(function(err, result) {
        assert.equal(result, 3);
        done();
      });
    });
  });

  it("should delete from queue", function(done) {
    Magazine.addEntity(1, function() {
      Magazine.addEntity(2, function() {
        Magazine.deleteLatestEntity(function () {
          Magazine.latestEntity(function(err, result) {
            assert.equal(result, 1);
            done();
          });
        });
      })
    });
  });
})

describe("Queue", function() {
  before(function(done) {
    EmbarkSpec.sim.createAccounts(10, function() {
      EmbarkSpec.sim.setBalance(web3.eth.accounts[0], 1000000000000000000000, function() {
        EmbarkSpec.deployAll(done);
      });
    });
  });

  it("should set owner", function(done) {
    Queue.owner(function(err, result) {
      assert.equal(result, web3.eth.accounts[0]);
      done();
    });
  });

  it("should add to queue", function(done) {
    Queue.addEntity(1, function() {
      Queue.addEntity(2, function() {
        Queue.latestEntity(function(err, result) {
          assert.equal(result, 2);
          done();
        });
      })
    });
  });

  it("should delete from queue", function(done) {
    Queue.addEntity(1, function() {
      Queue.addEntity(2, function() {
        Queue.deleteLatestEntity(function () {
          Queue.latestEntity(function(err, result) {
            assert.equal(result, 1);
            done();
          });
        });
      })
    });
  });
})

describe("Publisher", function() {
  before(function(done) {
    EmbarkSpec.sim.createAccounts(10, function() {
      EmbarkSpec.sim.setBalance(web3.eth.accounts[0], 1000000000000000000000, function() {
        EmbarkSpec.deployAll(done);
      });
    });
  });

  it("should add to publisher", function(done) {
    Publisher.publish(1, function() {
      Publisher.publish(2, function() {
        Publisher.getIndex(1, function(err, result) {
          assert.equal(result, 2);
          done();
        });
      })
    });
  });
})

