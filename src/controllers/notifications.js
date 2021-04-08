const uuid = require('uuid');

const databaseProvider = require('../database');
const { notificationService } = require('../services');

module.exports = {
    /**
     * 
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    async saveSubscription(req, res) {
        const subscription = req.body;
        console.log('savind subscription');
        console.log({ subscription });
        databaseProvider.setKey(uuid.v4(), subscription);
        res.json({ message: "success" });
    },
    /**
     * 
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    async sendNotification(req, res) {
        const subscriptions = databaseProvider.getAllKeys().map(sub => databaseProvider.getKey(sub));

        console.log(`sending notifications to ${subscriptions.length} subscribers`);
        const payload = req.body;
        subscriptions.forEach(subscription => notificationService.sendWebPushNotification(subscription, JSON.stringify(payload)));
        res.json({ message: 'notifications sent' })
    }
}