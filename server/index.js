const express = require('express');

const app = express();

app.use('/', express.static('public'));

const port = process.env.PORT || 3002;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server running on port ${port}`);
});
