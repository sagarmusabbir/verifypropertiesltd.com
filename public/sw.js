// This file is intentionally empty
// It's created to prevent 404 errors for service worker requests
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

// No fetch handler - will use browser defaults