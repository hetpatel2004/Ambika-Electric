import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import estimatorRoutes from './routes/estimatorRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Ambika Electric API',
    business: 'Ambika Electric - Industrial Electrical Engineering',
    location: 'Kadadra, Gujarat, India',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/estimator', estimatorRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Ambika Electric MERN Backend API is running.');
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API Route Not Found' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Ambika Electric Server running on http://localhost:${PORT}`);
});
