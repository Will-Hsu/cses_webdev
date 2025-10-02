import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  title: { type: String, required: true },
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  location: { type: String, required: true },
  major_event: { type: Boolean, required: true },
  description: String,
  calendar_link: { type: String, required: true },
  instagram_link: String,
  code: { type: String },
  qrCode: { type: String },
  event_type: {
    type: String,
    enum: ["General", "Dev", "Open Source", "Innovate"],
    required: false,
    default: "General",
  },
});

// Export model
export default model('Event', eventSchema);
