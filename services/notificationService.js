import webpush from 'web-push';
import { vapidConfig } from '../config/vapid.js';

webpush.setVapidDetails(
  `mailto:${vapidConfig.email}`,
  vapidConfig.publicKey,
  vapidConfig.privateKey
);

export const notificationService = {
  async send(subscriptions, notification) {
    const promises = subscriptions.map(subscription =>
      webpush.sendNotification(subscription, JSON.stringify(notification))
    );
    
    return Promise.all(promises);
  }
};