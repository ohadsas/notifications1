import { subscriptionService } from '../services/subscriptionService.js';
import { notificationService } from '../services/notificationService.js';

export const notificationController = {
  async notify(req, res) {
    const notification = {
      title: 'Rich Media Notification',
      body: 'Check out this awesome content!',
      icon: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=128&h=128&fit=crop',
      image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&h=300&fit=crop',
      badge: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=32&h=32&fit=crop',
      actions: [
        {
          action: 'explore',
          title: 'Explore Now'
        },
        {
          action: 'close',
          title: 'Close'
        }
      ]
    };

    try {
      const subscriptions = subscriptionService.getAll();
      await notificationService.send(subscriptions, notification);
      res.json({ message: 'Notifications sent successfully' });
    } catch (error) {
      console.error('Error sending notifications:', error);
      res.status(500).json({ error: 'Failed to send notifications' });
    }
  }
};