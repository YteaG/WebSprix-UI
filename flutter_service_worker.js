'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "55c71d93eac4cd26eb8b8c5fa2b1e79e",
"assets/AssetManifest.bin.json": "8bcc7e68f9f5120b3986cb5bf6d2cfaf",
"assets/AssetManifest.json": "ec116081add4ead0e7acd46859ab223e",
"assets/assets/images/abyssinia.png": "d5d4a22d34e34358c15ff4517d7aa87e",
"assets/assets/images/announcement.png": "49662faff71626f4efdd0de65ffa30c6",
"assets/assets/images/billing.png": "6e717255bb19d4334cb75a5d9d31b866",
"assets/assets/images/check.png": "49bdb717ea6cd027bb878294cb30d1ee",
"assets/assets/images/due_amount_back.png": "4160ab4be3c5b7ef40affce6a81c89d1",
"assets/assets/images/home.png": "ae0ee69af6f8bbfb7dd10248d82db875",
"assets/assets/images/loading.gif": "bb942f1fbc6524b38344bc32608a8386",
"assets/assets/images/lock.png": "2ad6f7766cf1266fcda920968efb39db",
"assets/assets/images/lock_outline.png": "420650eebc3693ace6d36fa344b28dde",
"assets/assets/images/logo.png": "1640e3e20ee19ac7e212623a9473316f",
"assets/assets/images/logo_wide.png": "3b7d4cf7ad864639dc31227f75521568",
"assets/assets/images/megaphone.png": "ac80e42e6b14a5cd062ae3593835cd68",
"assets/assets/images/notification.png": "37e7090c8b8c0b90efc95520cc72f70d",
"assets/assets/images/payment_screen_background.png": "acfbf8ad848a093c873736b36cbcdfb0",
"assets/assets/images/services.png": "5b4c57169ef0f130b8ccdfb15ff66229",
"assets/assets/images/service_check_back.png": "df2882117638a3a34f23de412822cc06",
"assets/assets/images/settings_icon.png": "678b94d641f8a391717a9ffba2e90f12",
"assets/assets/images/signal.jpg": "8b307d454d634c8b0a89c745a09b49a1",
"assets/assets/images/suitman.png": "63562911d2ab74f79faebe371ab19832",
"assets/assets/images/telebirr.png": "cb0101c28d99c81ffbaa3fdf943a2821",
"assets/assets/images/visa.png": "a78027531e0e63e1a4d881367ec88004",
"assets/assets/images/wifi.png": "ad60d176e8d4316d737e4514758975f6",
"assets/assets/vectors/announcement.svg": "418e4e8459b90ca653a43b002e0b2dff",
"assets/assets/vectors/call.svg": "7e7bf2b6faf51d2d3c525768a19e1e1f",
"assets/assets/vectors/hot_line.svg": "cf82386e5418c35af2465fd337188922",
"assets/assets/vectors/invoice.svg": "ad35c6412cb9c8205be60da7ab710e61",
"assets/assets/vectors/logo-facebook.svg": "6491d2ec4bea00c0d0b6d27d10c8ed66",
"assets/assets/vectors/logo-instagram.svg": "fde7a2f95a63539060b54dd9a14d6b8e",
"assets/assets/vectors/logo-linkedin.svg": "a7873d8293d0bd53569eb3c5c794df8f",
"assets/assets/vectors/logo-twitter.svg": "c563572bf026301c9ff5b87e6867e16e",
"assets/assets/vectors/logo-youtube.svg": "7a6b1bd15ae116d5b6f9e9d646c4ef97",
"assets/assets/vectors/logo.svg": "a21970b73fd26115402241e7191d47e4",
"assets/assets/vectors/otp_man.svg": "57aa4a0ed74889ad2e597edd4a5e9296",
"assets/assets/vectors/profile_round.svg": "e3bc5a522626d7efa4e6abfef8c11217",
"assets/assets/vectors/telegram.svg": "5f0e521d764ee153d74c1738d0fccdb9",
"assets/assets/vectors/telegram_yellow.svg": "31274b20c9419ff2bb3213415c21ecaa",
"assets/assets/vectors/ticket.svg": "4c4b4542483341ea59c13800f1f61aff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e60b22538f534d62afc98492f9da8aed",
"assets/NOTICES": "1fe5107eb2afe8c64260628f030f4659",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "da5f1aa944584c962cc681ede56fb6e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0de6e08e1e2fc915a8d6bf3c0985f4f",
"/": "b0de6e08e1e2fc915a8d6bf3c0985f4f",
"main.dart.js": "c380f69a66dbc4d0b3859a24a0546615",
"manifest.json": "ad74a38a097558b5e6f27fe636cfc1b2",
"version.json": "dfa7bba66262686e1cc97bb6c7877104"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
