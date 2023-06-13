'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "c626784a82efc1055c2905a8b44f73e8",
"assets/AssetManifest.smcbin": "4efa1078cce1003179688897356dd3d8",
"assets/assets/images/AGSinav.jpg": "c47124f5935858db7c25e309436ff282",
"assets/assets/images/ArkaBacak.jpg": "e942fcc90154a64ceb87e805fbc9619c",
"assets/assets/images/ArkaOmuz.jpg": "2d33d1c6746cbfd178796006172ac20b",
"assets/assets/images/ArkaPlan.jpg": "1e6cae4b4eace72979e618def5c84d80",
"assets/assets/images/ArnoldPress.jpg": "448dd3e7b3577f415dfc4ca0d3e8976d",
"assets/assets/images/Bacak.jpg": "9b303269359af67c7b6fc1787e5025e7",
"assets/assets/images/BACKL.jpg": "5db45fd23561addadae4a13daeb71673",
"assets/assets/images/barbell-curl-1.jpg": "e55c7e3dfd9d78ef81e297386ed53815",
"assets/assets/images/BarbellR.jpg": "fa1d8c15bfe5147520e46fb25c7479c1",
"assets/assets/images/Bel.jpg": "04f8a7de4562a0c4ccfe8521489a5acc",
"assets/assets/images/BICEPS-CURL-MACHINE.jpg": "a443e4efa9bc3aacbefa571709fb8559",
"assets/assets/images/BICEPS.jpg": "150cff3ec45b923107164bc51ec6c037",
"assets/assets/images/bl.jpg": "dad7eb501da8251fc36e50f7745e49b3",
"assets/assets/images/BLP.jpg": "5db45fd23561addadae4a13daeb71673",
"assets/assets/images/BNP.jpg": "83e7b4c3c5d85b51b6ecbcf3e85ac1cd",
"assets/assets/images/BOC.jpg": "1754fb20eb4384f069fd39e038af10f5",
"assets/assets/images/BOL.jpg": "fe79bf34e3aaae81ebdd180059706ce7",
"assets/assets/images/bs.jpg": "2f62ab7d51f855a52f920841e10ae769",
"assets/assets/images/BShrug.jpg": "53f989d0c59b1ea738fb3582d54d9ed0",
"assets/assets/images/BSP.jpg": "e9c13e97f1017837b4e93092eea869c7",
"assets/assets/images/cac.jpg": "cfbd9c9a3c6f3601975ea7a9514d9fe2",
"assets/assets/images/calf.jpg": "b323838dd499db8135b3cbd9087b16a4",
"assets/assets/images/CC.jpg": "d9af6d0a1df928d0508f1a11712d1158",
"assets/assets/images/CG.jpg": "b6c3c4789afe481d1d3774e1c5ac3b72",
"assets/assets/images/cha.jpg": "060a753814d0c4797098bd3210ce3def",
"assets/assets/images/chaa.jpg": "060a753814d0c4797098bd3210ce3def",
"assets/assets/images/ChestDips.jpg": "50cf08285070922ff9f020dfe3231439",
"assets/assets/images/ck.jpg": "1d2513ecee9c34dcabe35ad10ae91b47",
"assets/assets/images/CONCENTRATION-CURL.jpg": "e80151c88a0c9a2edb6962e3ee2c3271",
"assets/assets/images/CRow.jpg": "efc145dc59a0c7e09ef5bbe39d880832",
"assets/assets/images/DBBP.jpg": "46e889eea67295f3ddca4439d6c5c5b5",
"assets/assets/images/DDF.jpg": "1d363f1d7b5c7ec1f7a7590fb6d5f1a2",
"assets/assets/images/Dead.jpg": "3ae25b1db4f54fffccd96c3e40bf461b",
"assets/assets/images/dec.jpg": "ecd76a1bfe2be39c052be58f905b0050",
"assets/assets/images/DFR.jpg": "730447f39545f888a80695043eddc90b",
"assets/assets/images/DisBacak.jpeg": "5ec0e0506fff8aa30df47dde467e5f96",
"assets/assets/images/donkey.jpg": "769752268b14451af28b171e64cc1334",
"assets/assets/images/DRow.jpg": "d248046c23d47ec32335d8ff91efeff6",
"assets/assets/images/ds.jpg": "402d3643b9a025ce05f09ce4bc43ab55",
"assets/assets/images/DSP.jpg": "a9ee4626444cb58cfb5841c329748121",
"assets/assets/images/DumbellFly.jpg": "780ae1ffa827b15cb8e66a1cd07c18f5",
"assets/assets/images/FP.jpg": "5724cbd6fc2ae7cfd37753c8a569933d",
"assets/assets/images/fsq.jpg": "75b3fc0157ccf86cbf90bcbdc25a3ac2",
"assets/assets/images/gogus.jpg": "d3dc763c8d525887c8901bb64314305e",
"assets/assets/images/gs.jpg": "22f794f0d6442670636d2a867f42dd5f",
"assets/assets/images/GymWorkk.jpeg": "1f20c3d999f27de8c55a31c0dd35dbda",
"assets/assets/images/hacks.jpg": "6b274299ba3dd3f3fd7c5b345a9a6c29",
"assets/assets/images/hammer-curls-2018.jpg": "7a4a9c99acc3218324a579bb081b77e9",
"assets/assets/images/HAMMER-PRESS.jpg": "2d0c01a7c222168509cc0beb4cb2c66f",
"assets/assets/images/high-pulley-curl-768x420.jpg": "0968f3eb662567f74164d978abe86e02",
"assets/assets/images/HomeBarfix.jpg": "65112ee2c912a06c14b9f3f9059564a8",
"assets/assets/images/HomeDips.jpg": "20face1667b27531d316742dda74a144",
"assets/assets/images/HomeKalca.jpg": "3bbf84c28da5164015996a6c1c0af5e2",
"assets/assets/images/HomeKalf.jpg": "5ea7cca038dcdd90b3d42f5ed2542689",
"assets/assets/images/HomeMekik.jpg": "e1d2a65b49532dbbfa7e75000ca447f8",
"assets/assets/images/HomeOnKol.jpg": "132af11b8d8cfd9fe52902f4f9383904",
"assets/assets/images/HomePikePushUP.jpg": "77148650e4d55e5ba0b4fa0124d713cb",
"assets/assets/images/HomeSinav.jpg": "be404c1d894c0f951e53f073a220686a",
"assets/assets/images/HomeSquat.jpg": "33c18a94bff3faf1c82cc7948ad40aee",
"assets/assets/images/HomeYanKarin.jpg": "c44c2cb8f6aac06aace45f9dc49346f1",
"assets/assets/images/HouseWork.jpeg": "b57452f72e29772596cfe9a6d52772b1",
"assets/assets/images/HP.jpg": "2d0c01a7c222168509cc0beb4cb2c66f",
"assets/assets/images/ht.jpg": "6037fa1b453b8ef9bea20e1f94a88763",
"assets/assets/images/IBBP.jpg": "c28b5db4aaf2067ef36df8dd94489149",
"assets/assets/images/IBCF.jpg": "0a0be9df17fbf27866f43c1eda42ad00",
"assets/assets/images/IcBacak.jpg": "dc2d02ab89bf50ead28c5bb3812e80da",
"assets/assets/images/IcGogus.jpg": "0da3af135a1272c5cedd483851f4a635",
"assets/assets/images/inc.png": "8b55a1fa5f2f03eae8c65d9e6a760d62",
"assets/assets/images/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/images/IR.jpg": "e7f0a5033c8697d0058e2f3e3d44b891",
"assets/assets/images/js1.jpg": "2194c4396d1180c56c8a2f167e972dcf",
"assets/assets/images/Kalca.jpg": "206e8f96df633563cc2d5ea6e7cf1bab",
"assets/assets/images/Kalf.jpg": "dc5bfed31b27b98c09e5f5f8f3035553",
"assets/assets/images/Kanat.jpg": "01ad81dcc0d71fa06fb76a631379697c",
"assets/assets/images/Karin.jpg": "194a9315501d24c9d2ca3a27288ae3b4",
"assets/assets/images/Kol.jpg": "5ab451046bd69ffdd451e0a641cc3e8e",
"assets/assets/images/ks.jpg": "0336495b40dbe111bbbd69dedefe4e30",
"assets/assets/images/lc.jpg": "4492e58046b7f2c19bef5bc48e21c25b",
"assets/assets/images/LCC.jpg": "abb8290c27a35326c2a2ff5a8e52a250",
"assets/assets/images/le.jpg": "1293a6e793f34d3d993e7b817836e68b",
"assets/assets/images/lpress.jpg": "ac9a90b6d3c6946b0efabfe6f3f41045",
"assets/assets/images/LR.jpg": "bb44fede998299c001bf82f81c957c4a",
"assets/assets/images/lunges.jpg": "2caf66a188bb96513b98d73947c51ee9",
"assets/assets/images/man.png": "606613b39ab354c3756010fc64af648f",
"assets/assets/images/mcr.jpg": "f3634379749370ddab1b0c841fc652a5",
"assets/assets/images/mcru.jpg": "f3634379749370ddab1b0c841fc652a5",
"assets/assets/images/mek.jpg": "e5e32bc5315e9d60244cda7efe1710b8",
"assets/assets/images/MLR.jpg": "5d90e157718682eb52151df3adecca89",
"assets/assets/images/moun.jpg": "976f58acdc861a6bddb9065d3f8f637a",
"assets/assets/images/OACL.jpg": "f406469f0526922e8038ea95fd04fa77",
"assets/assets/images/oad.jpg": "73b70b24f6a74977dd186abd05f7b44c",
"assets/assets/images/OAR.jpg": "b335fe3eaa884041aa0fc2fca995304d",
"assets/assets/images/ODF.jpg": "3b24aaf138fd1e9b7b33acffff0bb0e9",
"assets/assets/images/odt.jpg": "917167edba101fce3045ef2a0a5a740d",
"assets/assets/images/omuz.jpg": "ed6b3bb9b18b320a602f36ba212c5763",
"assets/assets/images/OnBacak.jpg": "82ac2dc400e8a7e0d3f100a30a0bb269",
"assets/assets/images/onearm.jpg": "5c053525ed3afdad2556cf5327e4d340",
"assets/assets/images/OnKol.jpg": "414f53d48839b8ac40b3678f91e75b38",
"assets/assets/images/OnKol1.jpg": "7b682db67969ea403c3ed6e1def4080d",
"assets/assets/images/OnOmuz.jpg": "f822d287f09a1d50b1108fad4be1e3e8",
"assets/assets/images/OrtaOmuz.jpeg": "85a0435fe5bca7f7e7ae658d4178fa53",
"assets/assets/images/OrtaSirt.jpg": "1713db862c0c851234f6409656e24859",
"assets/assets/images/PFR.jpg": "3028af50160278df10e6bba7c3139d03",
"assets/assets/images/plank-hareketi.jpg": "86d8f303d86be76e4cfbb36dbb8235d1",
"assets/assets/images/plank.jpg": "86d8f303d86be76e4cfbb36dbb8235d1",
"assets/assets/images/PREACHER-CURLS-2.jpg": "2cf9fc2d649f61991fcdc2abc3cf40a4",
"assets/assets/images/PushUp.jpg": "72d92c906e12a408b67fef60d1224ba4",
"assets/assets/images/rbc.jpg": "7b682db67969ea403c3ed6e1def4080d",
"assets/assets/images/RMF.jpg": "4b55209d7c039a9f6af9062d63288c9c",
"assets/assets/images/rope.jpg": "d70c4a6eba7cf95d02396b00269572de",
"assets/assets/images/rwc.jpg": "4748413e7f08c42862463dfef5aaf076",
"assets/assets/images/SAP.jpg": "41c5c93dc019c2359a8aecff35b9ba38",
"assets/assets/images/sc.jpg": "37fe20fa7afa5f4e29cffc05eda80019",
"assets/assets/images/scbr.jpg": "774fe7f1264505f741862606f7bbe545",
"assets/assets/images/scr.jpg": "35695910960817c6b6e1e1b6056f77d8",
"assets/assets/images/sea.jpg": "a2049163e7c35b0fa6b8b2c7c4337330",
"assets/assets/images/Seat.jpg": "ce73ebe8916f0c68f56bf297be5c2b37",
"assets/assets/images/seated-dumbbell-curl-2018.jpg": "cf20b9e3fec4b0fe2531670d19888551",
"assets/assets/images/Shrug.jpg": "bbaea203c5f7daf06e0c170d12b24731",
"assets/assets/images/Sinav.jpg": "52505ae11a0b4d40c222fe4d82b212cf",
"assets/assets/images/Sirt.jpg": "f36cef464b8c132f8bfc080fe4df3563",
"assets/assets/images/slc.jpg": "e6a659918bcfcd52da3be61cedd00492",
"assets/assets/images/SLLR.jpg": "45cd16e0335d8fe1334ecdef0f6c6d94",
"assets/assets/images/sm.jpg": "ae67aba831498a7389c4614e46f71d38",
"assets/assets/images/SMDP.jpg": "61b639575311b1c6e5d01ecb95581b21",
"assets/assets/images/SMIP.jpg": "74a9b1fb7754701500f7316a5311a39e",
"assets/assets/images/SPL.jpg": "18f07a755f6c463a99f0c7af30cb38f3",
"assets/assets/images/sqt.jpg": "a668d2fbbb0456db6b166e2c4be277b4",
"assets/assets/images/ss.jpg": "2bfa125b81afe002ef4e2d17479f3a25",
"assets/assets/images/stiff.jpg": "2aa5bc8f14caf61f7a7b44dffffa436e",
"assets/assets/images/TBar.jpg": "e2596a86b7e67205726b451ea68f6b17",
"assets/assets/images/td.jpg": "8cef74632c8245f3274240f4327ec452",
"assets/assets/images/tdk.jpg": "8fc6767317d50bf26f14e79ae7e492a7",
"assets/assets/images/TMekik.jpg": "c0fe375e4ddb8f1f2162c5c75f23ba28",
"assets/assets/images/tp.jpg": "95bdd282a11839fd3ae3de1deb365e7c",
"assets/assets/images/trapez.jpg": "95322627fef277c2e0759927d1ccd3c1",
"assets/assets/images/twitter.png": "80c60f92cfb4cc60b8c2ecd67c339f58",
"assets/assets/images/Upr.jpg": "3f84b25fd32a67451599173a9734001c",
"assets/assets/images/UR.jpg": "3f84b25fd32a67451599173a9734001c",
"assets/assets/images/UstGogus.jpg": "296013ccf1fc120541a5e220628e5733",
"assets/assets/images/wc.jpg": "8f051dfb70fdf3a22d467a669e568321",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "54412794d7ca6a6024aa7aae0b8d09ca",
"assets/NOTICES": "d5f34049b67f83b69f58fff77e4bb484",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f603285c711f5c1d52cc4dcacee59536",
"/": "f603285c711f5c1d52cc4dcacee59536",
"main.dart.js": "bec0d3b9bd86c0c83dc0c28f08722b03",
"manifest.json": "da2313f4b78bb2026cad14a8242f2ec1",
"version.json": "f043ad037620926120ee5ad15dcde65b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
