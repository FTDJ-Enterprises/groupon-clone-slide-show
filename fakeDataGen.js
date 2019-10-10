const faker = require('faker');
const mongoose = require('mongoose');
const fs = require('fs');

// Output array
const outputArray = [];

// Seed so we can reuse this file and get the same results
faker.seed(100);

// Create 100 records
const numRecords = 100;
for (let i = 1; i <= numRecords; i++) {
  const numOfImages = faker.random.number({ min: 1, max: 10 });
  const imagesArray = [];
  for (let j = 0; j < numOfImages; j++) {
    imagesArray.push(faker.image.image());
  }

  const record = {
    _id: mongoose.Types.ObjectId(),
    productId: i,
    imageUrls: imagesArray
  };

  outputArray.push(record);
}

// Turn the data into a JSON string
const json = JSON.stringify(outputArray, null, 2);

// Write the data to a JSON file
fs.writeFile('fakeData.json', json, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('fakeData.json successfuly created');
});
