import app from "../app.js";
import request from "supertest";
import { UserFinance } from "../models/Finance.js";
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

  // delete finance
  await UserFinance.deleteMany({});
});

// POST 1 finance details
test("POST finance details of particular user", (done) => {
  return request(app)
    .post("/user/finance/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      panCard: "12345567",
      itr_forms: "aye",
      bank_transaction: "200000",
      assets: {
        commodities: "yoHoney",
        cryptocurrencies: "wolf",
        stocks: "null",
        mutual_funds: "nill",
        ipos: "null",
      },
      password: "SECRET",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "panCard",
          "itr_forms",
          "bank_transaction",
          "assets",
          "password",
        ])
      );
      done();
    });
});

// Cannot POST finance detail
test("Cannot POST finance detail more than 1 of particular user", (done) => {
  return request(app)
    .post("/user/finance/post")
    .set("Authorization", `Bearer ${token}`)
    .send({
      panCard: "98765432",
      itr_forms: "aye",
      bank_transaction: "45500",
      assets: {
        commodities: "helloMoto",
        cryptocurrencies: "bitcoin",
        stocks: "200 dollar",
        mutual_funds: "100 dollar",
        ipos: "null",
      },
      password: "SECRET2",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(404)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(res.body).toHaveProperty(
        "message",
        `one finance already given of ${name}`
      );
      done();
    });
});

// GET finance detail
test("GET finance detail of particular user", (done) => {
  return request(app)
    .post("/user/finance")
    .set("Authorization", `Bearer ${token}`)
    .send({ password: "SECRET" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "panCard",
          "itr_forms",
          "bank_transaction",
          "assets",
          "password",
        ])
      );
      done();
    });
});

// UPDATE finance Detail
test("UPDATE finance detail of particular user", (done) => {
  return request(app)
    .put("/user/finance")
    .set("Authorization", `Bearer ${token}`)
    .send({ itr_forms: "noOneCares", bank_transaction: "400000" })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Object);
      expect(Object.keys(res.body)).toEqual(
        expect.arrayContaining([
          "panCard",
          "itr_forms",
          "bank_transaction",
          "assets",
          "password",
        ])
      );
      expect(res.body).toHaveProperty("itr_forms", "noOneCares");
      expect(res.body).toHaveProperty("bank_transaction", "400000");
      done();
    });
});

// DELETE all finance details
test("DELETE finance details of particular user", (done) => {
  return request(app)
    .delete("/user/finance")
    .set("Authorization", `Bearer ${token}`)
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body.deletedCount).toBeGreaterThanOrEqual(1);
      done();
    });
});
