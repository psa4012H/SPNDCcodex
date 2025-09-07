const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./database');
const User = require('./routes/Backend/models/User');
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donor');
const Request = require('./routes/Backend/models/Request');
const requestRoutes = require('./routes/request');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/request', requestRoutes);


sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(console.error);

app.get('/', (req, res) => {
  res.send('Backend running');
});