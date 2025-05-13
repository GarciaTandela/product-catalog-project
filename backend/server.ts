import express, { Application } from 'express';
import config from './loaders/config';
import routes from './loaders/routes';
import middlewares from './loaders/middlewares';
import dbconnect from './loaders/database';

const app: Application = express();
const port = 3000;

config(app);
routes(app);
middlewares(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
  dbconnect();
});
