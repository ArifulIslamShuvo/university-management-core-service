import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validations';
const router = express.Router();

router.get('/', RoomController.getAllFromDB);
router.get('/:id', RoomController.getByIdFromDB);
router.post(
  '/',
  validateRequest(RoomValidation.create),
  RoomController.insertIntoDB
);

export const roomRoutes = router;
