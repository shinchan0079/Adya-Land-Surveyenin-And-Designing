import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

let transporter;

const setupTransporter = async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_HOST !== 'your_smtp_host') {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Generate test SMTP service account from ethereal.email
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, 
      auth: {
        user: testAccount.user, 
        pass: testAccount.pass, 
      },
    });
    console.log('Created Ethereal Email test account for development');
  }
};

setupTransporter();

export const sendAdminNotification = async (lead) => {
  if (!transporter) await setupTransporter();
  
  try {
    const info = await transporter.sendMail({
      from: '"ADYA System" <no-reply@adyalandsurvey.com>', 
      to: process.env.ADMIN_NOTIFICATION_EMAIL || "admin@adyalandsurvey.com", 
      subject: `New Lead: ${lead.lead_type} — ${lead.lead_code}`, 
      text: `A new lead has been received.\n\nCode: ${lead.lead_code}\nName: ${lead.name}\nPhone: ${lead.phone}\nService: ${lead.service || 'N/A'}\nLocation: ${lead.location || 'N/A'}\n\nView details in the Admin Panel.`, 
    });

    console.log("Admin notification sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending admin email:", error);
  }
};

export const sendCustomerAutoReply = async (lead) => {
  if (!transporter) await setupTransporter();
  
  if (!lead.email) return; // Can't send if no email provided

  try {
    const info = await transporter.sendMail({
      from: '"ADYA Land Surveying" <no-reply@adyalandsurvey.com>', 
      to: lead.email, 
      subject: `Enquiry Received - ADYA Land Surveying And Design (${lead.lead_code})`, 
      text: `Dear ${lead.name},\n\nThank you for contacting ADYA Land Surveying And Design.\n\nWe have received your enquiry (Ref: ${lead.lead_code}) and will review the submitted information.\n\nBest Regards,\nADYA Land Surveying And Design`, 
    });

    console.log("Customer auto-reply sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending customer auto-reply:", error);
  }
};
