importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAMJjeucsuWiIrOKJ19AK6VT9zLS7ZB6MY",
  authDomain: "medtrackmamdouh.firebaseapp.com",
  projectId: "medtrackmamdouh",
  messagingSenderId: "588115249832",
  appId: "1:588115249832:web:1e8a2f5dd57db68047909d"
};

firebase.initializeApp(FIREBASE_CONFIG);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = (payload.notification && payload.notification.title) || 'إشعار';
  const body = (payload.notification && payload.notification.body) || '';
  const options = {
    body,
    icon: 'icons/icon-192.png',
    badge: 'icons/icon-192.png'
  };
  self.registration.showNotification(title, options);
});
