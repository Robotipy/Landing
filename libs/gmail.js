import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const gmail = google.gmail('v1');

// Gmail API configuration
const GMAIL_CONFIG = {
  clientId: process.env.GMAIL_CLIENT_ID,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  redirectUrl: process.env.GMAIL_REDIRECT_URL || 'https://developers.google.com/oauthplayground',
  refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  userEmail: process.env.GMAIL_USER_EMAIL,
};

console.log("************ GMAIL_CONFIG ************");
console.log(GMAIL_CONFIG);

if (process.env.NODE_ENV === "development" && !process.env.GMAIL_CLIENT_ID) {
  console.group("⚠️ Gmail API credentials missing from .env");
  console.error("Gmail email sending is disabled.");
  console.error("Add GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, and GMAIL_USER_EMAIL to enable email features.");
  console.groupEnd();
}

// Create OAuth2 client
const createOAuth2Client = () => {
  const { clientId, clientSecret, redirectUrl, refreshToken } = GMAIL_CONFIG;
  
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Gmail API credentials are not properly configured');
  }

  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl);
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  
  return oauth2Client;
};

// Get access token
const getAccessToken = async () => {
  try {
    const oauth2Client = createOAuth2Client();
    const { token } = await oauth2Client.getAccessToken();
    return token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Create transporter for nodemailer
const createTransporter = async () => {
  try {
    const accessToken = await getAccessToken();
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: GMAIL_CONFIG.userEmail,
        clientId: GMAIL_CONFIG.clientId,
        clientSecret: GMAIL_CONFIG.clientSecret,
        refreshToken: GMAIL_CONFIG.refreshToken,
        accessToken: accessToken,
      },
    });

    return transporter;
  } catch (error) {
    console.error('Error creating Gmail transporter:', error);
    throw error;
  }
};

/**
 * Send email using Gmail API
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Plain text content (optional)
 * @param {string} options.html - HTML content (optional)
 * @param {string} options.replyTo - Reply-to address (optional)
 * @param {string} options.from - From address (optional, defaults to configured Gmail)
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendGmailEmail = async ({ to, subject, text, html, replyTo, from }) => {
  try {
    // Check if Gmail is configured
    if (!GMAIL_CONFIG.clientId || !GMAIL_CONFIG.clientSecret || !GMAIL_CONFIG.refreshToken || !GMAIL_CONFIG.userEmail) {
      console.warn('Gmail API not configured. Email sending skipped.');
      return { success: false, message: 'Gmail API not configured' };
    }

    const transporter = await createTransporter();
    
    const mailOptions = {
      from: from || GMAIL_CONFIG.userEmail,
      to: to,
      subject: subject,
      text: text,
      html: html,
      replyTo: replyTo,
    };

    const result = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
    
  } catch (error) {
    console.error('❌ Error sending Gmail email:', error);
    throw error;
  }
};

/**
 * Send email using raw Gmail API (alternative method)
 * @param {Object} options - Email options
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendGmailEmailRaw = async ({ to, subject, text, html, replyTo, from }) => {
  try {
    const oauth2Client = createOAuth2Client();
    google.options({ auth: oauth2Client });

    const fromEmail = from || GMAIL_CONFIG.userEmail;
    
    // Create email content
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
    const messageParts = [
      `From: ${fromEmail}`,
      `To: ${to}`,
      `Subject: ${utf8Subject}`,
      replyTo ? `Reply-To: ${replyTo}` : '',
      'MIME-Version: 1.0',
      'Content-Type: text/html; charset=utf-8',
      '',
      html || text || '',
    ];

    const message = messageParts.join('\n');
    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log('✅ Gmail API email sent successfully:', result.data.id);
    return { success: true, messageId: result.data.id };
    
  } catch (error) {
    console.error('❌ Error sending Gmail API email:', error);
    throw error;
  }
};

// Verify Gmail API connection
export const verifyGmailConnection = async () => {
  try {
    if (!GMAIL_CONFIG.clientId || !GMAIL_CONFIG.clientSecret || !GMAIL_CONFIG.refreshToken) {
      return { success: false, message: 'Gmail API credentials not configured' };
    }

    const oauth2Client = createOAuth2Client();
    google.options({ auth: oauth2Client });

    const result = await gmail.users.getProfile({ userId: 'me' });
    
    console.log('✅ Gmail API connection verified for:', result.data.emailAddress);
    return { success: true, email: result.data.emailAddress };
    
  } catch (error) {
    console.error('❌ Gmail API connection failed:', error);
    return { success: false, error: error.message };
  }
};

export default {
  sendGmailEmail,
  sendGmailEmailRaw,
  verifyGmailConnection,
}; 