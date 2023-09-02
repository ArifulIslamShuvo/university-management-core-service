import express from 'express';
import { AcademicSemesterRouter } from '../middlewares/modules/acdemicSemester/academicSemester.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
