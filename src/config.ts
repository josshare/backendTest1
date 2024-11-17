import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/user_management';

const dbConnect = async (): Promise<void> => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(DB_URI, options);
    console.log('Database connection established successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default dbConnect;
