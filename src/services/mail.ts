import * as nodemailer from 'nodemailer';

import { config } from './../constants/config';

const transporter = nodemailer.createTransport(config.mail);

interface ISendMail { 
  to: any;
  subject: string;
  html: string;
};

type TSendMail = (arg: ISendMail) => void;

const SendMail: TSendMail = ({ to, subject, html }) => {
  const mailOptions = {
    from: `Academia de Investimento <${config.mail.auth.user}>`,
    to,
    subject,
    html,
  };
  
  return transporter.sendMail(mailOptions, (error, _) => error ? error.toString() : 'Sended');
};

export default SendMail;
