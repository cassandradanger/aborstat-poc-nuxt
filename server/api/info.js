if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const router = express.Router();
var rp = require('request-promise');
let apiKey = process.env.API_KEY;

router.get('/gestational_limits/:state', (req, res) => {
  rp({
    uri: `https://api.abortionpolicyapi.com/v1/gestational_limits/states/${req.params.state}/`,
    method: 'GET',
    headers: { 'token': apiKey },
    json: true
  }).then(function success(response) {
      if (response) {
        res.status(200).json([response]);
      }
  }).catch(function error(response) {
      res.sendStatus(500);
  });
});

module.exports = router;