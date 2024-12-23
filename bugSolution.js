const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  // The code below this line will not execute after res.send()
  // console.log('Request handled');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});