/**
 * Created by gabrielkunkel on 11/2/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./06_param_pam_pam_ans.js');
const should = chai.should();

chai.use(chaiHttp);

describe("server for 06_param_pam_pam", function () {

  it("should respond with a hash", function(done) {
    chai.request(server)
      .put('/message/myidA1')
      .end(function (err, res) {
        res.should.have.status(200);
        res.header['content-length'].should.eql('40'); // sha-1 is 40 characters
        done();
      });
  }); // end it

}); // end describe
