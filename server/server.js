const app = require('./app.js');

const port = process.env.PORT || 3002;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server running on port ${port}`);
});
