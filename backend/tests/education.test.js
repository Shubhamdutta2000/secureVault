import app from "../app.js";
import request from "supertest";
import { UserEducation } from "../models/Education.js";
let token;

// add userEducation before all test cases
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

  // delete document
  await UserEducation.deleteMany({});
});

// POST 1 education detail
test("POST 1 eduation detail", (done) => {
  return request(app)
    .post("/user/education/post")
    .set("Authorization", `Bearer ${token}`)
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
        final_year_projects: "covid-19 tracker-app",
        degree_certificates: "bca",
        other_certificate: {
          academy: "web app ml",
          sports: "football",
          events: "stand up comedy",
        },
      },
      password: "SECRETMESSAGE",
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
          "password",
        ])
      );
      done();
    });
});

// Cannot POST education
test("Cannot POST education more than 1", (done) => {
  return request(app)
    .post("/user/education/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      class_representative_boards: {
        marks: 400,
        grade: "A++",
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
        final_year_projects: "covid-19 tracker-app",
        degree_certificates: "btech",
        other_certificate: {
          academy: "machine learning",
          sports: "cricket",
          events: "stand up comedy",
        },
      },
      password: "SECRETMESSAGE2",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty(
        "message",
        "one education already be given"
      );
      done();
    });
});

// GET education detail
test("GET education detail", (done) => {
  return request(app)
    .post("/user/education")
    .set("Authorization", `Bearer ${token}`)
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
          "password",
        ])
      );
      done();
    });
});

// UPDATE ducation Detail by ID
test("UPDATE education detail", (done) => {
  return request(app)
    .put("/user/education")
    .set("Authorization", `Bearer ${token}`)
    .send({
      college: {
        course: "CSIT",
      },
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
          "password",
        ])
      );
      expect(res.body.college).toHaveProperty("course", "CSIT");
      done();
    });
});

// DELETE Education detail
test("DELETE Education detail", (done) => {
  return request(app)
    .delete("/user/education")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
