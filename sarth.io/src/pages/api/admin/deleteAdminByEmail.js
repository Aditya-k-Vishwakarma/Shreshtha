import dbConnect from '@/utils/db';
import Admin from '@/models/adminModel';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await dbConnect();

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const admin = await Admin.findOneAndDelete({ email });
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  return res.status(200).json({ message: 'Admin deleted successfully' });
}
