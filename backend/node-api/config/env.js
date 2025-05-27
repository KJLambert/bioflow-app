require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MARKLOGIC_BASE: process.env.MARKLOGIC_BASE || 'http://localhost:8000',
    ML_USER: process.env.ML_USER || '<ml_user>',
    ML_PASS: process.env.ML_PASS || '<ml_pass>'
  };