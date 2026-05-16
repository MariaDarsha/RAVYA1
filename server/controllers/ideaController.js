const Idea = require('../models/Idea');

exports.getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find().populate('author', 'name email');
    res.json(ideas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createIdea = async (req, res) => {
  try {
    const idea = await Idea.create({
      ...req.body,
      author: req.user.id
    });
    res.status(201).json(idea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) return res.status(404).json({ message: 'Idea not found' });

    idea.comments.push({
      user: req.user.id,
      text: req.body.text
    });

    await idea.save();
    res.json(idea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.addFeedback = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) return res.status(404).json({ message: 'Idea not found' });

    idea.feedback.push({
      mentor: req.user.id,
      text: req.body.text
    });

    await idea.save();
    res.json(idea);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
