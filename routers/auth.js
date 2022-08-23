const express = require('express');

const router = express.Router();

router.post('/signup', (req, res, next) => {
  res.json({ ...req.body });
});

router.post('/signin', (req, res, next) => {
  res.json({ ...req.body });
});

module.exports = router;
