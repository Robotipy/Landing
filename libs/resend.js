import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends an email using Resend
 * @param {Object} options - Email options
 * @param {string|string[]} options.to - Recipient email(s)
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} [options.from] - From email (defaults to env var)
 * @param {string} [options.replyTo] - Reply-to email
 * @returns {Promise<Object>} - Resend response
 */
export const sendResendEmail = async ({ to, subject, html, from, replyTo }) => {
  const fromEmail = from || process.env.RESEND_FROM_EMAIL || 'Robotipy <noreply@robotipy.com>';
  
  const response = await resend.emails.send({
    from: fromEmail,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    ...(replyTo && { replyTo }),
  });

  return response;
};

/**
 * Sends an email to multiple recipients from LEADS_FORWARD env variable
 * @param {Object} options - Email options
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} [options.replyTo] - Reply-to email
 * @returns {Promise<Object>} - Resend response
 */
export const sendLeadNotification = async ({ subject, html, replyTo }) => {
  const leadsForward = process.env.LEADS_FORWARD;
  
  if (!leadsForward) {
    throw new Error('LEADS_FORWARD environment variable is not set');
  }

  // Split comma-separated emails and trim whitespace
  const recipients = leadsForward.split(',').map(email => email.trim()).filter(Boolean);
  
  if (recipients.length === 0) {
    throw new Error('No valid email addresses found in LEADS_FORWARD');
  }

  return sendResendEmail({
    to: recipients,
    subject,
    html,
    replyTo,
  });
};

export default resend;
