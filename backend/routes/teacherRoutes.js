import express from 'express';
import { createTeacher, getAllTeachers, updateTeacher, deleteTeacher } from '../controllers/teacherController.js';

const router = express.Router();

router.post('/teachers', createTeacher);
router.get('/teachers', getAllTeachers);
router.put('/teachers/:id', updateTeacher);
router.delete('/teachers/:id', deleteTeacher);

export default router;
