import nodemailer from "nodemailer";

const sendEmail = async (options) => {

  if (!options.email) {
    throw new Error("Email is required");
  }
  const transport = nodemailer.createTransport({

    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const message = {

    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}> `,
    to: options.email,
    subject: options.subject,
    text: options.message,

  };

//   await transport.sendMail(message);
    await transport.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: options.html,
        });



  
};

export default sendEmail;