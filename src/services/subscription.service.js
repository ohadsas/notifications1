import { logger } from '../utils/logger.js';

// In-memory store (replace with database in production)
const subscriptions = new Set();

export const subscriptionService = {
  add(subscription) {
    try {
      subscriptions.add(subscription);
      logger.info('Subscription added successfully');
      return true;
    } catch (error) {
      logger.error('Error adding subscription:', error);
      throw error;
    }
  },

  remove(subscription) {
    try {
      const result = subscriptions.delete(subscription);
      logger.info('Subscription removed successfully');
      return result;
    } catch (error) {
      logger.error('Error removing subscription:', error);
      throw error;
    }
  },

  getAll() {
    return Array.from(subscriptions);
  }
};