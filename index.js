import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();

// Configure CORS with specific origin
app.use(cors({
  origin: [
    'https://luminous-lollipop-4e7df9.netlify.app',
    'http://localhost:5173', // Development URL
  ],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});