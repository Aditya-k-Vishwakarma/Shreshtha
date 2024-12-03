import dbConnect from '@/utils/db';
import Admin from '@/models/adminModel';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect();

  const { fullname, email, phoneNumber, password, passwordConfirm } = req.body;

  if (!fullname || !email || !phoneNumber || !password || !passwordConfirm) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== passwordConfirm) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    return res.status(400).json({ message: 'Admin already exists with this email' });
  }

  const newAdmin = await Admin.create({ fullname, email, phoneNumber, password, passwordConfirm });

  return res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
}
