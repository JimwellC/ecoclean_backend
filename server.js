const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const eventsRoutes = require('./routes/events');
const contactsRoutes = require('./routes/contacts');
const adminRoutes = require('./routes/admins');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventsRoutes);
app.use('/api/messages', contactsRoutes);
app.use('/api/admins', adminRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
  })
  .catch(err => console.error('❌ MongoDB Connection Error:', err));


module.exports = app; 