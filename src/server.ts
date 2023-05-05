import express from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

// import routes here
import swaggerFile from './swagger.json';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRouter } from './routes/specification.routes';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRouter );

app.listen(3333, () => console.log('Server is running...'));