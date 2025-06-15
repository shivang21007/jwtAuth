import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../env/env';

export const getUser = async (req: any, res: any) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: 'User registered' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req: any, res: any) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate token based on user id and send it in response
    const token = jwt.sign({ id: user._id }, env.JWT_SECRET as string, { expiresIn: '15m' });
    
    res.json({ token});
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const logout = async (req: any, res: any) => {
  // Clear token from response
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
};

export const deleteUser = async (req: any, res: any) => {
  try {
    // Delete user by user id
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: 'User deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};


