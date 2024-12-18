import { Router } from 'express';
import { subscriptionController } from '../controllers/subscription.controller.js';

const router = Router();

router.post('/', subscriptionController.subscribe);
router.delete('/', subscriptionController.unsubscribe);

export const subscriptionRoutes = router;