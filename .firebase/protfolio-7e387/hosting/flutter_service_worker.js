'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "21460e4890b785ab3b7e6e93d8b0fa5d",
"assets/AssetManifest.bin.json": "c2f2c442d2b1dcfaa3da9ee2d9ccd293",
"assets/AssetManifest.json": "9cc9aac7aebd98a5a93c79d0f2680f42",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/icons/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/icons/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/icons/facebook.png": "bf113bb237475f7d0568aceec1bfe8c0",
"assets/assets/icons/github.png": "382d67679648a5960918fdbbf00c5a0d",
"assets/assets/icons/google.png": "72b91e70242b61c7d648472facc58901",
"assets/assets/icons/instagram.png": "da762b16f6cf791a6b12215c743ea4ca",
"assets/assets/icons/linkedin.png": "f8dabed541f10b1c964074ea4468f456",
"assets/assets/icons/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/icons/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/icons/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/icons/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/icons/whatsapp.png": "682c56e38305cbaf4880b69937209e4d",
"assets/assets/icons/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/images/E-commerce.png": "7fe3e80b653a84309846a2d6fc84ac3a",
"assets/assets/images/ebuy1.png": "1d05d54db6953d1724797a4a13a662bc",
"assets/assets/images/ebuy10.png": "bd9646484bc066c69764e3c8fb23ec7b",
"assets/assets/images/ebuy11.png": "fb60870e3595a13e2a6428a631f68ad0",
"assets/assets/images/ebuy12.png": "5e939efd98dfdc247156ca3f1cf5856c",
"assets/assets/images/ebuy13.png": "7996153e49458293abc296ba9278ba80",
"assets/assets/images/ebuy14.png": "54cdaf4d1b2ea565d26615bc6d113b14",
"assets/assets/images/ebuy15.png": "bbbbb88932808f4af7fb8a00f4441d2e",
"assets/assets/images/ebuy16.png": "62df2f7d8d068bf6d8cffa67b65f8d7c",
"assets/assets/images/ebuy17.png": "8b1fedf6d0daee43fdcc0e45b1712089",
"assets/assets/images/ebuy18.png": "7be6ace56b05f981005ed2a031ff152e",
"assets/assets/images/ebuy19.png": "6c296143a08b268e16bd1f88c4d45864",
"assets/assets/images/ebuy2.png": "e3b8c8d9b0fbe4ea1aec1d9eeea9d6a4",
"assets/assets/images/ebuy3.png": "ba874aa2dee76b2a2b15ee9b1245ce3c",
"assets/assets/images/ebuy4.png": "ca2c295210d8ce954b491fa8258465c3",
"assets/assets/images/ebuy5.png": "e857eb8dd6266523f7978cfe02901e72",
"assets/assets/images/ebuy6.png": "c99ae422e32fefb4566d233de7290454",
"assets/assets/images/ebuy7.png": "a7985c53a8c734e7fa8a0536550ff93a",
"assets/assets/images/ebuy8.png": "93e79c62a4c235f3e8027c477bc9dcbe",
"assets/assets/images/ebuy9.png": "e967137c2450975f6f2eed1752c85a37",
"assets/assets/images/GB1.png": "155bf97a30592a4269ee45afec69dbef",
"assets/assets/images/GB2.png": "91e6ffe760fe9439bea6380d2df6cbe2",
"assets/assets/images/GB3.png": "c33728d650816efd145d3ee50753ed9f",
"assets/assets/images/GB4.png": "fb52cb25fec6a55c71b54cf0261218ac",
"assets/assets/images/laeeb1.png": "7a3def5def5537bc0ae14c61011185a0",
"assets/assets/images/laeeb2.png": "65fb0d4334e58b03968e3267de528fbc",
"assets/assets/images/laeeb3.png": "5857dc5ca991da77fb3d72580f1adcbe",
"assets/assets/images/laeeb4.png": "e7fe00e360bfa10e49d05d0f574cc644",
"assets/assets/images/laeeb5.png": "2b685d039e53adab6f88b571be51abcd",
"assets/assets/images/laeeb6.png": "96a31a8dee644182d4cea492d71c1583",
"assets/assets/images/laeeb7.png": "8a276707d84d365a344fee3d81f65400",
"assets/assets/images/laeeb8.png": "366a25410475e28947694265b2d46c7e",
"assets/assets/images/LO1.png": "c7b527987e67adefe1636c45c7c34eb3",
"assets/assets/images/LO10.png": "220ff0b0118c3d715850ebe9644b28ff",
"assets/assets/images/LO11.png": "2725a16ae58ff485f6bee4d49cd04df6",
"assets/assets/images/LO12.png": "4141fcbc2fd371a3fdb6f16bcb79dba1",
"assets/assets/images/LO13.png": "d4798357cdd64a9cdafd22c469769fd6",
"assets/assets/images/LO14.png": "b8507e95cd8bbb507ba2a339f5450ef8",
"assets/assets/images/LO15.png": "f313cc2d507b8f39a3332717fe15552a",
"assets/assets/images/LO16.png": "6c99068d5f80ff5e6018b5d5af5d09fc",
"assets/assets/images/LO17.png": "7f8c60d060f8f70b22f18b926c1689dc",
"assets/assets/images/LO18.png": "2dbf98fa4ee3f528d075e465b92edc4e",
"assets/assets/images/LO19.png": "bc6e77e6e5ac887173052a1820847346",
"assets/assets/images/LO2.png": "d6ad52acd1908887c7ced35bb96ec33d",
"assets/assets/images/LO20.png": "32eb455c4eff0cd2a0f64a55ee0cef45",
"assets/assets/images/LO3.png": "5634c911d193794bd732fe688a510bb8",
"assets/assets/images/LO4.png": "ecae7d26c1d6658692843e19488fa0e7",
"assets/assets/images/LO5.png": "266de6c67d697eb146a0fca1b6ee32b3",
"assets/assets/images/LO6.png": "d0d8971a06af275e893a989d9d65d990",
"assets/assets/images/LO7.png": "0653210219f72b6ffca41732364a908d",
"assets/assets/images/LO8.png": "8650ef31c97b5e9741227c3975039e75",
"assets/assets/images/LO9.png": "df7cf3070f920d976819b738c6fc76c1",
"assets/assets/images/logo.jpg": "2473b2b70768ba36ed0f457604eb9ada",
"assets/assets/images/Quran1.png": "3517a8d115ba9780d6ac538c06d4680a",
"assets/assets/images/Quran2.png": "2be34b4b1544193e5f7c86f4d4b5b815",
"assets/assets/images/Quran3.png": "f644719e7491321c26389b7a987b4d13",
"assets/assets/images/Quran4.png": "f518870cb8c1df45720a3ac4dc208901",
"assets/assets/images/Quran5.png": "df92d2241963d66f0a8df9e9bb4ff4fe",
"assets/assets/images/Quran6.png": "ecbd8a5a23ce9490d99466c5b123abfd",
"assets/assets/images/Quran7.png": "021b06cebf3476cf807861d67bad765f",
"assets/assets/images/ToDo1.png": "b9662dbbf8d86f1722abea5dc2bb69ed",
"assets/assets/images/ToDo2.png": "479a8b2c28bb65601f61f77562c056f7",
"assets/assets/images/ToDo3.png": "4a7a45bd4c6f04791da45aeca2920c4d",
"assets/assets/images/ToDo4.png": "70ae917b509779bb2941049b3b56c23c",
"assets/assets/images/Uber1.png": "3b985da3f9b2ae81f4d6d5a5e9cdd191",
"assets/assets/images/Uber2.png": "afaa69ba6b093885044cd2b2aea21dc1",
"assets/assets/images/Uber3.png": "48968cdb91b2dadfdcffa8273d68df86",
"assets/assets/images/Uber4.png": "0f6af5b0f63fc2bfb94ad55c1a43ca5c",
"assets/assets/images/Uber5.png": "6e481e1097f09986c25873b12d610627",
"assets/assets/images/Uber6.png": "05b1e80f5ce502cfe6787bf9e9fef714",
"assets/assets/images/Uber7.png": "b8c8252f2186c7888030d9968f2da171",
"assets/FontManifest.json": "50970db198bc67a149587a0999b20674",
"assets/fonts/MaterialIcons-Regular.otf": "2fd241c4f14cdc2c84bd6e165ad67d6a",
"assets/NOTICES": "6b44ce6a566f3ea89c23bba9fdde06df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.jpg": "2473b2b70768ba36ed0f457604eb9ada",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d7a2fdeb4bd2d7cb273dfa6aca735187",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "62a014d98413854eaa9e18c996e9c1a7",
"/": "62a014d98413854eaa9e18c996e9c1a7",
"main.dart.js": "3ce4a60413b77a328dbd86f1d42c2ecb",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"portfolio.code-workspace": "bd684ccfad3324307d0d79840a8e08b2",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
