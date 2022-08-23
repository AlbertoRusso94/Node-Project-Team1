const express = require('express');
const { signupController, signInController } = require('../controller/auth');
const { checkUserData, verifyData } = require('../middleware/auth');

const router = express.Router();

router.post('/signup', checkUserData, signupController);

router.post('/signin', verifyData, signInController);

module.exports = router;
