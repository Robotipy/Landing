import { NextResponse } from "next/server";
import { sendLeadNotification } from "@/libs/resend";

// This route is used to send client information via email
// The API call is initiated by the ClientForm component
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'companyName', 'role', 'companySize'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    // Format investment capability if provided
    const canInvestText = body.canInvest 
      ? (body.canInvest === 'yes' ? '✅ Sí, puede invertir' : '❌ No puede invertir')
      : null;

    // Send notification email to all recipients in LEADS_FORWARD
    await sendLeadNotification({
      subject: `Nuevo Lead - ${body.companyName}${body.canInvest === 'no' ? ' ⚠️ Sin presupuesto' : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #039695;">Nuevo Lead Recibido</h2>
          ${body.canInvest === 'no' ? '<p style="background-color: #fef3c7; color: #92400e; padding: 10px; border-radius: 4px;"><strong>⚠️ Este lead indicó que NO puede invertir en el rango de $5,500 - $11,000 USD</strong></p>' : ''}
          ${body.canInvest === 'yes' ? '<p style="background-color: #d1fae5; color: #065f46; padding: 10px; border-radius: 4px;"><strong>✅ Este lead indicó que SÍ puede invertir en el rango de $5,500 - $11,000 USD</strong></p>' : ''}
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Nombre:</strong> ${body.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Teléfono:</strong> ${body.phone || 'No proporcionado'}</p>
            <p><strong>Empresa:</strong> ${body.companyName}</p>
            <p><strong>Cargo:</strong> ${body.role || 'No proporcionado'}</p>
            <p><strong>Tamaño de Empresa:</strong> ${body.companySize || 'No proporcionado'}</p>
            <p><strong>Sitio Web:</strong> ${body.website || 'No proporcionado'}</p>
            <p><strong>Información Adicional:</strong> ${body.additionalInfo || 'No proporcionado'}</p>
            ${canInvestText ? `<p><strong>Capacidad de Inversión ($5,500 - $11,000 USD):</strong> ${canInvestText}</p>` : ''}
            <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' })}</p>
          </div>
        </div>
      `,
      replyTo: body.email,
    });

    return NextResponse.json({
      message: "Information sent successfully",
    });

  } catch (error) {
    console.error('Error sending lead notification:', error);
    return NextResponse.json({ error: "Failed to send information" }, { status: 500 });
  }
}
