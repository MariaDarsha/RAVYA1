const express = require('express');
const router = express.Router();
const { getIdeas, createIdea, addComment, addFeedback } = require('../controllers/ideaController');
const { authMiddleware, mentorMiddleware } = require('../middleware/auth');

router.get('/', getIdeas);
router.post('/', authMiddleware, createIdea);
router.post('/:id/comment', authMiddleware, addComment);
router.post('/:id/feedback', authMiddleware, mentorMiddleware, addFeedback);

module.exports = router;
