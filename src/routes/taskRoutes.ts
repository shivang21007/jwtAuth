import express from 'express';
import { auth } from '../middleware/authMiddleware';
import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getTaskById
} from '../controllers/taskController';

const router: express.Router = express.Router();

router.post('/', auth, createTask);
router.get('/', auth, getAllTasks);
router.get('/:id', auth, getTaskById);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

export default router;

