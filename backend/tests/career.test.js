import app from "../app.js";
import request from "supertest";
import { UserCareer } from "../models/Career.js";

// add userCareer before all test cases
beforeAll(async () => {
  const userCareer = new UserCareer({
    _id: "602cab72ee2f463f6c289172",
    resume: "shubham.netlify.com",
    career_instances: {
      company_name: "tcw",
      company_post: "null",
      finance: {
        in_hand: "5000rs",
        ctc: "45",
        salary_slips: "3343",
      },
    },
    non_service_persuits: {
      freelancing: "TCW",
      bussiness: "group",
      non_profits: "profitable",
    },
    password: "secret",
    layer: 8,
  });
  await userCareer.save();
  console.log("before All test cases");
  const career = await UserCareer.findOne({ _id: "602cab72ee2f463f6c289172" });
  console.log(career);
});

// GET all career
test("GET all career", (done) => {
  return request(app)
    .get("/user/career")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
      done();
    });
});

// GET career by id
test("GET career by ID", (done) => {
  return request(app)
    .post("/user/career/602cab72ee2f463f6c289172")
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
          "layer",
        ])
      );
      done();
    });
});

// POST all career
test("POST all career", (done) => {
  return request(app)
    .post("/user/career")
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
      password: "secret2",
      layer: 10,
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
          "layer",
        ])
      );
      done();
    });
});

// UPDATE Detail by ID
test("UPDATE career by ID", (done) => {
  return request(app)
    .put("/user/career/602cab72ee2f463f6c289172")
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
          "layer",
          "password",
        ])
      );
      expect(res.body.resume).toEqual("wolverine.heroku.com");
      done();
    });
});

// DELETE career by ID
test("DELETE career by ID", (done) => {
  return request(app)
    .delete("/user/career/602cab72ee2f463f6c289172")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      done();
    });
});

// DELETE all career
test("DELETE all career", (done) => {
  return request(app)
    .delete("/user/career")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
