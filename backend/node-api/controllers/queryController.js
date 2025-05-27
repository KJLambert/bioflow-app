const marklogicService = require('../services/marklogicService');

exports.findFeatures = async (req, res) => {
  const { organism, start, end, type } = req.query;
  try {
    const results = await marklogicService.queryFeatures({ organism, start, end, type });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};