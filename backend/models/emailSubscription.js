import mongoose from 'mongoose';

const emailSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

export default mongoose.model('EmailSubscription', emailSchema);
