const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('hihihihihihii');
  res.status(200).json([{one: 'blahblha'}]);
})

module.exports = router;