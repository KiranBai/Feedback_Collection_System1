const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  brandName: String,
  serviceCategory: String,
  satisfaction: String,
  easeOfUse: String,
  features: String,
  improvements: String,
  performance: String,
  quality: String,
  recommendationRating: String,
  rating: Number,
  comments: String,
});

const service_feedback = mongoose.model('service_feedback', feedbackSchema);

module.exports = service_feedback;
