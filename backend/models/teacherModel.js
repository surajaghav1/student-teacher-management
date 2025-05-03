import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  address: { type: String, required: true },
  school: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], required: true },
});

export default mongoose.model('Teacher', teacherSchema);
