// const admin = require('firebase-admin')
// const serviceAccount = require('./PocketCare-ac71abb0b7ff.json')
// const https = require('https')
const push = require('./expo.test')

push([{
    "to": `ExponentPushToken[3Dz2jrGJNJ_5Ae7ZdG70oa]`,
    "sound": "default",
    "body": 'Don\'t forget your meds!',
    "priority": "high"
}])

// const settings = {
//     push: {
//         url: 'https://exp.host/--/api/v2/push/send',
//         request: {
//             host: 'www.exp.host',
//             port: 443,
//             path: '/--/api/v2/push/send',
//             method: 'POST',
//             headers: {
//                 accept: 'application/json',
//                 'accept-encoding': 'gzip, deflate',
//                 'content-type': 'application/json',
//             }
//         }
//     }
// }

// const createExpoPushObject = function(deviceToken, title, body) {
//     return {
//         "to": `ExponentPushToken[${deviceToken}]`,
//         "sound": "default",
//         "title": title,
//         "body": body,
//         "priority": "high"
//     }
// }

// // initialize firebase
// var app = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://pocketcare-2d66d.firebaseio.com'
// });

// const uid = 'lp8FHiDmHtRcMUQRYSL7a8kJl2o1'
// const mid = '-L8052AtpIHB7hJ1wjMM'

// app.database().ref(`meds/${uid}/${mid}`).once('value', snap => {
//     // get specific med
//     let med = snap.val()

//     console.log('med is', med)

//     app.database().ref(`users/${uid}/token`).once('value', tokenSnap => {
//         let token = tokenSnap.val()
//         console.log('token is', token)

//         // trigger notification
//         notify(createExpoPushObject(token, 'PocketCare', `Don't forget to take ${med.name}`))
//     })
    
// })
