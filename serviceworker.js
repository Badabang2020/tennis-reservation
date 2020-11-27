let cache = 'adventkalender';
let filesToCache = [

];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cache).then(function(cache) {
            return cache.addAll(filesToCache).then(() => console.log('Assets added to cache'))
                .catch(err => console.log('Error while fetching assets', err));
        })
    );
});
self.addEventListener("activate", event => {
    // console.log('Activate!');
});
self.addEventListener('fetch', function(event) {
    // console.log('Fetch!', event.request);
});