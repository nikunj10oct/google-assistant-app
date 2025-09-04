const express = require('express');
const router = express.Router();
const moment = require('moment');
const { sendWhatsAppMessage } = require('../utils/whatsapp');
const weather = require('../utils/weather');
const location = require('../utils/location');

router.post('/send', async (req, res) => {
    const now = moment();
    if (now.hour() < 10 || now.hour() >= 12) {
        return res.status(403).json({ message: "It's more than 12 PM or less than 10 AM, you cannot open a WhatsApp chat." });
    }
    const { contact } = req.body;
    const temp = await weather.getCurrentTemperature();
    const loc = await location.getCurrent();
    const text = `Temperature: ${temp}°C\nDate: ${now.format('YYYY-MM-DD')}\nTime: ${now.format('HH:mm:ss')}\nLocation: https://maps.google.com/?q=${loc.lat},${loc.lng}`;
    await sendWhatsAppMessage(contact, text);
    res.json({ success: true });
});
module.exports = router;