import request from "supertest";
import app from "../app.js";
import chai from "chai";

// GET all details
test("GET all details", async (done) => {
  await request(app)
    .get("/user/details")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
      done();
    });
}, 30000);

// GET details by id
test("GET details by ID", async (done) => {
  await request(app)
    .post("/user/details/602a84771e68ca3f300267ec")
    .send({ password: "ThisIsSecrets" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "name",
          "address",
          "phn_no",
          "email",
          "dob",
          "layer",
          "password",
        ])
      );
      return done();
    });
}, 30000);
