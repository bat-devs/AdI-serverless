const messageSMS = ({ id, name }: {
  id: string;
  name: string;
}) => `Academia de investimento
Sr(a). ${name}, a sua conta foi criada com sucesso, e o seu número de conta é: ${id}`;

export default messageSMS;
