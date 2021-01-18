interface IWelcomeMesssage { name: string, id: string }

type TWelcomeMessage = (args: IWelcomeMesssage) => string

const welcomeMessage: TWelcomeMessage = ({ name, id }) => `
  <h2 style="font-size: 16px;">Bem vindo a Academia de investimento</h2>
  <br />
  <p>Olá ${name}, Bem vindo a academia de investimento.</p>
  <br />
  <p>Caro cliente, o seu número de referência é <b>${id}</b></p>
`;

export default welcomeMessage;
