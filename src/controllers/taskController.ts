import Task from '../models/Task';

export const createTask = async (req: any, res: any) => {
  try {
    const task = await Task.create({ ...req.body, userId: req.user.id });
    res.status(201).json(task);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllTasks = async (req: any, res: any) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

export const getTaskById = async (req: any, res: any) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.user.id });
  res.json(task);
};

export const updateTask = async (req: any, res: any) => {
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteTask = async (req: any, res: any) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ message: 'Task deleted' });
};

