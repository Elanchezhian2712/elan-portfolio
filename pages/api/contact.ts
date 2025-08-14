import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, company, subject, message } = req.body;

  if (!name || !email || !subject || !message ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: parseInt(process.env.SMTP_PORT || '587'), 
    secure: process.env.SMTP_SECURE === 'true', 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD, 
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM_EMAIL, 
    to: process.env.EMAIL_RECIPIENT,   
    subject: `From Elanchezhian M Portfolio: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || 'N/A'}
      Subject: ${subject}

      Message:
      ${message}
    `,
    html: `
      <h1>New Enquiry Elanchezhian M Portfolio</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h2>Message:</h2>
      <p>${message.replace(/\n/g, '<br>')}</p> 
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}