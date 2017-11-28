sendMail = () =>{
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'anielkpa@gmail.com',
    from: `${this.state.email}`,
    subject: `Hello! This is new notebook inquiry from ${this.state.company}`,
    text: 'Notebook inquiry',
        html:`<table>${this.createEmailForm}</table>`,
  };
  sgMail.send(msg);
}
