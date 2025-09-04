const express = require('express');
const router = express.Router();
const moment = require('moment');

// Dummy utility - Replace with your actual WhatsApp, weather, and location functions
async function sendWhatsAppMessage(contact, text) {
    // Implement WhatsApp API integration here
    return true;
}
async function getCurrentTemperature() {
    return 28; // Dummy value
}
async function getCurrentLocation() {
    return { lat: 23.0225, lng: 72.5714 }; // Dummy location (Ahmedabad)
}

router.post('/send', async (req, res) => {
    const now = moment();
    if (now.hour() < 10 || now.hour() >= 12) {
        return res.status(403).json({ message: "It's more than 12 PM or less than 10 AM, you cannot open a WhatsApp chat." });
    }
    const { contact } = req.body;
    const temp = await getCurrentTemperature();
    const loc = await getCurrentLocation();
    const text = `Temperature: ${temp}°C\nDate: ${now.format('YYYY-MM-DD')}\nTime: ${now.format('HH:mm:ss')}\nLocation: https://maps.google.com/?q=${loc.lat},${loc.lng}`;
    await sendWhatsAppMessage(contact, text);
    res.json({ success: true, message: 'Message sent!' });
});

module.exports = router;