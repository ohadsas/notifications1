import express from 'express';
import { subscriptionController } from '../controllers/subscriptionController.js';
import { notificationController } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/subscribe', subscriptionController.subscribe);
router.post('/unsubscribe', subscriptionController.unsubscribe);
router.post('/notify', notificationController.notify);

export default router;