const express = require('express');
require('dotenv').config();
const db = require('./models/index');
const authRouter = require('./routers/auth');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.listen(8000, () => console.log('Server running'));

db.sequelize.sync().then(() => {
  console.log('up');
});
