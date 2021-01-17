const environment = {
  port: process.env.PORT || '4201',
  twiilioSID: process.env.TWILIO_ACCOUNT_SID,
  twiilioAuth: process.env.TWILIO_AUTH_TOKEN,
  emailPassword: process.env.EMAIL_PASSWORD,
  fromPhone: process.env.FROM_PHONE,
};

export default environment;
