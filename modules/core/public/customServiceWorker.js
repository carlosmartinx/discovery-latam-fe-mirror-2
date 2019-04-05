importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js',
);

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}

const OFFLINE_URL = '/offline';

const staleWhileRevalidate = workbox.strategies.staleWhileRevalidate({
  cacheName: 'html-pages',
});

const customHandler = async (args) => {
  console.log('inside handler');
  try {
    const response = await staleWhileRevalidate.handle(args);
    return response || caches.match(OFFLINE_URL);
  } catch (error) {
    return caches.match(OFFLINE_URL);
  }
};

workbox.routing.registerRoute(
  /\.(?:js|css|html|svg|png|jpg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'data-static',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  }),
);

const matcher = ({ event }) => event.request.mode === 'navigate';
const handler = () => fetch('http://localhost:8000/lala').catch(() => caches.match('/offline'));

workbox.routing.registerRoute(matcher, handler);

workbox.routing.registerRoute('/*',
  workbox.strategies.staleWhileRevalidate());

// const navigationRoute = new workbox.routing.NavigationRoute(customHandler, {
//   // Configure with RegExps as appropriate.
//   whitelist: [new RegExp('/test')],
//   blacklist: [],
// });

// workbox.routing.registerRoute(navigationRoute);

/* injection point for manifest files.  */
workbox.precaching.precacheAndRoute([]);
