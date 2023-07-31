import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  major: { type: String, required: true },
  expectedGraduationYear: { type: Number, required: true },
  points: { type: Number, default: 0 },
  eventsAttended: {
    type: [{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    }],
    default: [],
  },
  profilePicture: { type: String },
});

export default mongoose.model('User', userSchema);
