if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const t=e=>i(e,c),r={module:{uri:c},exports:o,require:t};n[c]=Promise.all(s.map((e=>r[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/785jJiaeIw_0tJdv_5VHx/_buildManifest.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/785jJiaeIw_0tJdv_5VHx/_middlewareManifest.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/785jJiaeIw_0tJdv_5VHx/_ssgManifest.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/380-01030831f42587aa.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/main-0477c100c17dc115.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/pages/_app-861d5f8d59c7de46.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/pages/_error-2f883067a14f4c4a.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/pages/index-60eb89ca55321b86.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/_next/static/chunks/webpack-1ac58516059162aa.js",revision:"785jJiaeIw_0tJdv_5VHx"},{url:"/browserconfig.xml",revision:"18fec61cb9578d8690d9f9d0d847c2d7"},{url:"/favicon.svg",revision:"f61dc1f8224dd0799565c40b0aaa36e1"},{url:"/icons/android-icon-144x144.png",revision:"d1a26ca5b741f992bd20f19a54adef69"},{url:"/icons/android-icon-192x192.png",revision:"819f196f474a01aaaffd3babaeaadc4d"},{url:"/icons/android-icon-36x36.png",revision:"db37aea0182896a745f31b87c1db32a7"},{url:"/icons/android-icon-48x48.png",revision:"3407af82baf97a00157f7b5f8e4fe36f"},{url:"/icons/android-icon-72x72.png",revision:"13c597f7daea6ffd2158a7ccbdf48016"},{url:"/icons/android-icon-96x96.png",revision:"578fcce81fa0269457e42425f579dd29"},{url:"/icons/apple-icon-114x114.png",revision:"9fe23508f96a5eb773b66b108f3f3906"},{url:"/icons/apple-icon-120x120.png",revision:"9533b1c952eb04f1a9ccae0d6fe7d4bb"},{url:"/icons/apple-icon-144x144.png",revision:"d1a26ca5b741f992bd20f19a54adef69"},{url:"/icons/apple-icon-152x152.png",revision:"1fd970f5a37b8788394191c34a1a8548"},{url:"/icons/apple-icon-180x180.png",revision:"2e823838193715e6747948fede2418c4"},{url:"/icons/apple-icon-57x57.png",revision:"db036b7d738f3a4a45c96e09a381d4c1"},{url:"/icons/apple-icon-60x60.png",revision:"f93b2e1ad6a67cfce8a1b83b1f24639e"},{url:"/icons/apple-icon-72x72.png",revision:"13c597f7daea6ffd2158a7ccbdf48016"},{url:"/icons/apple-icon-76x76.png",revision:"a045d3a6b782e6966bfa1d5cbcc49a5a"},{url:"/icons/apple-icon-precomposed.png",revision:"76095d2360128581cdac6a7029adfb4d"},{url:"/icons/apple-icon.png",revision:"76095d2360128581cdac6a7029adfb4d"},{url:"/icons/favicon-16x16.png",revision:"472a4ab59c42a12b1ce846228d168e0d"},{url:"/icons/favicon-32x32.png",revision:"74c56083c24c59ce9dfd305eb4510bc0"},{url:"/icons/favicon-96x96.png",revision:"578fcce81fa0269457e42425f579dd29"},{url:"/icons/favicon.ico",revision:"ecf2dbc36f39e771fdcd824d06587e7d"},{url:"/icons/icon-512x512.png",revision:"97597bdf71dac4db9004f0b7dab79aba"},{url:"/icons/ms-icon-144x144.png",revision:"d1a26ca5b741f992bd20f19a54adef69"},{url:"/icons/ms-icon-150x150.png",revision:"f47db16833cc5c4e7dc8ef62f6654f64"},{url:"/icons/ms-icon-310x310.png",revision:"4a7bed334af97a3b2b7079338bf0ad42"},{url:"/icons/ms-icon-70x70.png",revision:"e5d3da5c8dd94d19c54e0c7223caf739"},{url:"/manifest.json",revision:"78d6eb989d3151aed50aaa29c4cd4985"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:i,state:s})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
