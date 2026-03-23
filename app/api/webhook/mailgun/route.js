import { NextResponse } from "next/server";
import { sendEmail } from "@/libs/mailgun";
import config from "@/config";
import crypto from "crypto";
import { escapeHtml } from "@/libs/escapeHtml";

// Verify Mailgun webhook signature
function verifyMailgunSignature(timestamp, token, signature) {
  const signingKey = process.env.MAILGUN_WEBHOOK_SIGNING_KEY;
  if (!signingKey) return false;

  const encodedToken = crypto
    .createHmac("sha256", signingKey)
    .update(timestamp.concat(token))
    .digest("hex");

  return encodedToken === signature;
}

// This route is used to receive emails from Mailgun and forward them to our customer support email.
// See more: https://shipfa.st/docs/features/emails
export async function POST(req) {
  try {
    const formData = await req.formData();

    // Validate Mailgun signature if signing key is configured
    const timestamp = formData.get("timestamp");
    const token = formData.get("token");
    const signature = formData.get("signature");

    if (process.env.MAILGUN_WEBHOOK_SIGNING_KEY) {
      if (!timestamp || !token || !signature || !verifyMailgunSignature(timestamp, token, signature)) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
      }
    }

    const sender = formData.get("From");
    const subject = formData.get("Subject");
    const html = formData.get("body-html");

    // send email to the admin if forwardRepliesTo is set & emailData exists
    if (config.mailgun.forwardRepliesTo && html && subject && sender) {
      await sendEmail({
        to: config.mailgun.forwardRepliesTo,
        subject: `${config?.appName} | ${escapeHtml(subject)}`,
        html: `<div><p><b>- Subject:</b> ${escapeHtml(subject)}</p><p><b>- From:</b> ${escapeHtml(sender)}</p><p><b>- Content:</b></p><div>${html}</div></div>`,
        replyTo: sender,
      });
    }

    return NextResponse.json({});
  } catch (e) {
    console.error(e?.message);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
