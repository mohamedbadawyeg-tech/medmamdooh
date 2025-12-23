importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  messagingSenderId: "",
  appId: ""
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
