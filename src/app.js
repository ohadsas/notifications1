import express from 'express';
import { corsMiddleware } from './middleware/cors.js';
import { errorHandler } from './middleware/errorHandler.js';
import { requestLogger } from './middleware/requestLogger.js';
import { apiRoutes } from './routes/index.js';

const app = express();

// Middleware
app.use(requestLogger);
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Error handling
app.use(errorHandler);

export default app;