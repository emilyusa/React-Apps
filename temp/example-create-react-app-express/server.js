const express = require('express');

const app = express();
const port =  30010;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));
