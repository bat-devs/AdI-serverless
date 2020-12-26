import express from "express";
// import * as httpStatus from 'http-status';
import * as bodyParser from "body-parser";
import Mail from "./services/mail";
import { welcomeMessage } from "./constants/messages";

const app = express();
app.use(bodyParser.json());

const routes = () => {
  app.route("/").get((_, res) => res.send({ 'result': 'version 1.0.0' }));

  app.route("/mail/welcome").post((req, res) => {
    const { to, id, name }: { to: string, id: string, name: string } = Object.assign({}, req.body);
    
    const result = Mail({ to, subject: 'Bem vindo a Academia de Investimento', html: welcomeMessage({ id, name }) });

    res.status(200).json({ 'result': result });
  });
};

routes();

export default app;