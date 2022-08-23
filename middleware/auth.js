const db = require('../models/index');
const User = db.user;

const checkUserData = async (req, res, next) => {
  const username = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (username) {
    res.status(400).send({
      message: 'Username already in use',
    });
    return;
  }

  const email = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (email) {
    res.status(400).send({
      message: 'Email already in use',
    });
    return;
  }

  next();
};

const verifyData = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (!user || user.dataValues.password !== req.body.password) {
    res.status(404).send({
      message: 'Invalid credentials',
    });
    return;
  }

  req.user = { id: user.dataValues.id };

  next();
};

module.exports = { checkUserData, verifyData };
