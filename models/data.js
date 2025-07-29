const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  start_year: Number,
  end_year: Number,
  sector: String,
  topic: String,
  region: String,
  country: String,
  city: String,
  pestle: String,
  source: String,
  swot: String
});

// Explicitly define the collection name as 'visualdata'
module.exports = mongoose.model('Data', DataSchema, 'visualdata');
