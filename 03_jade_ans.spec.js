/**
 * Created by gabrielkunkel on 11/2/16 in JavaScript.
 */


const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./03_jade_ans');
const should = chai.should();

chai.use(chaiHttp);

describe("jade", function () {

  it("should send us a static html page with the date", function(done) {
    chai.request(server)
      .get('/home')
      .end(function (err, res) {
        res.should.have.status(200);
        res.header['content-type'].should.eql('text/html; charset=utf-8');
        res.header['content-length'].should.eql('52');
        done();
      });
  }); // end it

}); // end describe