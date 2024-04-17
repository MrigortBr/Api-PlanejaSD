import { Router } from 'express';

import {
  listAllCourses,
  listCoursesByID,
} from './controllers/coursesController';
import { authenticateByType } from './middlewares/authentication';
import { listQuestionByIDCourse } from './controllers/QuestionController';
import { listChoiceByQuestion } from './controllers/ChoicesController';
import { listJustifyChoiceByIdController } from './controllers/JustifyChoiceController';
import { AnswerController } from './controllers/AnswerController';
import { updateCourse } from './controllers/PortableController';
import dotenv from 'dotenv';

const routes = [
  {
    base: '/courses',
    routes: [
      {
        name: 'list all course',
        path: '/',
        controller: listAllCourses,
        type: 'get',
        middleware: authenticateByType,
      },
      {
        name: 'list course by id',
        path: '/:id',
        controller: listCoursesByID,
        type: 'get',
        middleware: authenticateByType,
      },
      {
        name: 'list question by course',
        path: '/:id/questions',
        controller: listQuestionByIDCourse,
        type: 'get',
        middleware: authenticateByType,
      },
    ],
  },
  {
    base: '/question',
    routes: [
      {
        name: 'list course by id',
        path: '/:id/choices',
        controller: listChoiceByQuestion,
        type: 'get',
        middleware: authenticateByType,
      },
    ],
  },
  {
    base: '/choice',
    routes: [
      {
        name: 'list justify choice',
        path: '/:id/justifyChoice',
        controller: listJustifyChoiceByIdController,
        type: 'get',
        middleware: authenticateByType,
      },
    ],
  },
  {
    base: '/answer',
    routes: [
      {
        name: 'list course by id',
        path: '/:idChoice/:idJustify',
        controller: AnswerController,
        type: 'post',
        middleware: authenticateByType,
      },
    ],
  },
  {
    base: '/portable',
    routes: [
      {
        name: '',
        path: '/:id/questions',
        controller: updateCourse,
        type: 'post',
        middleware: authenticateByType,
      },
    ],
  },
];
dotenv.config();

class GeneralRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    //this.initializeRoutes();
    this.initializeRoutesNew();
  }

  private async initializeRoutes() {
    //this.router.use('/courses', courses);
    //this.router.use('/courses', questions);
    //this.router.use('/question', choices);
    //this.router.use('/choice', JustifyChoice);
    //this.router.use('/answer', Answer);
    //this.router.use('/portable', Portable);
  }

  private async initializeRoutesNew() {
    const rows = [];
    routes.forEach((element) => {
      const base = element.base;
      for (const route of element.routes) {
        const { path, controller, type, middleware } = route;
        const fullPath = `${base}${path}`;
        rows.push({ base: base, path: path, controller: controller.name });

        this.addRoute(fullPath, controller, type, middleware);
      }
    });
    if (process.env.CAN_PRINT_ROUTES_MAP === 'true') this.listRoutes(rows);
    console.info('router read successfully');
  }

  private listRoutes(rows) {
    console.info('Map Routes:');
    console.table(rows);
  }

  private async addRoute(
    path: string,
    controller: any,
    type: string,
    middleware: any,
  ) {
    switch (type) {
      case 'get':
        if (middleware) this.router.get(path, middleware, controller);
        else this.router.get(path, controller);

        break;
      case 'post':
        if (middleware) this.router.post(path, middleware, controller);
        else this.router.post(path, controller);

        break;
      default:
        throw new Error(`Unsupported route type: ${type}`);
    }
  }
}

export default new GeneralRouter().router;
