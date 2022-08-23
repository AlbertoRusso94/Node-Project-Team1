const jwt = require('jsonwebtoken');
const db = require('../models/index');
const User = db.user;

const signupController = (req, res, next) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  res.send({ message: 'User registered successfully!' });
};

const signInController = (req, res, next) => {
  const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
  res.json({ ...req.body, token });
};

module.exports = { signupController, signInController };
