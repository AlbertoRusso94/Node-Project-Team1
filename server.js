const express = require('express');
require('dotenv').config();
const initCors = require('./middleware/cors');
const db = require('./models/index');
const authRouter = require('./routers/auth');

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:3000'
// }
app.use(initCors());
app.use(express.json());

app.use('/auth', authRouter);

app.listen(8000, () => console.log('Server running'));

db.sequelize.sync().then(() => {
  console.log('up');
});
