/**
 * Created by gabrielkunkel on 11/2/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./05_stylish_css_ans');
const should = chai.should();

chai.use(chaiHttp);

describe("stylish styles", function () {

  it("should retrieve css file", function(done) {
    chai.request(server)
      .get('/main.css')
      .end(function (err, res) {
        res.should.have.status(200);
        res.type.should.eql('text/css');
        res.text.should.eql('p {\n  color: #f00;\n}\n')
        done();
      });
  }); // end it

}); // end describe