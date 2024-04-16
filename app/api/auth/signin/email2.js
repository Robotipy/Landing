// pages/api/auth/signin/email.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the POST request
      // You can access the request body with req.body
      // And send a response with res.status(200).json({ key: 'value' })
    } else {
      // Handle any other HTTP method
      res.status(405).json({ message: 'Method not allowed' });
    }
  }