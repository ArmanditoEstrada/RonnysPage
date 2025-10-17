"use server"

import { Resend } from "resend"

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data
    if (!data.name || !data.message) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      }
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Ronny's Food Truck <onboarding@resend.dev>", // Replace with your verified domain
      to: ["tu-email@ejemplo.com"], // Replace with your actual email
      replyTo: data.email || undefined,
      subject: `Nuevo mensaje de ${data.name} - Ronny's Food Truck`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Nuevo mensaje desde el sitio web</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email || "No proporcionado"}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de Ronny's Food Truck
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.",
      }
    }

    return {
      success: true,
      message: "¡Mensaje enviado con éxito! Te responderemos pronto.",
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      message: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.",
    }
  }
}
