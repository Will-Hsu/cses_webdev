import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: true, enum: ['upcoming', 'past'], default: 'upcoming' },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: String,
  description: String,
  calendar_link: String,
  instagram_link: String,
});

// Export model
export default model('Event', eventSchema);
