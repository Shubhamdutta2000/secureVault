import app from "../app.js";
import request from "supertest";
import { UserMedical } from "../models/Medical.js";

// add userMedical before all test cases
beforeAll(async () => {
  const userMedical = new UserMedical({
    _id: "602cab72ee2f463f6c289172",
    vaccination_records: {
      records: {
        vaccine_name: "covid vaccine",
        vaccine_date: "2000, 9, 15",
        administered_by: "2000, 9, 15",
        administered_at: "2000, 9, 15",
      },
      medical_illness_long_term: "not issued",
    },
    password: "ISSECRET",
    layer: 10,
  });
  await userMedical.save();
  console.log("before All test cases");
  const details = await UserMedical.findOne({
    _id: "602cab72ee2f463f6c289172",
  });
  console.log(details);
});

// GET all medical details
test("GET all medical details", (done) => {
  return request(app)
    .get("/user/medical")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
      done();
    });
});

// GET medical details by ID
test("GET medical details by ID", (done) => {
  return request(app)
    .post("/user/medical/602cab72ee2f463f6c289172")
    .send({ password: "ISSECRET" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "vaccination_records",
          "medical_illness_long_term",
          "password",
          "layer",
        ])
      );
      done();
    });
});
