const express = require('express');
const static = require('serve-static');
const app = express();
const jsonMiddleware = require('body-parser').json;
const port = process.env.PORT || 3000;

app.use(jsonMiddleware());
app.use(static('public'));
app.use(static('.build'));

app.listen(port, () => console.log('Server listening on port %d', port));
