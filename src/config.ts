import mongoose from 'mongoose';
const dotenv = require('dotenv');

dotenv.config();

const DB_URI = process.env.MONGODB_URI || 'mongodb://admin:adminpassword@localhost:27017/';

const dbConnect = async (): Promise<void> => {
  try {
    const options: mongoose.ConnectOptions = {
    };

    await mongoose.connect(DB_URI, options);
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default dbConnect;
