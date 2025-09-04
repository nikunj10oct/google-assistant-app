const express = require('express');
const router = express.Router();

// Dummy implementation for alarm feature
router.post('/set', (req, res) => {
    const { time, sound, username } = req.body;
    // TODO: Schedule alarm, set sound, send WhatsApp notification
    res.json({ success: true, message: `Alarm set for ${time} with sound "${sound}" for user ${username}` });
});

module.exports = router;