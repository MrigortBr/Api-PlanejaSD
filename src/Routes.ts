import { Router, Request, Response } from 'express';
import { authenticate, authenticateByType } from './middlewares/authentication';
import courses from './routes/CoursesRoutes';

class GeneralRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private async initializeRoutes() {
    this.router.use('/', courses);
  }
}

export default new GeneralRouter().router;
