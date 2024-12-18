import { subscriptionService } from '../services/subscriptionService.js';

export const subscriptionController = {
  subscribe(req, res) {
    try {
      const subscription = req.body;
      subscriptionService.add(subscription);
      res.status(201).json({ message: 'Subscription added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add subscription' });
    }
  },

  unsubscribe(req, res) {
    try {
      const subscription = req.body;
      subscriptionService.remove(subscription);
      res.status(200).json({ message: 'Subscription removed successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove subscription' });
    }
  }
};