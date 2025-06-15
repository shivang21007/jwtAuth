import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long.'],
    trim: true
  }
});

export default mongoose.model('User', userSchema);

