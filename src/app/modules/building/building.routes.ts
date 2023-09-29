import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidations } from './building.validations';
const router = express.Router();
router.get('/', BuildingController.getAllFromDB);
router.get('/:id', BuildingController.getByIdFromDB);
router.patch(
  '/:id',
  validateRequest(BuildingValidations.update),
  BuildingController.updateOneInDB
);

router.delete('/:id', BuildingController.deleteByIdFromDB);

router.post(
  '/',
  validateRequest(BuildingValidations.create),
  BuildingController.insertIntoDB
);

export const buildingRoutes = router;
