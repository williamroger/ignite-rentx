import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';
import { container } from 'tsyringe';

class ListSpecificationController {
  handle(request: Request, response: Response): Response {
    const listSpecificationUseCase = container.resolve(ListSpecificationUseCase);

    const specifications = listSpecificationUseCase.execute();

    return response.status(200).json(specifications);
  }
}

export {
  ListSpecificationController,
};