import app from "../app.js";
import request from "supertest";
import { UserDetail } from "../models/Detail.js";
let token, name;

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
      name = response.body.name;
    });

  // delete detail
  await UserDetail.deleteMany({});
});

// POST all details
test("POST 1 detail of particular user", (done) => {
  return request(app)
    .post("/user/details/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      bio: "I am a CST student, Web developer specialist and coding enthusiast",
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
          "bio",
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

// Cannot POST detail of particular user
test("Cannot POST detail more than 1 of particular user", (done) => {
  return request(app)
    .post("/user/details/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      bio: "I am a CST student, Web developer specialist and coding enthusiast",
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
      expect(res.body).toHaveProperty(
        "message",
        `one detail already given of ${name}`
      );
      done();
    });
});

// GET 1 detail
test("GET 1 detail of particular user", (done) => {
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
          "bio",
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

// UPDATE Detail of particular user
test("UPDATE detail of particular user", (done) => {
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
          "bio",
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

// DELETE 1 detail of particular user
test("DELETE detail of particular user", (done) => {
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
