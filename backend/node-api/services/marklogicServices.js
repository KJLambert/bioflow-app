const axios = require('axios');
const queryBuilder = require('../utils/queryBuilder');
const { MARKLOGIC_BASE, ML_USER, ML_PASS } = require('../config/env');

exports.queryFeatures = async ({ organism, start, end, type }) => {
  const query = queryBuilder.buildFeatureQuery({ organism, start, end, type });
  const response = await axios.post(
    `${MARKLOGIC_BASE}/v1/search`,
    query,
    {
      auth: { username: ML_USER, password: ML_PASS },
      headers: { 'Content-Type': 'application/json' },
    }
  );
  return response.data;
};