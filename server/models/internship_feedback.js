const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  selectedCategory: { type: String, required: true },
  selectedCompany: { type: String, required: true },
  overallRating: { type: String, required: true },
  mentorshipRating: { type: Number, required: true },
  taskRating: { type: String, required: true },
  communicationRating: { type: String, required: true },
  learningRating: { type: Number, required: true },
  projectQualityRating: { type: Number, required: true },
  recommendationRating: { type: String, required: true },
  comments: { type: String, required: false },
  rating: { type: Number, required: true }
});

const internship_feedback = mongoose.model('internship_feedback', feedbackSchema);

module.exports = internship_feedback;
