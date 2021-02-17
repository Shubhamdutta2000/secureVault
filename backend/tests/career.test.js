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
