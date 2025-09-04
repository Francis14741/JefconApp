require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URL;

async function testConnection() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connection successful!');
    await mongoose.connection.close();
    console.log('🔌 Connection closed.');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
  }
}

testConnection();