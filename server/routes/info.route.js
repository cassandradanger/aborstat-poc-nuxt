const express = require('express');
const { reset } = require('nodemon');
const router = express.Router();
var rp = require('request-promise');
let apiKey = '6AR22zx9SkdQ07L0';

router.get('/', (req, res) => {
  rp({
    uri: 'https://api.abortionpolicyapi.com/v1/gestational_limits/states/',
    method: 'GET',
    headers: { 'token': apiKey },
    json: true
  }).then(function success(response) {
      if (response) {
        var states = Object.keys(response);
        console.log(states);
        res.status(200).json([response]);
      }
  }).catch(function error(response) {
      console.log(response.error);
      res.sendStatus(500);
  });
})

module.exports = router;