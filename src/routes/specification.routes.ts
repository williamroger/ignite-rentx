import { Router } from 'express';
import { createSpecializationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/listSpecification';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) => {
  return createSpecializationController.handle(request, response);
});

specificationsRouter.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRouter };