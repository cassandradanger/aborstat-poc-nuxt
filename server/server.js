const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const info = require('./api/info.js')
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://main--bespoke-pixie-dd6ecd.netlify.app"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/info', info);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(9000, () => {
  console.log('Running on port 9000')
});