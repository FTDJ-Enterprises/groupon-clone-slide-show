process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/app.js');
const ProductImages = require('../db/models/ProductImages.js');

const record1 = new ProductImages({
  productId: 1,
  imageUrls: ['http://lorempixel.com/400/200/sports/', 'http://lorempixel.com/400/200/cats/']
});

beforeAll((done) => record1.save().then(() => done()));

afterAll((done) => {
  mongoose.connection.dropDatabase()
    .then(() => mongoose.connection.close(() => done()))
    .catch(err => console.log(err))
    .then(() => done());
});

describe("GET /api/images/:productId ", () => {
  test("It should respond with the correct record", (done) => {
    request(app).get('/api/images/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        const resData = res.body[0];
        const expectedData = record1.toObject() ;
        expect(resData.productId).toEqual(expectedData.productId);
        expect(resData.imageUrls).toEqual(expectedData.imageUrls);
      })
      .then(() => done());
  });

  test("It should respond with an empty array for requests with non-existant ids", (done) => {
    request(app).get('/api/images/3')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => expect(res.body).toEqual([]))
      .then(() => done());
  });
});