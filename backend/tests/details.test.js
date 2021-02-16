import request from "supertest";
import app from "../app.js";
import chai from "chai";
var assert = chai.assert;

test("GET all details", async (done) => {
  await request(app)
    .get("/user/details")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      assert.typeOf(res.body, "Array");

      done();
    });
}, 30000);
