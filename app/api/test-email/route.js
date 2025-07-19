import { sendGmailEmail, verifyGmailConnection } from "@/libs/gmail";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Test connection first
    console.log('🔍 Testing Gmail API connection...');
    const connectionTest = await verifyGmailConnection();
    
    if (!connectionTest.success) {
      console.error('❌ Gmail API connection failed:', connectionTest.message);
      return NextResponse.json({ 
        error: "Gmail API connection failed", 
        details: connectionTest.message || connectionTest.error,
        troubleshooting: "Check your .env.local file and ensure all Gmail API credentials are correctly set"
      }, { status: 500 });
    }

    console.log('✅ Gmail API connection verified for:', connectionTest.email);

    // Send test email
    console.log('📧 Sending test email...');
    const result = await sendGmailEmail({
      to: process.env.GMAIL_USER_EMAIL,
      subject: "🎉 Gmail API Test - ROI Calculator Setup Complete",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0891b2, #06b6d4); color: white; padding: 30px; text-align: center; border-radius: 10px; margin-bottom: 30px;">
            <h1 style="margin: 0; font-size: 28px;">🚀 Gmail API is Working!</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Your ROI Calculator email system is ready</p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #0891b2;">
            <h2 style="color: #0891b2; margin-top: 0;">✅ Test Results</h2>
            <ul style="color: #475569; line-height: 1.6;">
              <li><strong>Gmail API Connection:</strong> ✅ Successful</li>
              <li><strong>OAuth2 Authentication:</strong> ✅ Working</li>
              <li><strong>Email Sending:</strong> ✅ Functional</li>
              <li><strong>ROI Calculator:</strong> ✅ Ready to send reports</li>
            </ul>
          </div>
          
          <div style="margin: 30px 0; padding: 20px; background: #dcfdf7; border-radius: 8px; border: 2px solid #10b981;">
            <h3 style="color: #10b981; margin-top: 0;">🎯 What's Next?</h3>
            <p style="color: #065f46; margin-bottom: 15px;">Your ROI Calculator can now:</p>
            <ul style="color: #065f46; line-height: 1.6;">
              <li>Send detailed ROI reports to prospects</li>
              <li>Notify your team about new leads</li>
              <li>Send confirmation emails</li>
            </ul>
          </div>
          
          <div style="text-align: center; padding: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Test completed successfully at ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `
    });

    console.log('✅ Test email sent successfully with ID:', result.messageId);

    return NextResponse.json({ 
      success: true, 
      message: "Gmail API test completed successfully!",
      details: {
        connectionVerified: true,
        emailSent: true,
        messageId: result.messageId,
        verifiedEmail: connectionTest.email,
        timestamp: new Date().toISOString()
      },
      nextSteps: [
        "Check your email inbox for the test message",
        "Your ROI Calculator is ready to send emails",
        "You can now delete this test route if desired"
      ]
    });
    
  } catch (error) {
    console.error('❌ Gmail API test failed:', error);
    
    return NextResponse.json({ 
      error: "Gmail API test failed", 
      details: error.message,
      troubleshooting: {
        commonIssues: [
          "Check if all environment variables are set in .env.local",
          "Verify Gmail API is enabled in Google Cloud Console",
          "Ensure refresh token is valid and not expired",
          "Check if OAuth consent screen is properly configured"
        ],
        checkList: [
          "GMAIL_CLIENT_ID is set",
          "GMAIL_CLIENT_SECRET is set", 
          "GMAIL_REFRESH_TOKEN is set",
          "GMAIL_USER_EMAIL is set"
        ]
      }
    }, { status: 500 });
  }
} 