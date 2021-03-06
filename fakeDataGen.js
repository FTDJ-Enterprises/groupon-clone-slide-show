const mongoose = require('mongoose');
const fs = require('fs');

// Output array
const outputArray = [];

// Create 100 records
const numRecords = 100;
for (let i = 1; i <= numRecords; i++) {
  // Selection of ids from Picsum images for pictures that resemble products
  const picsumImageIds = [445, 3, 225, 21, 20, 201, 2, 180, 160, 119];

  const imagesArray = [];

  // For the very first record, have LOTS of images
  if (i === 1) {
    for (let j = 0; j < picsumImageIds.length * 2; j++) {
      const id = picsumImageIds[j % picsumImageIds.length];
      imagesArray.push(`http://picsum.photos/id/${id}/650/400#${j}`);
    }
  } else {
    const numOfImages = Math.floor(Math.random() * (picsumImageIds.length - 1)) + 1;
    for (let j = 1; j < numOfImages; j++) {
      imagesArray.push(`http://picsum.photos/id/${picsumImageIds[j]}/650/400`);
    }
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
