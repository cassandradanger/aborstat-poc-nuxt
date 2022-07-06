if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
var rp = require('request-promise');
let apiKey = process.env.API_KEY;
const states = require('../modules/states-list.js')

router.get('/gestational_limits/:state', (req, res) => {
  rp({
    uri: `https://api.abortionpolicyapi.com/v1/gestational_limits/states/${req.params.state}`,
    method: 'GET',
    headers: { 'token': apiKey },
    json: true
  }).then(function success(response) {
      if (response) {
        var states = Object.keys(response);
        res.status(200).json([response]);
      }
  }).catch(function error(response) {
      res.sendStatus(500);
  });
});

router.get('/states-list', (req, res) => {
  console.log('hello');
  res.status(200).json((states));
})

module.exports = router;