import { Router, Request, Response } from 'express';
import { authenticate, authenticateByType } from './middlewares/authentication';

class GeneralRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private async initializeRoutes() {
    this.router.get(
      '/authenticate',
      authenticateByType,
      (req: Request, res: Response) => {
        res.send('Rota 1 do Outro Aplicativo');
      },
    );

    this.router.get('/logged', authenticate, (req: Request, res: Response) => {
      res.send('oi');
    });
  }
}

export default new GeneralRouter().router;
