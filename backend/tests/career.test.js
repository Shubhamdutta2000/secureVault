import app from "../app.js";
import request from "supertest";
import { UserCareer } from "../models/Career.js";
let token;

// add userCareer before all test cases
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

  // delete career
  await UserCareer.deleteMany({});
});

// POST 1 career
test("POST 1 career", (done) => {
  return request(app)
    .post("/user/career/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      resume: "mainak.netlify.com",
      career_instances: {
        company_name: "qa",
        company_post: "developer",
        finance: {
          in_hand: "9000rs",
          ctc: "1000",
          salary_slips: "222222",
        },
      },
      non_service_persuits: {
        freelancing: "TCW",
        bussiness: "group",
        non_profits: "profitable",
      },
      password: "secret",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "resume",
          "career_instances",
          "non_service_persuits",
          "password",
        ])
      );
      done();
    });
});

// Cannot POST career (give error)
test("Cannot POST career more than 1", (done) => {
  return request(app)
    .post("/user/career/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      resume: "shubham.heroku.com",
      career_instances: {
        company_name: "println",
        company_post: "social media handler",
        finance: {
          in_hand: "100000rs",
          ctc: "10000",
          salary_slips: "4444444",
        },
      },
      non_service_persuits: {
        freelancing: "TCW",
        bussiness: "group",
        non_profits: "profitable",
      },
      password: "secret2",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty("message", "one career already be given");
      done();
    });
});

// GET career
test("GET career", (done) => {
  return request(app)
    .post("/user/career")
    .set("Authorization", `Bearer ${token}`)
    .send({ password: "secret" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "resume",
          "career_instances",
          "non_service_persuits",
          "password",
        ])
      );
      done();
    });
});

// UPDATE career
test("UPDATE career ", (done) => {
  return request(app)
    .put("/user/career")
    .set("Authorization", `Bearer ${token}`)
    .send({ resume: "wolverine.heroku.com" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "resume",
          "career_instances",
          "non_service_persuits",
          "password",
        ])
      );
      expect(res.body.resume).toEqual("wolverine.heroku.com");
      done();
    });
});

// DELETE all career
test("DELETE all career", (done) => {
  return request(app)
    .delete("/user/career")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
