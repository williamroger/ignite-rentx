
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecializationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);
const createSpecializationController = new CreateSpecificationController(createSpecificationUseCase);

export {
  createSpecializationController,
};