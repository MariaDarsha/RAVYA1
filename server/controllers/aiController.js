const axios = require('axios');

exports.getAiMentorship = async (req, res) => {
  try {
    const { message, context } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ message: 'Gemini API key not configured' });
    }

    const prompt = `You are an AI Mentor for youth and women entrepreneurs on the RAVYA platform. 
    User context: ${JSON.stringify(context)}
    User question: ${message}
    Provide actionable, encouraging, and professional entrepreneurship advice.`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );

    const aiResponse = response.data.candidates[0].content.parts[0].text;
    res.json({ response: aiResponse });
  } catch (err) {
    console.error('AI Mentor Error:', err.response ? err.response.data : err.message);
    res.status(500).json({ message: 'Error communicating with AI Mentor' });
  }
};
