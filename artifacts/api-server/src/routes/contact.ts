import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router: IRouter = Router();

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(2000),
});

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input", details: parsed.error.issues });
    return;
  }

  const { name, email, message } = parsed.data;

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    req.log.error("GMAIL_USER or GMAIL_APP_PASSWORD not configured");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: `"Diksha Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #060816; color: #F5F7FF; padding: 32px; border-radius: 12px; border: 1px solid #7C3AED33;">
          <h2 style="color: #7C3AED; margin-top: 0;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #00E5FF; font-weight: bold; width: 80px;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #00E5FF; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00FFA3;">${email}</a></td>
            </tr>
          </table>
          <hr style="border-color: #7C3AED33; margin: 16px 0;" />
          <h3 style="color: #00E5FF; margin-bottom: 8px;">Message</h3>
          <p style="line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <p style="font-size: 12px; color: #666; margin-top: 32px;">Sent from diksha-portfolio contact form · Reply directly to this email to respond to ${name}</p>
        </div>
      `,
    });

    req.log.info({ name, email }, "Contact form email sent");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
