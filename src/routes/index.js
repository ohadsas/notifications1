import { Router } from 'express';
import { subscriptionRoutes } from './subscription.routes.js';
import { notificationRoutes } from './notification.routes.js';

const router = Router();

router.use('/subscriptions', subscriptionRoutes);
router.use('/notifications', notificationRoutes);

export const apiRoutes = router;