import express, { Router } from 'express';
import { updateCourse } from '../controllers/PortableController';

const router: Router = express.Router();

router.post('/update', updateCourse);

export default router;
