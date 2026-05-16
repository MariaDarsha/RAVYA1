const express = require('express');
const router = express.Router();
const { getOpportunities, createOpportunity, deleteOpportunity } = require('../controllers/opportunityController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

router.get('/', getOpportunities);
router.post('/', authMiddleware, adminMiddleware, createOpportunity);
router.delete('/:id', authMiddleware, adminMiddleware, deleteOpportunity);

module.exports = router;
