const express = require('express');
const app = express();
const whatsappRoutes = require('./routes/whatsapp');
const alarmRoutes = require('./routes/alarm');
const newsRoutes = require('./routes/news');
const musicRoutes = require('./routes/music');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/api/whatsapp', whatsappRoutes);
app.use('/api/alarm', alarmRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Google Assistant Backend is Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
