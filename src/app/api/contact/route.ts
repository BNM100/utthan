import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message, inquiryType } =
      await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVING_EMAIL || "utthanroboticslab01@gmail.com",
      subject: subject || `New ${inquiryType} inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Inquiry Type: ${inquiryType}
        Subject: ${subject || "No subject provided"}

        Message:
        ${message}
      `,
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; background-color: #f9fafb; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; }
        .footer { padding: 15px; text-align: center; font-size: 12px; color: #6b7280; background-color: #f3f4f6; border-radius: 0 0 8px 8px; }
        .details { background-color: white; padding: 15px; border-radius: 6px; margin: 15px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .message { background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin-top: 20px; }
        h1 { margin: 0; font-size: 20px; }
        h3 { color: #2563eb; margin-top: 0; }
        p { margin: 8px 0; }
        strong { color: #111827; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Contact Form Submission</h1>
      </div>
      <div class="content">
        <div class="details">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${
            phone
              ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>`
              : ""
          }
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Subject:</strong> ${subject || "No subject provided"}</p>
        </div>
        
        <h3>Message:</h3>
        <div class="message">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <div class="footer">
        <p>This message was sent from the Utthan Robotics Lab contact form</p>
        <p>© ${new Date().getFullYear()} Utthan Robotics Lab. All rights reserved.</p>
      </div>
    </body>
    </html>
  `,
    };

    await transporter.sendMail(mailOptions);

    const userMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Thank you for contacting us",
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; background-color: #f9fafb; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; }
        .footer { padding: 15px; text-align: center; font-size: 12px; color: #6b7280; background-color: #f3f4f6; border-radius: 0 0 8px 8px; }
        .message { background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin-top: 20px; }
        h1 { margin: 0; font-size: 20px; }
        p { margin: 8px 0; }
        .button { display: inline-block; padding: 10px 20px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 4px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Thank You for Contacting Utthan Robotics Lab</h1>
      </div>
      <div class="content">
        <p>Dear ${name},</p>
        <p>We've received your ${inquiryType} inquiry and appreciate you reaching out to us. Our team will review your message and respond as soon as possible.</p>
        
        <div class="message">
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        
        <p>For your records, here's a summary of your inquiry:</p>
        <ul>
          <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
          <li><strong>Inquiry Type:</strong> ${inquiryType}</li>
          ${subject ? `<li><strong>Subject:</strong> ${subject}</li>` : ""}
        </ul>
        
        <p>If you need immediate assistance, please don't hesitate to call us at <strong>+977 980-0961247</strong>.</p>
      </div>
      <div class="footer">
        <p>Utthan Robotics Lab<br>Dharan, Nepal</p>
        <p>© ${new Date().getFullYear()} Utthan Robotics Lab. All rights reserved.</p>
      </div>
    </body>
    </html>
  `,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}
