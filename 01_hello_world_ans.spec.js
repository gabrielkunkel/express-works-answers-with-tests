/**
 * Created by gabrielkunkel on 11/1/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./01_hello_world_ans');
const should = chai.should();

chai.use(chaiHttp);

describe("Hello World", function () {

  it("should send us Hello World!", function(done) {
    chai.request(server)
      .get('/home')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.a('object');
        res.text.should.eql('Hello World!');
        done();
      });
  }); // end it

}); // end describe