const mongoose = require('mongoose');

const db = mongoose.connect(
  'mongodb://localhost:27017/groupon-slide-show',
  { useNewUrlParser: true }
).then(
  () => console.log('mongoodb successfully connected'),
  (err) => console.log(err)
);

module.exports = db;
