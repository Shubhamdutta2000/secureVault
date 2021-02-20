import app from "../app.js";
import request from "supertest";
import { UserDetail } from "../models/Detail.js";
let token;

beforeAll(async () => {
  // user log in and get token
  await request(app)
    .post("/user/login")
    .send({
      email: "sd@gmail.com",
      password: "test1234",
    })
    .then((response) => {
      token = response.body.token; // save the token!
    });

  // delete detail
  await UserDetail.deleteMany({});
});

// POST all details
test("POST 1 detail", (done) => {
  return request(app)
    .post("/user/details/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      address: "chittaranjan",
      phn_no: 9002344,
      dob: "2000, 11, 15",
      password: "ThisIsSecrets",
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
          "password",
        ])
      );
      done();
    });
});

// Cannot POST detail
test("Cannot POST detail more than 1", (done) => {
  return request(app)
    .post("/user/details/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      address: "chittaranjan",
      phn_no: 9002344,
      dob: "2000, 11, 15",
      password: "ThisIsSecrets",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message", "one detail already be given");
      done();
    });
});

// GET 1 detail
test("GET 1 detail", (done) => {
  return request(app)
    .post("/user/details")
    .set("Authorization", `Bearer ${token}`)
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
          "password",
        ])
      );
      done();
    });
});

// UPDATE Detail by ID
test("UPDATE detail", (done) => {
  return request(app)
    .put("/user/details")
    .set("Authorization", `Bearer ${token}`)
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
          "password",
        ])
      );
      expect(res.body.name).toEqual("Iron Man");
      done();
    });
});

// DELETE all details
test("DELETE all details", (done) => {
  return request(app)
    .delete("/user/details")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
