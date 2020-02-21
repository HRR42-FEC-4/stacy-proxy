const express = require('express');
const cors = require('cors');
const proxy = require('http-proxy-middleware');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const staticDir = process.env.STATIC_DIR || (__dirname + '/../public');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(staticDir));


app.use(proxy('/product', {target: 'http://products:3001/' }));
app.use(proxy('/artists', {target: 'http://artists:3002/' }));
app.use(proxy('/reviews', {target: 'http://reviews:3003/' }));


app.listen(port, () => console.log(`Listening on port ${port}`))


module.exports = app;
