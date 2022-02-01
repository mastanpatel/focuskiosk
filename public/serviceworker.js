const CACHE_NAME = "version-1";
const urlsToCache = ['index.hmtl', 'offline.html','./images/Properties/Buildings/property-1.jpg'
,'./images/Properties/Buildings/property-2.jpg', './images/Properties/Buildings/property-3.jpg', './images/Properties/Buildings/property-4.jpg',
'./images/Properties/Buildings/property-5.jpg', './images/Properties/Buildings/property-6.jpg];','./images/Properties/Buildings/property-7.jpg', './images/Properties/Buildings/property-8.jpg']

//install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

//Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch((err) => caches.match('offline.html'))
            })
    )
});


//Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];

    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName);
            }
        })
        ))
    )
});