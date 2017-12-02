const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.APP_SECRET);
const msg = {
  to: 'anna.sobkowiak.poznan@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//let sendMail = sgMail.send(msg);

export default sgMail;
