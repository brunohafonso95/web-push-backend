const webPush = require('web-push');

const vapidKeys = {
    publicKey:
        'BGbMAnqCvja13Y-zWyI5tncZDWGoXxqzHerFhsEmlRAXtVE2GwX2EWhz50vUbNPVvZvbw7x1PvLtozMSlSCoyRU',
    privateKey: 'wHkMuM4lxdfuKDaNUtO6Eh8xKO_QSW2KCc8HgOjGPYg',
}

webPush.setVapidDetails(
    'mailto:brunohafonso@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)


module.exports = {
    sendWebPushNotification(subscription, payload) {
        webPush.sendNotification(subscription, payload);
    }
}