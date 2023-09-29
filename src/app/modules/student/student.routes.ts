import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validations';

const router = express.Router();
router.get('/', StudentController.getAllFromDB);
router.get('/:id', StudentController.getByIdFromDB);

router.post(
  '/',
  validateRequest(StudentValidation.create),
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.insertIntoDB
);
router.patch(
  '/:id',
  validateRequest(StudentValidation.update),
  StudentController.updateIntoDB
);
router.delete('/:id', StudentController.deleteFromDB);

export const studentRoutes = router;
