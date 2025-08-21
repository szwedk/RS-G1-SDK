import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { product, message, hasPurchased, isInterested, orderNumber, email, phone } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Robostore G1 Inquiry" <${process.env.EMAIL_FROM}>`,
      to: process.env.INQUIRY_TO_EMAIL!,
      subject: `New G1 Inquiry - ${product}`,
      html: `
        <h3>New Inquiry Submitted</h3>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Interested in purchasing:</strong> ${isInterested ? 'Yes' : 'No'}</p>
        <p><strong>Has purchased before:</strong> ${hasPurchased ? 'Yes' : 'No'}</p>
        <p><strong>Order Number:</strong> ${orderNumber || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send inquiry' });
  }
}