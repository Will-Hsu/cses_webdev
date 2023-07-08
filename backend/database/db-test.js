import mongoose from 'mongoose';
import Event from '../models/event.js';

// Tests connection with MongoDB database 
const testDatabaseConnection = async () => {
  try {
    const events = await Event.find();

    // Logs all events found in database
    console.log(events);

    if (mongoose.connection.readyState === 1) {
      console.log('Connection is ready');
    } else {
      console.log('Connection is not ready');
    }
  } catch (error) {
    console.error('Error occurred while making database connection: ', error);
  }
};

export default testDatabaseConnection;
