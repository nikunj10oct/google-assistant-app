const schedule = require('node-schedule');
const { sendWhatsAppToAll } = require('./whatsapp');

function setAlarm(username, time, voiceMessage) {
    // Set alarm at requested time
    schedule.scheduleJob(time, () => {
        playVoiceAlarm(voiceMessage, time);
        sendWhatsAppToAll(`${username} wake up at ${time}`);
    });
    // If time is 6AM, set one at 7PM
    if (time === '06:00') {
        schedule.scheduleJob('19:00', () => {
            playVoiceAlarm(voiceMessage, '19:00');
            sendWhatsAppToAll(`${username} wake up at 19:00`);
        });
    }
}
module.exports = { setAlarm };