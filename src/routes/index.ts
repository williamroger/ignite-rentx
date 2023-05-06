import { Router } from 'express';

import { categoriesRoutes } from '../routes/categories.routes';
import { specificationsRouter } from '../routes/specification.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRouter);

export { router };