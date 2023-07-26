import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  major: { type: String, required: true },
  expectedGraduationYear: { type: Number, required: true },
  points: { type: Number, required: true },
  eventsAttended: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
  profilePicture: { type: Buffer, required: true },
});

export default mongoose.model('User', userSchema);
