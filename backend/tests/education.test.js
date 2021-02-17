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
