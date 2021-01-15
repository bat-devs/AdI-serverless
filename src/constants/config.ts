export const config = {
  mail: {
    host: 'cloud3.angoweb.biz',
    port: 465,
    secure: true,
    auth: {
      user: 'geral@academiadeinvestimento.ao',
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  },
};
