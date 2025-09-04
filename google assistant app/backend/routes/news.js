const express = require('express');
const router = express.Router();

router.get('/headlines', (req, res) => {
    // Dummy implementation for news headlines
    const now = new Date();
    let category = (now.getHours() >= 6 && now.getHours() < 15) ? 'cricket' : 'science';
    // TODO: Fetch actual news using NewsAPI or similar
    const headlines = [
        `Sample ${category} headline 1`,
        `Sample ${category} headline 2`
    ];
    // TODO: Save to Word file
    res.json({ success: true, category, headlines });
});

module.exports = router;