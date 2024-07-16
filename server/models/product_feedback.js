const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  brandName: String,
  productCategory: String,
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

const product_feedback = mongoose.model('product_feedback', feedbackSchema);

module.exports = product_feedback;
