const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  instructor: String,
  duration: String,
  lessons: Number,
  rating: { type: Number, default: 0 },
  category: String,
  image: String,
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  videoUrl: String,
  readingMaterials: [String],
  quizzes: [{
    question: String,
    options: [String],
    correctAnswer: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
