const mongoose = require('mongoose');

const dbName = process.env.NODE_ENV === 'test'
  ? 'groupon-slide-show-test'
  : 'groupon-slide-show';

const db = mongoose.connect(
  `mongodb://mongo/${dbName}`,
  { useNewUrlParser: true }
).then(
  () => console.log('mongoodb successfully connected'),
  (err) => console.log(err)
);

module.exports = db;
