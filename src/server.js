import app from './app.js';
import { config } from './config/index.js';
import { logger } from './utils/logger.js';

const startServer = () => {
  try {
    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();