import app from "../app.js";
import request from "supertest";
import { UserDocument } from "../models/Document.js";
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

  // delete document
  await UserDocument.deleteMany({});
});

// POST all documents
test("POST document of particular user", (done) => {
  return request(app)
    .post("/user/documents/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      adhaar_card: "44434276",
      driver_license: "33sfdf4fdf",
      panCard: "helloFolks",
      voter_card: "helloMoto",
      passport: "yoyoHoney",
      password: "ThisIsSecrets2",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "adhaar_card",
          "driver_license",
          "panCard",
          "voter_card",
          "passport",
          "password",
        ])
      );
      done();
    });
});

// GET 1 document
test("GET document of particular user", (done) => {
  return request(app)
    .post("/user/documents")
    .set("Authorization", `Bearer ${token}`)
    .send({ password: "ThisIsSecrets2" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "adhaar_card",
          "driver_license",
          "panCard",
          "voter_card",
          "passport",
          "password",
        ])
      );
      done();
    });
});

// Cannot POST document of particular user
test("Cannot POST document more than 1 of particular user", (done) => {
  return request(app)
    .post("/user/documents/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      adhaar_card: "1234",
      driver_license: "142464556",
      panCard: "1224353",
      voter_card: "lol",
      passport: "987654",
      password: "ThisIsSecrets2",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty(
        "message",
        `one document already given of ${name}`
      );
      done();
    });
});

// UPDATE Document
test("UPDATE document of particular user", (done) => {
  return request(app)
    .put("/user/documents")
    .set("Authorization", `Bearer ${token}`)
    .send({ passport: "bolbo na", adhaar_card: "1234" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "adhaar_card",
          "driver_license",
          "panCard",
          "voter_card",
          "passport",
          "password",
        ])
      );
      expect(res.body.passport).toEqual("bolbo na");
      expect(res.body.adhaar_card).toEqual("1234");
      done();
    });
});

// DELETE 1 document  of particular user
test("DELETE document of particular user", (done) => {
  return request(app)
    .delete("/user/documents")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toEqual(1);
      done();
    });
});
