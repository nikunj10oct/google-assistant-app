const express = require('express');
const router = express.Router();

router.post('/play', (req, res) => {
    const { language, song } = req.body;
    // TODO: Play song and log metadata
    res.json({ success: true, message: `Playing ${language} song: ${song}` });
});

module.exports = router;