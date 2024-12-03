export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    res.setHeader('Set-Cookie', 'token=; Max-Age=0; HttpOnly; Path=/');
    return res.status(200).json({ message: 'Logged out successfully' });
  }
  