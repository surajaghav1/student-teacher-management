import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';

const app = express();
const port = 8000;
const mongoURI = 'mongodb://localhost:27017/student_teacher_management';

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.log('❌ MongoDB connection error:', err));

app.use('/api', studentRoutes);
app.use('/api', teacherRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
