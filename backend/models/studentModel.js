import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive', 'graduated'], required: true },
  address: { type: String, required: true },
});

export default mongoose.model('Student', studentSchema);
