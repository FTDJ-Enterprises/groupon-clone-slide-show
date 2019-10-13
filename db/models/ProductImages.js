const mongoose = require('mongoose');
require('../index.js');

const ProductImagesSchema = new mongoose.Schema({
  productId: Number,
  imageUrls: [String]
}, {
  collection: 'productImages'
});

const ProductImages = mongoose.model(
  'ProductImages',
  ProductImagesSchema,
  'productImages'
);

module.exports = ProductImages;
