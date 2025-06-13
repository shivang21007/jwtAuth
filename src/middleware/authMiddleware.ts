import jwt from 'jsonwebtoken';

export const auth = (req: any, res: any, next: any) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; // { id: userId }
    next();
  } catch (err: any) {
    res.status(400).json({ message: 'Invalid token', error: err.message });
  }
};

