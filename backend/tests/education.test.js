import app from "../app.js";
import request from "supertest";
import { UserEducation } from "../models/Education.js";

// add userEducation before all test cases
beforeAll(async () => {
  const userEducation = new UserEducation({
    _id: "602cab72ee2f463f6c289172",
    class_representative_boards: {
      marks: 200,
      grade: "A",
      admit_card: "abc.com",
      registration_card: "xyz.com",
      pass_certificate: "pqr.com",
      grade_certificate: "hello.com",
    },
    college: {
      degree: "BTECH",
      course: "CST",
      discipline: "null",
      semester_sheets: "null",
      final_year_projects: ["memory-app", "eCommerce"],
      degree_certificates: ["btech", "mca", "mtech"],
      other_certificate: [
        {
          academy: "web app ml",
          sports: "cricket",
          events: "quiz",
        },
      ],
    },
    password: "SECRETMESSAGE",
    layer: 4,
  });
  await userEducation.save();
  console.log("before All test cases");
  const education = await UserEducation.findOne({
    _id: "602cab72ee2f463f6c289172",
  });
  console.log(education);
});

// GET all education
test("GET all education details", (done) => {
  return request(app)
    .get("/user/education")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
      done();
    });
});

// GET education details by id
test("GET education details by ID", (done) => {
  return request(app)
    .post("/user/education/602cab72ee2f463f6c289172")
    .send({ password: "SECRETMESSAGE" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "class_representative_boards",
          "college",
          "layer",
          "password",
        ])
      );
      done();
    });
});

// POST all education details
test("POST all eduation details", (done) => {
  return request(app)
    .post("/user/education")
    .send({
      class_representative_boards: {
        marks: 300,
        grade: "B",
        admit_card: "cde.com",
        registration_card: "abc.com",
        pass_certificate: "lmn.com",
        grade_certificate: "yoyo.com",
      },
      college: {
        degree: "BCA",
        course: "Computer Application",
        discipline: "medium",
        semester_sheets: "bolbona",
        final_year_projects: [
          "covid-19 tracker-app",
          "social-media management tool",
        ],
        degree_certificates: ["bca", "mca"],
        other_certificate: [
          {
            academy: "web app ml",
            sports: "football",
            events: "stand up comedy",
          },
        ],
      },
      password: "SECRETMESSAGE2",
      layer: 8,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "class_representative_boards",
          "college",
          "layer",
          "password",
        ])
      );
      done();
    });
});
