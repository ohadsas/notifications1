import { vapidConfig } from './vapid.js';

export const config = {
  port: process.env.PORT || 5000,
  cors: {
    origins: [
      'https://luminous-lollipop-4e7df9.netlify.app',
      'http://localhost:5173'
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  },
  vapid: vapidConfig
};