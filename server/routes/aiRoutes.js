const express = require('express');
const router = express.Router();
const { getAiMentorship } = require('../controllers/aiController');
const { authMiddleware } = require('../middleware/auth');

router.post('/mentor', authMiddleware, getAiMentorship);

module.exports = router;
