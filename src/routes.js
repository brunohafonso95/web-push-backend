const { Router } = require('express');

const { notificationController } = require('./controllers');
const routes = Router();

routes.post("/subscriptions", notificationController.saveSubscription);
routes.post('/notifications/send', notificationController.sendNotification);

module.exports = routes;
