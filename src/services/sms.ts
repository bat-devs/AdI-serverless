import twilio from 'twilio';
import environment from '../constants/environemnt';

const accountSid = 'AC6967df804adbdfe99537e928c83adccd';
const authToken = 'c7fd633bf9174f69517c69f15c20cdd4';
const from = '+15005550006';

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
  .then(message => console.log(message))
  .catch(error => console.log(error))
);
export default sendSMS;
