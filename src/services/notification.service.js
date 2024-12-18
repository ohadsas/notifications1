import webpush from 'web-push';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

webpush.setVapidDetails(
  `mailto:${config.vapid.email}`,
  config.vapid.publicKey,
  config.vapid.privateKey
);

export const notificationService = {
  async send(subscriptions, notification) {
    const promises = subscriptions.map(async subscription => {
      try {
        await webpush.sendNotification(subscription, JSON.stringify(notification));
        logger.info('Notification sent successfully');
      } catch (error) {
        logger.error('Error sending notification:', error);
        throw error;
      }
    });
    
    return Promise.all(promises);
  }
};