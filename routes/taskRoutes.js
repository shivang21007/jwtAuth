const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getTaskById
} = require('../controllers/taskController');

router.post('/', auth, createTask);
router.get('/', auth, getAllTasks);
router.get('/:id', auth, getTaskById);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;

