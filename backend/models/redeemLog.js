import { Schema, model } from 'mongoose';

const redeemLogSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  redeemType: { type: String, required: true, enum: ['small', 'medium', 'large'] },
  timestamp: { type: Date, required: true },
  pointsBefore: Number,
  pointsAfter: Number,
});

export default model('RedeemLog', redeemLogSchema);
