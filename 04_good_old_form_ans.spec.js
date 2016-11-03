/**
 * Created by gabrielkunkel on 11/2/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./04_good_old_form_ans.js');
const should = chai.should();

chai.use(chaiHttp);

describe("good old form submission", function () {

  it("should respond with a 404 error if submission is to the wrong route", function(done) {
    chai.request(server)
      .post('/home')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ str: 'boogers'})
      .end(function (err, res) {
        res.should.have.status(404);
        done();
      });
  }); // end it

  it("should respond with a reversed string", function(done) {
    chai.request(server)
      .post('/form')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ str: 'abcdef'})
      .end(function (err, res) {
        res.should.have.status(200);
        res.text.should.eql('fedcba');
        done();
      });
  }); // end it


}); // end describe