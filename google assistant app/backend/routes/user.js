const express = require('express');
const router = express.Router();

router.post('/biometric', (req, res) => {
    const { action, otp } = req.body;
    // TODO: Implement biometric enable/disable and OTP verification
    res.json({ success: true, message: `Biometric ${action} processed.` });
});

module.exports = router;