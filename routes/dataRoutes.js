const express = require('express');
const router = express.Router();
const Data = require('../models/data');

router.get('/all', async (req, res) => {
  try {
    const data = await Data.find({});
    console.log('🔍 Total documents found:', data.length); // <-- ADD THIS
    res.json(data);
  } catch (err) {
    console.error('❌ Error in /api/all:', err); // <-- ADD THIS
    res.status(500).json({ error: 'Error fetching all data' });
  }
});

router.get('/filters', async (req, res) => {
  try {
    const filters = {};
    for (let key in req.query) {
      if (req.query[key]) filters[key] = req.query[key];
    }

    console.log('🔍 Filters applied:', filters); // <-- Add this
    const filteredData = await Data.find(filters);
    console.log('🔍 Filtered result count:', filteredData.length); // <-- Add this

    res.json(filteredData);
  } catch (err) {
    console.error('❌ Error in /api/filters:', err.message);
    res.status(500).json({ error: 'Error filtering data' });
  }
});


module.exports = router;
