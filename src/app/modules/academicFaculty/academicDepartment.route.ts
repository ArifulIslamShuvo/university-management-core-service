import express from 'express';
import { AcademicFacultyControllet } from './academicDepartment.controller';
const router = express.Router();

router.post('/', AcademicFacultyControllet.insertIntoDB);

export const AcademicFacultyRouter = router;
