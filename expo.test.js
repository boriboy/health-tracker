const Expo = require('expo-server-sdk')

// Create a new Expo SDK client
const expo = new Expo();

module.exports = (pushMessages) => {
    // Create the messages that you want to send to clents
    let filteredMessages = [];

    for (let message of pushMessages) {
        // Check that all your push tokens appear to be valid Expo push tokens
        if (!Expo.isExpoPushToken(message.to)) {
            console.error(`Push token ${pushToken} is not a valid Expo push token`);
            continue;
        }

        // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications.html)
        filteredMessages.push(message)
    }

    // The Expo push notification service accepts batches of notifications so
    // that you don't need to send 1000 requests to send 1000 notifications. We
    // recommend you batch your notifications to reduce the number of requests
    // and to compress them (notifications with similar content will get
    // compressed).
    let chunks = expo.chunkPushNotifications(filteredMessages);

    (() => {
        // Send the chunks to the Expo push notification service. There are
        // different strategies you could use. A simple one is to send one chunk at a
        // time, which nicely spreads the load out over time:
        for (let chunk of chunks) {
            expo.sendPushNotificationsAsync(chunk).then(receipts => {
                console.log(receipts)
            }).catch(err => {
                console.error(error)
            })
        }
    })();
}
