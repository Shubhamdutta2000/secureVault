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
