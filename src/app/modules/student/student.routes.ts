import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validations';

const router = express.Router();
router.get('/', StudentController.getAllFromDB);

router.post(
  '/',
  validateRequest(StudentValidation.create),
  StudentController.insertIntoDB
);

export const studentRoutes = router;
