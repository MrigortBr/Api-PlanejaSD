import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

import GeneralRouter from './Routes';

dotenv.config();

class app {
  private app: Express = null;
  private port: string = process.env.PORT;

  constructor() {
    this.app = express();
    this.enableBodyParser();
    this.enableCors();
    this.loadRoutes();
    this.logRequests(); // Adicionando o middleware de registro de requisiçõe
  }

  enableCors() {
    this.app.use(
      cors({
        origin: '*',
      }),
    );
    console.log('Cors enabled');
  }

  loadRoutes() {
    this.app.use('/', GeneralRouter);
  }

  logRequests() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
      next();
    });
  }

  enableBodyParser() {
    this.app.use(express.json());
  }

  init() {
    this.app.listen(this.port, () => {
      console.log('Server started');
      console.log(`link: http://localhost:${this.port}/`);
    });
  }
}

new app().init();
