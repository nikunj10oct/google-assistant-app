const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('YOUR_API_KEY');
const fs = require('fs');

async function fetchHeadlines() {
    const now = new Date();
    let topic;
    if (now.getHours() >= 6 && now.getHours() < 15) topic = 'cricket';
    else topic = 'science';
    const articles = await newsapi.v2.everything({ q: topic, language: 'en', sortBy: 'publishedAt' });
    // Save to word doc
    fs.writeFileSync('headlines.docx', JSON.stringify(articles.articles, null, 2));
    return articles.articles.map(a => a.title);
}
module.exports = { fetchHeadlines };