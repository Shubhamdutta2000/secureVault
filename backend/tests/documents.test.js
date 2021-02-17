import app from "../app.js";
import request from "supertest";

// POST all documents
test("POST document", (done) => {
  return request(app)
    .post("/user/documents/post")
    .send({
      adhaar_card_no: 44434276,
      driver_license: "33sfdf4fdf",
      panCard: {
        pan_card: "helloFolks",
      },
      voter_auth: "helloMoto",
      passport: "yoyoHoney",
      password: "ThisIsSecrets2",
      layer: 6,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "adhaar_card_no",
          "driver_license",
          "panCard",
          "voter_auth",
          "passport",
          "layer",
          "password",
        ])
      );
      done();
    });
});

// GET 1 document
test("GET 1 document", (done) => {
  return request(app)
    .post("/user/documents")
    .send({ password: "ThisIsSecrets2" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "adhaar_card_no",
          "driver_license",
          "panCard",
          "voter_auth",
          "passport",
          "layer",
          "password",
        ])
      );
      done();
    });
});

// Cannot POST document
test("Cannot POST document more than 1", (done) => {
  return request(app)
    .post("/user/documents/post")
    .send({
      adhaar_card_no: 1234,
      driver_license: "142464556",
      panCard: {
        pan_card: "helloBro",
      },
      voter_auth: "lol",
      passport: "nanuSingh",
      password: "ThisIsSecrets2",
      layer: 10,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty(
        "message",
        "one document already be given"
      );
      done();
    });
});

// UPDATE Document
test("UPDATE document", (done) => {
  return request(app)
    .put("/user/documents")
    .send({ passport: "bolbo na", adhaar_card_no: 1234 })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "adhaar_card_no",
          "driver_license",
          "panCard",
          "voter_auth",
          "passport",
          "layer",
          "password",
        ])
      );
      expect(res.body.passport).toEqual("bolbo na");
      expect(res.body.adhaar_card_no).toEqual(1234);
      done();
    });
});

// DELETE all documents
test("DELETE all documents", (done) => {
  return request(app)
    .delete("/user/documents")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toEqual(1);
      done();
    });
});
