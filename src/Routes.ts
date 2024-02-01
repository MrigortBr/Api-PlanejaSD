import { Router } from 'express';
import courses from './routes/CoursesRoutes';
import questions from './routes/QuestionsRoutes';
import choices from './routes/ChoicesRoutes';
import JustifyChoice from './routes/JustifyChoiceRoutes';

class GeneralRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private async initializeRoutes() {
    this.router.use('/courses', courses);
    this.router.use('/courses', questions);
    this.router.use('/question', choices);
    this.router.use('/choice', JustifyChoice);
  }
}

export default new GeneralRouter().router;
