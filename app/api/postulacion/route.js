import { NextResponse } from "next/server";
import { sendResendEmail } from "@/libs/resend";
import { escapeHtml } from "@/libs/escapeHtml";

// Postulaciones del formulario /trabaja-con-nosotros.
// El asunto NO debe empezar con "Nuevo Lead": el importador de Gmail a Zoho
// sube como lead de venta todo correo con ese asunto.
const MAX_CV_BYTES = 4 * 1024 * 1024;

export async function POST(req) {
  try {
    const form = await req.formData();
    const get = (k) => (form.get(k) || "").toString().trim();

    // Campo trampa para bots: si viene lleno, se responde OK sin enviar nada.
    if (get("empresa_web")) return NextResponse.json({ message: "ok" });

    const data = {
      tipo: get("tipo") === "Práctica laboral" ? "Práctica laboral" : "Trabajo",
      institucion: get("institucion"),
      carrera: get("carrera"),
      inicio: get("inicio"),
      duracion: get("duracion"),
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      country: get("country"),
      area: get("area"),
      linkedin: get("linkedin"),
      message: get("message"),
      consent: get("consent"),
    };

    for (const field of ["name", "email", "country", "area"]) {
      if (!data[field]) return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: "email is invalid" }, { status: 400 });
    }
    if (data.tipo === "Práctica laboral") {
      for (const field of ["institucion", "carrera", "inicio", "duracion"]) {
        if (!data[field]) return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }
    if (data.consent !== "yes") return NextResponse.json({ error: "consent is required" }, { status: 400 });

    const cv = form.get("cv");
    const attachments = [];
    if (cv && typeof cv === "object" && cv.size > 0) {
      if (cv.size > MAX_CV_BYTES) return NextResponse.json({ error: "cv is too large" }, { status: 400 });
      if (cv.type !== "application/pdf") return NextResponse.json({ error: "cv must be a PDF" }, { status: 400 });
      attachments.push({ filename: cv.name || "cv.pdf", content: Buffer.from(await cv.arrayBuffer()) });
    }
    if (!attachments.length && !data.linkedin) {
      return NextResponse.json({ error: "cv or linkedin is required" }, { status: 400 });
    }

    const recipients = (process.env.JOBS_FORWARD || process.env.LEADS_FORWARD || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);
    if (!recipients.length) throw new Error("JOBS_FORWARD / LEADS_FORWARD no está definido");

    const row = (label, value) => `<p><strong>${label}:</strong> ${value ? escapeHtml(value) : "No proporcionado"}</p>`;
    await sendResendEmail({
      to: recipients,
      subject: `Nueva postulación${data.tipo === "Práctica laboral" ? " a práctica" : ""} - ${escapeHtml(data.name)} (${escapeHtml(data.area)})`,
      replyTo: data.email,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #039695;">Nueva postulación: ${escapeHtml(data.tipo)}</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            ${row("Tipo", data.tipo)}
            ${data.tipo === "Práctica laboral" ? row("Universidad o instituto", data.institucion) + row("Carrera", data.carrera) + row("Puede empezar", data.inicio) + row("Duración", data.duracion) : ""}
            ${row("Nombre", data.name)}
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
            ${row("Teléfono", data.phone)}
            ${row("País", data.country)}
            ${row("Área de interés", data.area)}
            ${row("LinkedIn", data.linkedin)}
            ${row("CV adjunto", attachments.length ? attachments[0].filename : "")}
            ${row("Mensaje", data.message)}
            <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.error("Error enviando postulación:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}
