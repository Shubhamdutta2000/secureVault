import app from "../app.js";
import request from "supertest";
import { UserMedical } from "../models/Medical.js";
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

  // delete Medical details
  await UserMedical.deleteMany({});
});

// POST 1 medical detail
test("POST 1 medical detail", (done) => {
  return request(app)
    .post("/user/medical/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      vaccination_records: [
        {
          vaccine_name: "pox vaccine",
          vaccine_date: "2002, 14, 15",
          administered_by: "2002, 14, 15",
          administered_at: "2002, 14, 15",
        },
      ],
      medical_illness_long_term: "issued",
      password: "ISSECRET",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining(["vaccination_records", "password"])
      );
      done();
    });
});

// Cannot POST medical detail
test("Cannot POST medical detail more than 1", (done) => {
  return request(app)
    .post("/user/medical/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      vaccination_records: [
        {
          vaccine_name: "corona vaccine",
          vaccine_date: "2002, 14, 15",
          administered_by: "2002, 14, 15",
          administered_at: "2002, 14, 15",
        },
      ],
      medical_illness_long_term: "not-issued",
      password: "ISSECRET2",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty(
        "message",
        "one medical already be given"
      );
      done();
    });
});

// GET medical detail
test("GET medical detail", (done) => {
  return request(app)
    .post("/user/medical")
    .set("Authorization", `Bearer ${token}`)
    .send({ password: "ISSECRET" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining(["vaccination_records", "password"])
      );
      done();
    });
});

// UPDATE medical Detail
test("UPDATE medical detail", (done) => {
  return request(app)
    .put("/user/medical")
    .set("Authorization", `Bearer ${token}`)
    .send({
      vaccination_records: [
        {
          vaccine_name: "covid-19 virus recovery",
        },
      ],
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining(["vaccination_records", "password"])
      );
      expect(res.body.vaccination_records[0]).toHaveProperty(
        "vaccine_name",
        "covid-19 virus recovery"
      );
      done();
    });
});

// DELETE medical detail
test("DELETE medical detail", (done) => {
  return request(app)
    .delete("/user/medical")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
