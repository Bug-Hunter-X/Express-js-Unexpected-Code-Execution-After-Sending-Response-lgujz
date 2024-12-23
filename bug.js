const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is where the bug is introduced
  res.send('Hello World!');
  // The response is sent here, but the code continues execution
  console.log('Request handled');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});