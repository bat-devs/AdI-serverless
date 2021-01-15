import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.FROM_PHONE;

console.log('AccountSID ::::: ', accountSid);
console.log('AuthToken ::::: ', authToken);
console.log('from ::::: ', from);

const client= twilio(accountSid, authToken);

const sendSMS = ({ to, body }:
  { 
  to: string;
  body: string;
}) => (
  client.messages
  .create({
    from,
    body,
    to,
  })
  .then(message => console.log(message.sid))
);
export default sendSMS;
