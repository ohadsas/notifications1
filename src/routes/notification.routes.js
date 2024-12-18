import { Router } from 'express';
import { notificationController } from '../controllers/notification.controller.js';

const router = Router();

router.post('/send', notificationController.notify);

export const notificationRoutes = router;