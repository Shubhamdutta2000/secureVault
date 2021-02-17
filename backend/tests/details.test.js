import app from "../app.js";
import request from "supertest";
import { UserDetail } from "../models/Detail.js";

// add userDetails before all test cases
beforeAll(async () => {
  const userDetails = new UserDetail({
    _id: "602cab72ee2f463f6c289172",
    name: "mita",
    address: "chittaranjan",
    phn_no: 9002344,
    email: "md@gm.com",
    key: "44",
    dob: "1990, 11, 15",
    password: "ThisIsSecrets",
    layer: 12,
  });
  await userDetails.save();
  console.log("before All test cases");
  const details = await UserDetail.findOne({ _id: "602cab72ee2f463f6c289172" });
  console.log(details);
});

// GET all details
test("GET all details", (done) => {
  return request(app)
    .get("/user/details")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
      done();
    });
});

// GET details by id
test("GET details by ID", (done) => {
  return request(app)
    .post("/user/details/602cab72ee2f463f6c289172")
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
      done();
    });
});

// POST all details
test("POST all details", (done) => {
  return request(app)
    .post("/user/details")
    .send({
      name: "shubham",
      address: "chittaranjan",
      phn_no: 9002344,
      email: "sd@gm.com",
      key: "32",
      dob: "2000, 11, 15",
      password: "ThisIsSecrets",
      layer: 10,
    })
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
      done();
    });
});

// UPDATE Detail by ID
test("UPDATE details by ID", (done) => {
  return request(app)
    .put("/user/details/602cab72ee2f463f6c289172")
    .send({ name: "Iron Man" })
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
      expect(res.body.name).toEqual("Iron Man");
      done();
    });
});

// DELETE details by ID
test("DELETE details by ID", (done) => {
  return request(app)
    .delete("/user/details/602cab72ee2f463f6c289172")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      done();
    });
});

// DELETE all details
test("DELETE all details", (done) => {
  return request(app)
    .delete("/user/details")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
