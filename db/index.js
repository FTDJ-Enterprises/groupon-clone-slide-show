const mongoose = 'mongoose';

const db = mongoose.connect(
  'mongodb://localhost:27017/groupon-slide-show', 
  {useNewUrlParser: true}
);

db.once('open', () => console.log('Mongo db successfully connected'));

module.exports = db;