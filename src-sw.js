importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
import {registerRoute} from 'workbox-routing';
import {NetworkFirst, StaleWhileRevalidate, CacheFirst} from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';

console.log('this is my custom service worker');

registerRoute(
    'http://localhost:3000/users',
    new CacheFirst({
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200]
        })
      ]
    }),
  );

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);