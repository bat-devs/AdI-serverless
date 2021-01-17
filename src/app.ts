import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import dotenv from 'dotenv';

import Mail from "./services/mail";
import { welcomeMessage, messageSMS } from "./constants/messages";
import sendSMS from "./services/sms";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const routes = () => {
  app.route("/").get((_, res) => res.send({ 'result': 'version 1.0.0' }));

  app.route("/mail/welcome").post((req, res) => {
    const { to, id, name }: { to: string, id: string, name: string } = Object.assign({}, req.body);
    
    const result = Mail({ to, subject: 'Bem vindo a Academia de Investimento', html: welcomeMessage({ id, name }) });

    res.status(200).json({ 'result': result });
  });


  app.route("/sms/welcome").post((req, res) => {
    const { to, id, name }: { to: string, id: string, name: string } = Object.assign({}, req.body);
    
    const result = sendSMS({ to, body: messageSMS({ id, name }) });

    res.status(200).json({ 'result': result });
  });
};

routes();

export default app;