const fs = require('fs');
function playMusic(language, songQuery) {
    // Use Spotify/YouTube API to search and play
    // ...fetch song
    const metadata = { artist, duration, movie, language };
    fs.appendFileSync('music_metadata.docx', JSON.stringify(metadata) + "\n");
    if (language.toLowerCase() === 'tamil') {
        // shareOnWhatsAppGroups(songLink);
    }
}
module.exports = { playMusic };