// In-memory store (replace with database in production)
const subscriptions = new Set();

export const subscriptionService = {
  add(subscription) {
    subscriptions.add(subscription);
  },

  remove(subscription) {
    subscriptions.delete(subscription);
  },

  getAll() {
    return Array.from(subscriptions);
  }
};