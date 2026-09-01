import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { dbGet } from '../config/database.js';

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await dbGet('SELECT * FROM admin_users WHERE email = ?', [email]);
    
    if (admin && (await bcrypt.compare(password, admin.password_hash))) {
      const token = jwt.sign(
        { id: admin.id, email: admin.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: '30d' }
      );
      
      res.json({
        id: admin.id,
        email: admin.email,
        token
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during login' });
  }
};

export const getMe = async (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  });
};
