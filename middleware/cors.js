import cors from 'cors';
import { config } from '../config/index.js';

export const corsMiddleware = cors({
  origin: config.cors.origins,
  methods: config.cors.methods,
  allowedHeaders: config.cors.allowedHeaders
});