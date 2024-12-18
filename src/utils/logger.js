const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
};

const getTimestamp = () => new Date().toISOString();

export const logger = {
  error: (message, ...args) => {
    console.error(`[${getTimestamp()}] ERROR:`, message, ...args);
  },
  warn: (message, ...args) => {
    console.warn(`[${getTimestamp()}] WARN:`, message, ...args);
  },
  info: (message, ...args) => {
    console.info(`[${getTimestamp()}] INFO:`, message, ...args);
  },
  debug: (message, ...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[${getTimestamp()}] DEBUG:`, message, ...args);
    }
  }
};