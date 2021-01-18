import twilio from 'twilio';

const accountSid = 'ACbd85c385ae17e6aac5411d23786d1b34'; 
const authToken = '754443a76dcbaaedbf99173aaa477fa3'; 
const client = twilio(accountSid, authToken); 
 
const sendSMS = ({ to, body }:
  { 
  to: string;
  body: string;
}) => (
  client.messages
  .create({ 
    to,
    body,  
    messagingServiceSid: 'MG2fb4a3969370263a86c30173827c94f7',      
   }) 
  .then(message => console.log(message))
  .catch(error => console.log(error))
);
export default sendSMS;
