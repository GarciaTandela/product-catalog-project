import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'x-api-key',
    'Authorization'
  ],
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false
};

export default function (app: Application) {
  app.use(cors(options));

  app.use(helmet());

  app.use(json({ limit: '500mb' }));

  app.use(urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));
}
