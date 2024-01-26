import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import GeneralRouter from './Routes';

dotenv.config();

class app {
  private app: Express = null;
  private port: string = process.env.PORT;

  constructor() {
    this.app = express();
    this.enableCors();
    this.loadRoutes();
  }

  enableCors() {
    this.app.use(cors());
    console.log('Cors enabled');
  }

  loadRoutes() {
    this.app.use('/', GeneralRouter);
    console.log('router read successfully');
  }

  init() {
    this.app.listen(this.port, () => {
      console.log('Server started');
      console.log(`link: http://localhost:${this.port}/`);
    });
  }
}

new app().init();
