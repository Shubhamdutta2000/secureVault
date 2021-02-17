import app from "../app.js";
import request from "supertest";
import { UserFinance } from "../models/Finance.js";

// add userDetails before all test cases
beforeAll(async () => {
  const userDetails = new UserFinance({
    _id: "602cab72ee2f463f6c289172",
    panCard: {
      panCard: "23325457",
    },
    itr_forms: "lol",
    bank_transaction: "null",
    assets: {
      commodities: "abcdef",
      cryptocurrencies: "pqrs",
      stocks: "hello",
      mutual_funds: "null",
      ipos: "null",
    },
    password: "SECRET",
    layer: 6,
  });
  await userDetails.save();
  console.log("before All test cases");
  const details = await UserFinance.findOne({
    _id: "602cab72ee2f463f6c289172",
  });
  console.log(details);
});

// GET all Finance details
test("GET all Finance details", (done) => {
  return request(app)
    .get("/user/finance")
    .expect("Content-Type", /json/)
    .expect(200)
    .then((res) => {
      expect(res.body).toBeInstanceOf(Array);
      done();
    });
});

// GET finance details by ID
test("GET finance details by ID", (done) => {
  return request(app)
    .post("/user/finance/602cab72ee2f463f6c289172")
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
          "layer",
        ])
      );
      done();
    });
});

// POST all finance details
test("POST all finance details", (done) => {
  return request(app)
    .post("/user/finance")
    .send({
      panCard: {
        panCard: "12345678",
      },
      itr_forms: "aye",
      bank_transaction: "200000",
      assets: {
        commodities: "yoHoney",
        cryptocurrencies: "wolf",
        stocks: "null",
        mutual_funds: "nill",
        ipos: "null",
      },
      password: "SECRET2",
      layer: 9,
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
          "layer",
        ])
      );
      done();
    });
});
