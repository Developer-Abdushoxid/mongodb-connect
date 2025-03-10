import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database bilan ulanish
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlayapti`);
});
