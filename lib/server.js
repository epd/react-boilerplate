const express = require('express');
const app = express();
const jsonMiddleware = require('body-parser').json;
const port = process.env.PORT || 3000;

app.use(jsonMiddleware());

app.use((req, res) => {
  console.log(req.body);
  res.json(200);
});

app.listen(port, () => console.log('Server listening on port %d', port));
