/**
 * Created by gabrielkunkel on 11/2/16 in JavaScript.
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./07_what_is_in_query_ans.js');
const should = chai.should();

chai.use(chaiHttp);

describe("server for 07_what_is_in_query", function () {

  it("should respond with the same info in json format", function(done) {
    chai.request(server)
      .get('/search?results=recent&include_tabs=true')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.results.should.eq("recent");
        res.body.include_tabs.should.eq('true');
        done();
      });
  }); // end it

}); // end describe