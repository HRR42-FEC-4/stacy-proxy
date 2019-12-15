const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));


app.use(proxy('/product', {target: 'http://localhost:3001/' }));
app.use(proxy('/artists', {target: 'http://localhost:3002/' }));
app.use(proxy('/reviews', {target: 'http://localhost:3003/' }));


app.listen(port, () => console.log(`Listening on port ${port}`))


module.exports = app;