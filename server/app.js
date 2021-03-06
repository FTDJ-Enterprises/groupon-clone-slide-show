const express = require('express');
const cors = require('cors');
const ProductImages = require('../db/models/ProductImages.js');

const app = express();

app.use(cors());
app.use('/', express.static('public'));

app.get('/api/images/:productId', (req, res, next) => {
  ProductImages.find({ productId: req.params.productId })
    .exec()
    .then((productImagesData) => res.json(productImagesData))
    .catch((err) => next(err));
});

module.exports = app;
