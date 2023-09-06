import express from 'express';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicDepartment.route';
import { AcademicSemesterRouter } from '../modules/acdemicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRouter,
  },
  {
    path: '/academic-department',
    route: AcademicFacultyRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
