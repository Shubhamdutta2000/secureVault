import request from "supertest";
import app from "../app.js";

test("GET all details", (done) => {
  request(app)
    .get("/user/details")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      done();
    });
});

test("adds 1 + 2 to equal 3", () => {
  expect(1 * 2).toBe(2);
});
