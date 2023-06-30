import mongoose from 'mongoose';
import 'dotenv/config';

// MongoDB server url
const uri = process.env.CONNECTION_URL;

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
