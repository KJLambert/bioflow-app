const axios = require('axios');
const fs = require('fs');
const path = require('path');

const BASE = 'http://localhost:8002';
const AUTH = {
  auth: {
    username: '<ml_user>',
    password: '<ml_pass>'
  }
};

const uploadConfig = async (endpoint, xmlPath) => {
  const xml = fs.readFileSync(xmlPath, 'utf-8');
  await axios.post(`${BASE}${endpoint}`, xml, {
    ...AUTH,
    headers: { 'Content-Type': 'application/xml' }
  });
  console.log(`Uploaded config to ${endpoint}`);
};

(async () => {
  await uploadConfig('/manage/v2/databases/Documents/properties', path.join(__dirname, '../marklogic-schemas/indexes/range-indexes.xml'));
})();