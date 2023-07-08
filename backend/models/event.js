import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  title: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: { type: String, required: true },
  description: String,
  calendar_link: { type: String, required: true },
  instagram_link: String,
});

// Export model
export default model('Event', eventSchema);
