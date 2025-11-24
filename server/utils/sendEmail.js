// const {MailerSend , EmailParams , Sender , Recipient} = require("mailersend");
// require("dotenv").config();

// const mailerSend = new MailerSend({
//   apiKey: process.env.MAILER_SEND_API_KEY
// });

// const sentFrom = new Sender(
//   process.env.MAILER_SEND_EMAIL,
//   process.env.MAILER_SEND_NAME
// );

// async function sendEmail (subject , text , clientEmail) {
//   const recipients = [new Recipient(clientEmail.address , clientEmail.name)];
  
//   const emailParams = new EmailParams()
//   .setFrom(sentFrom)
//   .setTo(recipients)
//   .setReplyTo(sentFrom)
//   .setSubject(subject)
//   .setText(text);

//   await mailerSend.email.send(emailParams);
// }

// module.exports = sendEmail;

const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service : "gmail",
  host : "smtp.gmail.com",
  port : 587,
  secure : false,
  auth : {
    user : process.env.GMAIL_USER,
    pass : process.env.GMAIL_PASS
  }
});

async function sendEmail (to , subject , text) {
  const mailOptions = {
    from : process.env.GMAIL_USER,
    to,
    subject,
    text
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log("email sent successfully");
  } catch (error) {
    console.log(`Error : ${error}`)
  }
}

module.exports = sendEmail;