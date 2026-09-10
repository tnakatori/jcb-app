importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAO4QfWy5rEy_O860RoLbhYJ-scmKfIhOA",
  authDomain: "jcb-card-8f92f.firebaseapp.com",
  projectId: "jcb-card-8f92f",
  storageBucket: "jcb-card-8f92f.firebasestorage.app",
  messagingSenderId: "894726627206",
  appId: "1:894726627206:web:28507b3e3b38c24b675607",
});

const messaging = firebase.messaging();

// アプリがバックグラウンド(閉じている/裏にある)ときの通知表示
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "JCBカード利用通知";
  const options = {
    body: payload.notification?.body || "",
    icon: "https://www.jcb.co.jp/favicon.ico",
  };
  self.registration.showNotification(title, options);
});
