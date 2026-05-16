const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['competition', 'funding', 'incubator', 'grant', 'mentorship'], required: true },
  organization: String,
  deadline: Date,
  link: String,
  requirements: [String],
  benefits: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Opportunity', opportunitySchema);
