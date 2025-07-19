import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Client from "@/models/Client";
import { sendGmailEmail } from "@/libs/gmail";
import config from "@/config";

// This route is used to store client information from the client information form
// The API call is initiated by the ClientForm component
export async function POST(req) {
  const connection = await connectMongo();
  
  if (!connection) {
    return NextResponse.json({ 
      error: "Database connection not available. Some features might be limited." 
    }, { status: 503 });
  }

  try {
    const body = await req.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'companyName', 'role', 'companySize'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    // Check if client already exists
    const existingClient = await Client.findOne({ email: body.email });
    if (existingClient) {
      return NextResponse.json({ error: "A client with this email already exists" }, { status: 409 });
    }

    // Create new client
    const client = await Client.create(body);

    // Send notification email to admin
    try {
      await sendGmailEmail({
        to: process.env.GMAIL_USER_EMAIL || 'admin@robotipy.com',
        subject: `New Client Information Submitted - ${client.companyName}`,
        html: `
           <h2>New Contact Information Submitted</h2>
           <p><strong>Name:</strong> ${client.name}</p>
           <p><strong>Email:</strong> ${client.email}</p>
           <p><strong>Phone:</strong> ${client.phone || 'Not provided'}</p>
           <p><strong>Company:</strong> ${client.companyName}</p>
           <p><strong>Role:</strong> ${client.role || 'Not provided'}</p>
           <p><strong>Company Size:</strong> ${client.companySize || 'Not provided'}</p>
           <p><strong>Website:</strong> ${client.website || 'Not provided'}</p>
           <p><strong>Additional Info:</strong> ${client.additionalInfo || 'Not provided'}</p>
           <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
         `,
        replyTo: client.email,
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the request if email fails
    }

    // Send confirmation email to client
    try {
      await sendGmailEmail({
        to: client.email,
        subject: `Thank you for your interest in ${config.appName}`,
        html: `
           <h2>Thank you for reaching out!</h2>
           <p>Dear ${client.name},</p>
           <p>Thank you for submitting your contact information. We've received your request and will review it shortly.</p>
           <p>Our team will contact you within 24 hours to discuss how we can help automate your business processes.</p>
           <p>In the meantime, feel free to explore our website or contact us directly if you have any urgent questions.</p>
           <p>Best regards,<br>The ${config.appName} Team</p>
         `,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      message: "Client information submitted successfully",
      clientId: client._id,
    });

  } catch (error) {
    console.error('Error creating client:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json({ error: "A client with this email already exists" }, { status: 409 });
    }
    
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET route to fetch all clients (for admin dashboard)
export async function GET(req) {
  const connection = await connectMongo();
  
  if (!connection) {
    return NextResponse.json({ 
      error: "Database connection not available. Some features might be limited." 
    }, { status: 503 });
  }

  try {
    const clients = await Client.find({})
      .sort({ createdAt: -1 })
      .limit(50); // Limit to 50 most recent clients

    return NextResponse.json({ clients });
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 