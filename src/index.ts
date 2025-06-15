import express from 'express';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';
import { connectDB } from './db/mongodb';
import { env } from './env/env';

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('JWT CRUD API is running 🚀');
});

app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy 🚀' });
});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT} ... 🚀`);
});

