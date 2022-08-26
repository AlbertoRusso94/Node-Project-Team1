const cors = require('cors');

const initCors = () => {
  const corsOption = {
    origin: 'http://localhost:3000',
  };

  return cors(corsOption);
};

module.exports = initCors;

