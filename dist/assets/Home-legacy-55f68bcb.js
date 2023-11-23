System.register(["./index-legacy-b0a5ae55.js"],(function(e,t){"use strict";var n,a,r,i,o,s,c,l,d,u,p,f,h,g,m,v,y,b,w,I,S,_,k,E,D,C,T,x,A,B;return{setters:[e=>{n=e.u,a=e.r,r=e.a,i=e.o,o=e.b,s=e.c,c=e.w,l=e.d,d=e.e,u=e.f,p=e.I,f=e.g,h=e.h,g=e.i,m=e.j,v=e.k,y=e.l,b=e.m,w=e.n,I=e.p,S=e.q,_=e.s,k=e.t,E=e.v,D=e.x,C=e.y,T=e.z,x=e.A,A=e.B,B=e.C}],execute:function(){var t=document.createElement("style");t.textContent="#container[data-v-4a5435fc]{text-align:center;position:relative;background-color:green}#container strong[data-v-4a5435fc]{font-size:20px;line-height:26px}#container p[data-v-4a5435fc]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-4a5435fc]{text-decoration:none}.content[data-v-4a5435fc]{position:absolute;top:0;left:0;width:100%;height:100vh;padding-top:0;color:#fff;background-color:#000}.logo[data-v-4a5435fc]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100vh;padding-top:0;color:#fff;background-color:#000}.logo-no-code[data-v-4a5435fc]{border:0px dashed #999;border-radius:20px;padding:20px}.panel[data-v-4a5435fc]{width:100%;display:flex;justify-content:end;padding:20px 20px 0 0;z-index:99999}ion-button[data-v-4a5435fc]{margin-right:20px;margin-bottom:30px;--border-radius: 100px;--border-color: #fff;--border-style: solid;--border-width: 5px;--padding-start: 15px;--padding-end: 15px;--padding-top: 15px;--padding-bottom: 15px;--box-shadow: 0 2px 6px 0 rgb(0, 0, 0, .25)}ion-modal[data-v-4a5435fc]{--border-radius: 20px}ion-toolbar[data-v-4a5435fc]{--background: #428CFF}ion-content[data-v-4a5435fc]{--background: #333}ion-item[data-v-4a5435fc]{--background: #666;--border-radius: 50px;--color: #fff}ion-title[data-v-4a5435fc]{--color: #fff}.params[data-v-4a5435fc]{margin:20px}.params-item[data-v-4a5435fc]{margin-bottom:10px;color:#fff;width:50%;padding:10px;vertical-align:top}.readyData[data-v-4a5435fc]{color:#8eb2cf;padding:10px;vertical-align:top}\n",document.head.appendChild(t);const N=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++a)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},O={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const t=e[r],i=r+1<e.length,o=i?e[r+1]:0,s=r+2<e.length,c=s?e[r+2]:0,l=t>>2,d=(3&t)<<4|o>>4;let u=(15&o)<<2|c>>6,p=63&c;s||(p=64,i||(u=64)),a.push(n[l],n[d],n[u],n[p])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[a++]=String.fromCharCode(55296+(i>>10)),t[a++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[a++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],i=r<e.length?n[e.charAt(r)]:0;++r;const o=r<e.length?n[e.charAt(r)]:64;++r;const s=r<e.length?n[e.charAt(r)]:64;if(++r,null==t||null==i||null==o||null==s)throw new L;const c=t<<2|i>>4;if(a.push(c),64!==o){const e=i<<4&240|o>>2;if(a.push(e),64!==s){const e=o<<6&192|s;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class L extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M=function(e){return function(e){const t=N(e);return O.encodeByteArray(t,!0)}(e).replace(/\./g,"")},j=()=>
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
             * @license
             * Copyright 2022 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */().__FIREBASE_DEFAULTS__,P=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&function(e){try{return O.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(e[1]);return t&&JSON.parse(t)},R=()=>{try{return j()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||P()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},$=()=>{var e;return null===(e=R())||void 0===e?void 0:e.config};
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class H{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function F(){try{return"object"==typeof indexedDB}catch(e){return!1}}function V(){return new Promise(((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class K extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(z,((e,n)=>{const a=t[n];return null!=a?String(a):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${a}).`;return new K(a,o,n)}}const z=/\{\$([^}]+)}/g;function U(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const n=e[r],i=t[r];if(q(n)&&q(i)){if(!U(n,i))return!1}else if(n!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function q(e){return null!==e&&"object"==typeof e}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function G(e){return e&&e._delegate?e._delegate:e}class J{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Q="[DEFAULT]";
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class Y{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new H;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),a=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(a)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e))try{this.getOrInitializeService({instanceIdentifier:Q})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:a});n.resolve(e)}catch(t){}}}}clearInstance(e=Q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Q){return this.instances.has(e)}getOptions(e=Q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,i]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(r)&&i.resolve(a);return a}onInit(e,t){var n;const a=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(a,r);const i=this.instances.get(a);return i&&e(i,a),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(a){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===Q?void 0:a),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}var a;return n||null}normalizeInstanceIdentifier(e=Q){return this.component?this.component.multipleInstances?e:Q:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Z{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Y(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var X;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(X||(X={}));const ee={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},te=X.INFO,ne={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},ae=(e,t,...n)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),r=ne[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${a}]  ${e.name}:`,...n)},re=(e,t)=>t.some((t=>e instanceof t));let ie,oe;const se=new WeakMap,ce=new WeakMap,le=new WeakMap,de=new WeakMap,ue=new WeakMap;let pe={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ce.get(e);if("objectStoreNames"===t)return e.objectStoreNames||le.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(oe||(oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(me(this),t),ge(se.get(this))}:function(...t){return ge(e.apply(me(this),t))}:function(t,...n){const a=e.call(me(this),t,...n);return le.set(a,t.sort?t.sort():[t]),ge(a)}}function he(e){return"function"==typeof e?fe(e):(e instanceof IDBTransaction&&function(e){if(ce.has(e))return;const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));ce.set(e,t)}(e),re(e,ie||(ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,pe):e)}function ge(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(ge(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&se.set(t,e)})).catch((()=>{})),ue.set(t,e),t}(e);if(de.has(e))return de.get(e);const t=he(e);return t!==e&&(de.set(e,t),ue.set(t,e)),t}const me=e=>ue.get(e),ve=["get","getKey","getAll","getAllKeys","count"],ye=["put","add","delete","clear"],be=new Map;function we(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(be.get(t))return be.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=ye.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!ve.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return be.set(t,i),i}var Ie;Ie=pe,pe={...Ie,get:(e,t,n)=>we(e,t)||Ie.get(e,t,n),has:(e,t)=>!!we(e,t)||Ie.has(e,t)};
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Se{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const _e="@firebase/app",ke="0.9.23",Ee=new class{constructor(e){this.name=e,this._logLevel=te,this._logHandler=ae,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ee[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}("@firebase/app"),De="[DEFAULT]",Ce={[_e]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Te=new Map,xe=new Map;function Ae(e,t){try{e.container.addComponent(t)}catch(n){Ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Be(e){const t=e.name;if(xe.has(t))return Ee.debug(`There were multiple attempts to register component ${t}.`),!1;xe.set(t,e);for(const n of Te.values())Ae(n,e);return!0}function Ne(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Oe=new W("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
class Le{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new J("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}function Me(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const a=Object.assign({name:De,automaticDataCollectionEnabled:!1},t),r=a.name;if("string"!=typeof r||!r)throw Oe.create("bad-app-name",{appName:String(r)});if(n||(n=$()),!n)throw Oe.create("no-options");const i=Te.get(r);if(i){if(U(n,i.options)&&U(a,i.config))return i;throw Oe.create("duplicate-app",{appName:r})}const o=new Z(r);for(const c of xe.values())o.addComponent(c);const s=new Le(n,a,o);return Te.set(r,s),s}function je(e,t,n){var a;let r=null!==(a=Ce[e])&&void 0!==a?a:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ee.warn(e.join(" "))}Be(new J(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Pe="firebase-heartbeat-database",Re=1,$e="firebase-heartbeat-store";let He=null;function Fe(){return He||(He=function(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),s=ge(o);return a&&o.addEventListener("upgradeneeded",(e=>{a(ge(o.result),e.oldVersion,e.newVersion,ge(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}(Pe,Re,{upgrade:(e,t)=>{0===t&&e.createObjectStore($e)}}).catch((e=>{throw Oe.create("idb-open",{originalErrorMessage:e.message})}))),He}async function Ve(e,t){try{const n=(await Fe()).transaction($e,"readwrite"),a=n.objectStore($e);await a.put(t,Ke(e)),await n.done}catch(n){if(n instanceof K)Ee.warn(n.message);else{const e=Oe.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});Ee.warn(e.message)}}}function Ke(e){return`${e.name}!${e.options.appId}`}
/**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */class We{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e;const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=ze();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ze(),{heartbeatsToSend:n,unsentEntries:a}=function(e,t=1024){const n=[];let a=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),qe(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),qe(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}(this._heartbeatsCache.heartbeats),r=M(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ze(){return(new Date).toISOString().substring(0,10)}class Ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!F()&&V().then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(e){try{const t=await Fe();return await t.transaction($e).objectStore($e).get(Ke(e))}catch(t){if(t instanceof K)Ee.warn(t.message);else{const e=Oe.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ee.warn(e.message)}}}(this.app)||{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ve(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function qe(e){return M(JSON.stringify({version:2,heartbeats:e})).length}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */var Ge;Ge="",Be(new J("platform-logger",(e=>new Se(e)),"PRIVATE")),Be(new J("heartbeat",(e=>new We(e)),"PRIVATE")),je(_e,ke,Ge),je(_e,ke,"esm2017"),je("fire-js",""),
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
je("firebase","10.6.0","app");const Je=(e,t)=>t.some((t=>e instanceof t));let Qe,Ye;const Ze=new WeakMap,Xe=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap;let at={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||et.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ye||(Ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(st(this),t),ot(Ze.get(this))}:function(...t){return ot(e.apply(st(this),t))}:function(t,...n){const a=e.call(st(this),t,...n);return et.set(a,t.sort?t.sort():[t]),ot(a)}}function it(e){return"function"==typeof e?rt(e):(e instanceof IDBTransaction&&function(e){if(Xe.has(e))return;const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));Xe.set(e,t)}(e),Je(e,Qe||(Qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,at):e)}function ot(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(ot(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Ze.set(t,e)})).catch((()=>{})),nt.set(t,e),t}(e);if(tt.has(e))return tt.get(e);const t=it(e);return t!==e&&(tt.set(e,t),nt.set(t,e)),t}const st=e=>nt.get(e),ct=["get","getKey","getAll","getAllKeys","count"],lt=["put","add","delete","clear"],dt=new Map;function ut(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(dt.get(t))return dt.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=lt.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!ct.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return dt.set(t,i),i}!function(e){at=e(at)}((e=>({...e,get:(t,n,a)=>ut(t,n)||e.get(t,n,a),has:(t,n)=>!!ut(t,n)||e.has(t,n)})));const pt="@firebase/installations",ft="0.6.4",ht=1e4,gt=`w:${ft}`,mt="FIS_v2",vt="https://firebaseinstallations.googleapis.com/v1",yt=36e5,bt=new W("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function wt(e){return e instanceof K&&e.code.includes("request-failed")}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function It({projectId:e}){return`${vt}/projects/${e}/installations`}function St(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function _t(e,t){const n=(await t.json()).error;return bt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function kt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Et(e,{refreshToken:t}){const n=kt(e);return n.append("Authorization",function(e){return`${mt} ${e}`}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t)),n}async function Dt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function Ct(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Tt=/^[cdef][\w-]{21}$/,xt="";function At(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e);return Tt.test(t)?t:xt}catch(e){return xt}}function Bt(e){return`${e.appName}!${e.appId}`}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Nt=new Map;function Ot(e,t){const n=Bt(e);Lt(n,t),function(e,t){const n=(!Mt&&"BroadcastChannel"in self&&(Mt=new BroadcastChannel("[Firebase] FID Change"),Mt.onmessage=e=>{Lt(e.data.key,e.data.fid)}),Mt);n&&n.postMessage({key:e,fid:t}),0===Nt.size&&Mt&&(Mt.close(),Mt=null)}(n,t)}function Lt(e,t){const n=Nt.get(e);if(n)for(const a of n)a(t)}let Mt=null;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const jt="firebase-installations-database",Pt=1,Rt="firebase-installations-store";let $t=null;function Ht(){return $t||($t=function(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),s=ot(o);return a&&o.addEventListener("upgradeneeded",(e=>{a(ot(o.result),e.oldVersion,e.newVersion,ot(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}(jt,Pt,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Rt)}})),$t}async function Ft(e,t){const n=Bt(e),a=(await Ht()).transaction(Rt,"readwrite"),r=a.objectStore(Rt),i=await r.get(n);return await r.put(t,n),await a.done,i&&i.fid===t.fid||Ot(e,t.fid),t}async function Vt(e){const t=Bt(e),n=(await Ht()).transaction(Rt,"readwrite");await n.objectStore(Rt).delete(t),await n.done}async function Kt(e,t){const n=Bt(e),a=(await Ht()).transaction(Rt,"readwrite"),r=a.objectStore(Rt),i=await r.get(n),o=t(i);return void 0===o?await r.delete(n):await r.put(o,n),await a.done,!o||i&&i.fid===o.fid||Ot(e,o.fid),o}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function Wt(e){let t;const n=await Kt(e.appConfig,(n=>{const a=function(e){const t=e||{fid:At(),registrationStatus:0};return qt(t)}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(bt.create("app-offline"))};const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=It(e),r=kt(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:mt,appId:e.appId,sdkVersion:gt},s={method:"POST",headers:r,body:JSON.stringify(o)},c=await Dt((()=>fetch(a,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:St(e.authToken)}}throw await _t("Create Installation",c)}(e,t);return Ft(e.appConfig,n)}catch(n){throw wt(n)&&409===n.customData.serverCode?await Vt(e.appConfig):await Ft(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:zt(e)}:{installationEntry:t}}(e,a);return t=r.registrationPromise,r.installationEntry}));return n.fid===xt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function zt(e){let t=await Ut(e.appConfig);for(;1===t.registrationStatus;)await Ct(100),t=await Ut(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Wt(e);return n||t}return t}function Ut(e){return Kt(e,(e=>{if(!e)throw bt.create("installation-not-found");return qt(e)}))}function qt(e){return 1===(t=e).registrationStatus&&t.registrationTime+ht<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}async function Gt({appConfig:e,heartbeatServiceProvider:t},n){const a=function(e,{fid:t}){return`${It(e)}/${t}/authTokens:generate`}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(e,n),r=Et(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:gt,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(o)},c=await Dt((()=>fetch(a,s)));if(c.ok)return St(await c.json());throw await _t("Generate Auth Token",c)}async function Jt(e,t=!1){let n;const a=await Kt(e.appConfig,(a=>{if(!Yt(a))throw bt.create("not-registered");const r=a.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yt}(e)}(r))return a;if(1===r.requestStatus)return n=async function(e,t){let n=await Qt(e.appConfig);for(;1===n.authToken.requestStatus;)await Ct(100),n=await Qt(e.appConfig);const a=n.authToken;return 0===a.requestStatus?Jt(e,t):a}(e,t),a;{if(!navigator.onLine)throw bt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return n=async function(e,t){try{const n=await Gt(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await Ft(e.appConfig,a),n}catch(n){if(!wt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ft(e.appConfig,n)}else await Vt(e.appConfig);throw n}}(e,t),t}}));return n?await n:a.authToken}function Qt(e){return Kt(e,(e=>{if(!Yt(e))throw bt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+ht<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */}))}function Yt(e){return void 0!==e&&2===e.registrationStatus}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
async function Zt(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await Wt(e);t&&await t}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(n),(await Jt(n,t)).token}function Xt(e){return bt.create("missing-app-config-values",{valueName:e})}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const en="installations",tn=e=>{const t=Ne(e.getProvider("app").getImmediate(),en).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:a}=await Wt(t);return a?a.catch(console.error):Jt(t).catch(console.error),n.fid}(t),getToken:e=>Zt(t,e)}};Be(new J(en,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Xt("App Configuration");if(!e.name)throw Xt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Ne(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Be(new J("installations-internal",tn,"PRIVATE")),je(pt,ft),je(pt,ft,"esm2017");const nn=(e,t)=>t.some((t=>e instanceof t));let an,rn;const on=new WeakMap,sn=new WeakMap,cn=new WeakMap,ln=new WeakMap,dn=new WeakMap;let un={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return sn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||cn.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function pn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rn||(rn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(gn(this),t),hn(on.get(this))}:function(...t){return hn(e.apply(gn(this),t))}:function(t,...n){const a=e.call(gn(this),t,...n);return cn.set(a,t.sort?t.sort():[t]),hn(a)}}function fn(e){return"function"==typeof e?pn(e):(e instanceof IDBTransaction&&function(e){if(sn.has(e))return;const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),a()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));sn.set(e,t)}(e),nn(e,an||(an=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,un):e)}function hn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(hn(e.result)),a()},i=()=>{n(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&on.set(t,e)})).catch((()=>{})),dn.set(t,e),t}(e);if(ln.has(e))return ln.get(e);const t=fn(e);return t!==e&&(ln.set(e,t),dn.set(t,e)),t}const gn=e=>dn.get(e);function mn(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),s=hn(o);return a&&o.addEventListener("upgradeneeded",(e=>{a(hn(o.result),e.oldVersion,e.newVersion,hn(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}function vn(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(()=>t())),hn(n).then((()=>{}))}const yn=["get","getKey","getAll","getAllKeys","count"],bn=["put","add","delete","clear"],wn=new Map;function In(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(wn.get(t))return wn.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=bn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!r&&!yn.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return a&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return wn.set(t,i),i}!function(e){un=e(un)}((e=>({...e,get:(t,n,a)=>In(t,n)||e.get(t,n,a),has:(t,n)=>!!In(t,n)||e.has(t,n)})));
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
const Sn="/firebase-messaging-sw.js",_n="/firebase-cloud-messaging-push-scope",kn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",En="https://fcmregistrations.googleapis.com/v1",Dn="google.c.a.c_id",Cn="google.c.a.c_l",Tn="google.c.a.ts";var xn,An;
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function Bn(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Nn(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let r=0;r<n.length;++r)a[r]=n.charCodeAt(r);return a}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(xn||(xn={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(An||(An={}));const On="fcm_token_details_db",Ln=5,Mn="fcm_token_object_Store",jn="firebase-messaging-database",Pn=1,Rn="firebase-messaging-store";let $n=null;function Hn(){return $n||($n=mn(jn,Pn,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Rn)}})),$n}async function Fn(e){const t=Kn(e),n=await Hn(),a=await n.transaction(Rn).objectStore(Rn).get(t);if(a)return a;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map((e=>e.name));if(!e.includes(On))return null}let t=null;return(await mn(On,Ln,{upgrade:async(n,a,r,i)=>{var o;if(a<2)return;if(!n.objectStoreNames.contains(Mn))return;const s=i.objectStore(Mn),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c)if(2===a){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(o=e.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:Bn(e.vapidKey)}}}else if(3===a){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Bn(e.auth),p256dh:Bn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Bn(e.vapidKey)}}}else if(4===a){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Bn(e.auth),p256dh:Bn(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Bn(e.vapidKey)}}}}})).close(),await vn(On),await vn("fcm_vapid_details_db"),await vn("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t)?t:null}(e.appConfig.senderId);if(t)return await Vn(e,t),t}}async function Vn(e,t){const n=Kn(e),a=(await Hn()).transaction(Rn,"readwrite");return await a.objectStore(Rn).put(t,n),await a.done,t}function Kn({appConfig:e}){return e.appId}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Wn=new W("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function zn(e,t){const n={method:"DELETE",headers:await qn(e)};try{const a=await fetch(`${Un(e.appConfig)}/${t}`,n),r=await a.json();if(r.error){const e=r.error.message;throw Wn.create("token-unsubscribe-failed",{errorInfo:e})}}catch(a){throw Wn.create("token-unsubscribe-failed",{errorInfo:null==a?void 0:a.toString()})}}function Un({projectId:e}){return`${En}/projects/${e}/registrations`}async function qn({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Gn({p256dh:e,auth:t,endpoint:n,vapidKey:a}){const r={web:{endpoint:n,auth:t,p256dh:e}};return a!==kn&&(r.web.applicationPubKey=a),r}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */const Jn=6048e5;async function Qn(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Nn(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Bn(t.getKey("auth")),p256dh:Bn(t.getKey("p256dh"))},a=await Fn(e.firebaseDependencies);if(a){if(function(e,t){const n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,r=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&a&&r&&i}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(a.subscriptionOptions,n))return Date.now()>=a.createTime+Jn?async function(e,t){try{const n=await async function(e,t){const n=await qn(e),a=Gn(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(a)};let i;try{const n=await fetch(`${Un(e.appConfig)}/${t.token}`,r);i=await n.json()}catch(o){throw Wn.create("token-update-failed",{errorInfo:null==o?void 0:o.toString()})}if(i.error){const e=i.error.message;throw Wn.create("token-update-failed",{errorInfo:e})}if(!i.token)throw Wn.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Vn(e.firebaseDependencies,a),n}catch(n){throw await async function(e){const t=await Fn(e.firebaseDependencies);t&&(await zn(e.firebaseDependencies,t.token),await async function(e){const t=Kn(e),n=(await Hn()).transaction(Rn,"readwrite");await n.objectStore(Rn).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}(e),n}}(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await zn(e.firebaseDependencies,a.token)}catch(r){console.warn(r)}return Yn(e.firebaseDependencies,n)}return Yn(e.firebaseDependencies,n)}async function Yn(e,t){const n=
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */await async function(e,t){const n=await qn(e),a=Gn(t),r={method:"POST",headers:n,body:JSON.stringify(a)};let i;try{const t=await fetch(Un(e.appConfig),r);i=await t.json()}catch(o){throw Wn.create("token-subscribe-failed",{errorInfo:null==o?void 0:o.toString()})}if(i.error){const e=i.error.message;throw Wn.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw Wn.create("token-subscribe-no-token");return i.token}(e,t),a={token:n,createTime:Date.now(),subscriptionOptions:t};return await Vn(e,a),a.token}function Zn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const a=t.notification.body;a&&(e.notification.body=a);const r=t.notification.image;r&&(e.notification.image=r);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,a,r,i,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(r=null===(a=t.fcmOptions)||void 0===a?void 0:a.link)&&void 0!==r?r:null===(i=t.notification)||void 0===i?void 0:i.click_action;s&&(e.fcmOptions.link=s);const c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t,e),t}function Xn(e,t){const n=[];for(let a=0;a<e.length;a++)n.push(e.charAt(a)),a<t.length&&n.push(t.charAt(a));return n.join("")}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */function ea(e){return Wn.create("missing-app-config-values",{valueName:e})}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
Xn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),Xn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class ta{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=function(e){if(!e||!e.options)throw ea("App Configuration Object");if(!e.name)throw ea("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const a of t)if(!n[a])throw ea(a);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
async function na(e,t){if(t||e.swRegistration||await async function(e){try{e.swRegistration=await navigator.serviceWorker.register(Sn,{scope:_n}),e.swRegistration.update().catch((()=>{}))}catch(t){throw Wn.create("failed-service-worker-registration",{browserErrorMessage:null==t?void 0:t.message})}}(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw Wn.create("invalid-sw-registration");e.swRegistration=t}}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
async function aa(e,t){if(!navigator)throw Wn.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw Wn.create("permission-blocked");return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=kn)}(e,null==t?void 0:t.vapidKey),await na(e,null==t?void 0:t.serviceWorkerRegistration),Qn(e)}
/**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */async function ra(e,t,n){const a=function(e){switch(e){case An.NOTIFICATION_CLICKED:return"notification_open";case An.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[Dn],message_name:n[Cn],message_time:n[Tn],message_device_time:Math.floor(Date.now()/1e3)})}async function ia(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===An.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(Zn(n)):e.onMessageHandler.next(Zn(n)));const a=n.data;var r;"object"==typeof(r=a)&&r&&Dn in r&&"1"===a["google.c.a.e"]&&await ra(e,n.messageType,a)}const oa="@firebase/messaging",sa="0.12.4",ca=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>aa(t,e)}};
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
async function la(){try{await V()}catch(e){return!1}return"undefined"!=typeof window&&F()&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
/**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
function da(e=function(e=De){const t=Te.get(e);if(!t&&e===De&&$())return Me();if(!t)throw Oe.create("no-app",{appName:e});return t}()){return la().then((e=>{if(!e)throw Wn.create("unsupported-browser")}),(e=>{throw Wn.create("indexed-db-unsupported")})),Ne(G(e),"messaging").getImmediate()}function ua(e,t){return function(e,t){if(!navigator)throw Wn.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=G(e),t)}Be(new J("messaging",(e=>{const t=new ta(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>ia(t,e))),t}),"PUBLIC")),Be(new J("messaging-internal",ca,"PRIVATE")),je(oa,sa),je(oa,sa,"esm2017");const pa=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n},fa=e=>(A("data-v-4a5435fc"),e=e(),B(),e),ha={class:"content"},ga=["src"],ma={key:0,class:"logo"},va=fa((()=>u("div",{style:{"font-size":"32pt","margin-bottom":"10px"}},"Display24",-1))),ya=fa((()=>u("div",{class:"logo-no-code"},[u("div",{style:{"font-size":"14pt",color:"#fff"}},"Необходимо установить параметры дисплея")],-1))),ba={key:1,class:"panel"},wa=fa((()=>u("br",null,null,-1))),Ia={style:{"font-size":"80%"}},Sa=fa((()=>u("br",null,null,-1))),_a={style:{width:"100%",display:"flex","align-items":"center","justify-content":"space-between"}},ka=fa((()=>u("div",{style:{color:"#fff"}},[u("b",null,"Проверить код дисплея: ")],-1))),Ea={class:"params"},Da={width:"100%"},Ca=fa((()=>u("td",{class:"params-item"},"Партнер:",-1))),Ta={class:"readyData"},xa=fa((()=>u("td",{class:"params-item"},"Код дисплея:",-1))),Aa={class:"readyData"},Ba=fa((()=>u("td",{class:"params-item"},"Наименование дисплея:",-1))),Na={class:"readyData"},Oa=fa((()=>u("td",{class:"params-item"},"Описание дисплея:",-1))),La={class:"readyData"},Ma=fa((()=>u("td",{class:"params-item"},"Группа дисплея:",-1))),ja={class:"readyData"},Pa=fa((()=>u("td",{class:"params-item"},"Макет:",-1))),Ra={class:"readyData"};e("default",pa({__name:"Home",setup(e){n();const t=a(0),A=a("production"),B="https://dev116.ru";var N=r({partnerId:null,partnerName:null,partnerLogo:null,displayId:null,displayCode:null,displayCodeInput:null,displayName:null,displayDescription:null,displayGroup:null,displayToken:null,layoutName:null,osVersion:null,dataReady:!1});const O=da(Me({apiKey:"AIzaSyBfTrlk1mDUHw124QEIPVRvk8o8aW8wTpM",projectId:"display24-3c078",messagingSenderId:"121461843745",appId:"1:121461843745:android:d2996ed490c740b6a78060"}));ua(O,(e=>{console.log("Message received. ",e)})),console.log("Requesting permission..."),Notification.requestPermission().then((e=>{"granted"===e&&console.log("Notification permission granted.")}));const L=a(""),M=a(""),j=a(""),P=a(""),R=a(""),$=a(""),H=a(""),F=a(""),V=a(!1),K=a(!1),W=a(""),z=()=>{t.value++},U=()=>{V.value=!0,setTimeout((()=>{const e=localStorage.getItem("settings",null);N=e?JSON.parse(localStorage.getItem("settings"),null):{},j.value.innerText=N.displayCode?N.displayCode:"-",P.value.innerText=N.partnerName?N.partnerName:"-",R.value.innerText=N.displayName?N.displayName:"-",$.value.innerText=N.displayDescription?N.displayDescription:"-",H.value.innerText=N.displayGroup?N.displayGroup:"-",F.value.innerText=N.layoutName?N.layoutName:"-"}),1e3)},q=e=>{P.value.innerText="-",R.value.innerText="-",$.value.innerText="-",H.value.innerText="-",F.value.innerText="-",M.value.$el.style.borderRadius="50px",M.value.$el.style.border="3px solid orange",W.value.innerText="Ошибка: "+e},J=e=>{N.displayCodeInput=e.target.value,L.value.innerText=e.target.value},Q=e=>{e.clientY<=100?(K.value=!0,setTimeout((()=>{N.displayCode||(K.value=!1)}),1e4)):K.value=!1},Y=async e=>{if(M.value.$el.style.border="0px solid transparent",W.value.innerText="",!e||e&&e.length<10)return M.value.$el.style.borderRadius="50px",M.value.$el.style.border="3px solid orange",void(W.value.innerText="Указать код дисплея (10 символов)");var t=null;N.dataReady=!1;try{const n=await fetch(B+"/api/v1/device/"+e,{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)throw new Error("Request failed");t=await n.json()}catch(n){return q(n),void(N.dataReady=!1)}if(t&&t.data&&0==t.data.length)q("Код не существует");else if(t&&t.code&&200==t.code&&t.data.length>0){const e=t.data[0];N.partnerId=e.partner_id,N.partnerName=e.partner_name,N.partnerLogo=e.partner_logo&&e.partner_logo.filename?e.partner_logo.filename:null,N.displayId=e.display_id,N.displayCode=e.display_code,N.displayName=e.display_name,N.displayDescription=e.display_description,N.displayGroup=e.display_group_name,N.displayToken=e.display_token,N.layoutName=e.layout_name,P.value.innerText=N.partnerName,j.value.innerText=N.displayCode,R.value.innerText=N.displayName,$.value.innerText=N.displayDescription,H.value.innerText=N.displayGroup,F.value.innerText=N.layoutName,N.dataReady=!0,M.value.$el.style.borderRadius="50px",M.value.$el.style.border="3px solid green"}else q("Ошибка чтения настроек")};return i((()=>{(()=>{const e=localStorage.getItem("settings",null);N=e?JSON.parse(localStorage.getItem("settings"),null):{}})(),N.displayCode||(K.value=!0),async function(e,t){return aa(e=G(e),t)}(O,{vapidKey:"BE166Z44WSUJE7JvuFObi-2UdDJqyDWt2IQkN7yQ9lfFoAQDRc2A-Qb4Ra8AjHPouPoP4IZZp_993E5fL5Bvehg"}).then((e=>{e?(async e=>{const t=N.displayId;console.log("TOKEN: ",e);const n=new URLSearchParams;n.append("device_id",t),n.append("token",e);try{const e=await fetch(B+"/api/v1/device/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n.toString()});if(!e.ok)throw new Error("Send Registration failed");const t=await e.json();console.log("API REG RESULT: ",t)}catch(a){return void(N.dataReady=!1)}})(e):console.log("No registration token available. Request permission to generate one.")})).catch((e=>{console.log("An error occurred while retrieving token. ",e)}))})),(e,n)=>(o(),s(l(x),null,{default:c((()=>[d(l(p),{fullscreen:!0,onClick:n[4]||(n[4]=e=>T(N)?N.value=!l(N):N=!l(N))},{default:c((()=>[u("div",{id:"container",onMouseover:Q},[u("div",ha,[d(l(p),null,{default:c((()=>[l(N).dataReady?(o(),f("iframe",{src:"https://display24.ru/device?code="+l(N).displayCode,style:{width:"100%",height:"100%"},scrolling:"yes",key:t.value},"\n            ",8,ga)):h("",!0)])),_:1})]),l(N).dataReady?h("",!0):(o(),f("div",ma,[d(l(g),{src:N.partnerLogo&&N.partnerLogo.length?"https://storage.yandexcloud.net/d24/partners/"+N.partnerId+"/"+N.partnerLogo:"img/logo_512.png",alt:l(N).partnerName,style:{width:"250px","margin-bottom":"30px"}},null,8,["src","alt"]),va,ya])),K.value||!l(N).dataReady?(o(),f("div",ba,[d(l(m),{onClick:v(z,["prevent"]),shape:"round",fill:"solid",color:"primary"},{default:c((()=>[d(l(y),{slot:"icon-only",icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z'/></svg>")},null,8,["icon"])])),_:1},8,["onClick"]),d(l(m),{onClick:v(U,["prevent"]),shape:"round",fill:"solid",color:"primary"},{default:c((()=>[d(l(y),{slot:"icon-only",icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>")},null,8,["icon"])])),_:1},8,["onClick"])])):h("",!0),d(l(b),{"is-open":V.value},{default:c((()=>[d(l(w),null,{default:c((()=>[d(l(I),null,{default:c((()=>[d(l(S),null,{default:c((()=>[_("Настройки приложения"),wa,_(),u("span",Ia,"Режим: ["+k(A.value)+"]",1)])),_:1}),Sa,d(l(E),{slot:"end"},{default:c((()=>[d(l(m),{onClick:n[0]||(n[0]=v((e=>(localStorage.removeItem("settings"),N.partnerId=null,N.partnerName=null,N.partnerLogo=null,N.displayId=null,N.displayCode=null,N.displayCodeInput=null,N.displayName=null,N.displayDescription=null,N.displayGroup=null,N.displayToken=null,N.layoutName=null,N.dataReady=!1,P.value.innerText="-",j.value.innerText="-",R.value.innerText="-",$.value.innerText="-",H.value.innerText="-",F.value.innerText="-",void(W.value.innerText=""))),["prevent"])),shape:"round",fill:"solid",color:"primary",style:{margin:"20px 10px 20px 20px"}},{default:c((()=>[d(l(y),{slot:"icon-only",icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M80 112h352' class='ionicon-stroke-width'/><path d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>"),style:{margin:"15px 0 15px 0"}},null,8,["icon"])])),_:1}),d(l(m),{onClick:n[1]||(n[1]=v((e=>(N.dataReady&&localStorage.setItem("settings",JSON.stringify(N)),void(V.value=!1))),["prevent"])),shape:"round",fill:"solid",color:"primary",style:{margin:"20px 10px 20px 10px"}},{default:c((()=>[d(l(y),{slot:"icon-only",icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>"),style:{margin:"15px 0 15px 0"}},null,8,["icon"])])),_:1}),d(l(m),{onClick:n[2]||(n[2]=v((e=>{V.value=!1}),["prevent"])),shape:"round",fill:"solid",color:"primary",style:{margin:"20px 20px 20px 10px"}},{default:c((()=>[d(l(y),{slot:"icon-only",icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M368 368L144 144M368 144L144 368' class='ionicon-fill-none ionicon-stroke-width'/></svg>"),style:{margin:"15px 0 15px 0"}},null,8,["icon"])])),_:1})])),_:1})])),_:1})])),_:1}),d(l(p),{class:"ion-padding"},{default:c((()=>[u("div",_a,[ka,d(l(D),{ref_key:"displayCodeBorder",ref:M},{default:c((()=>[d(l(C),{ref_key:"displayCodeInput",ref:L,value:l(N).displayCode,onInput:J,placeholder:""},null,8,["value"])])),_:1},512),d(l(m),{onClick:n[3]||(n[3]=v((e=>(()=>{const e=L.value&&L.value.$el&&L.value.$el.value?L.value.$el.value:"";Y(e)})()),["prevent"])),shape:"round",fill:"solid",color:"primary",style:{margin:"0px"}},{default:c((()=>[d(l(y),{slot:"icon-only",icon:l("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>")},null,8,["icon"])])),_:1})]),u("div",Ea,[u("table",Da,[u("tr",null,[Ca,u("td",Ta,[u("span",{ref_key:"partnerName",ref:P},k(l(N).partnerName),513)])]),u("tr",null,[xa,u("td",Aa,[u("span",{ref_key:"displayCode",ref:j},k(l(N).displayCode),513)])]),u("tr",null,[Ba,u("td",Na,[u("span",{ref_key:"displayName",ref:R},k(l(N).displayName),513)])]),u("tr",null,[Oa,u("td",La,[u("span",{ref_key:"displayDescription",ref:$},k(l(N).displayDescription),513)])]),u("tr",null,[Ma,u("td",ja,[u("span",{ref_key:"displayGroup",ref:H},k(l(N).displayGroup),513)])]),u("tr",null,[Pa,u("td",Ra,[u("span",{ref_key:"layoutName",ref:F},k(l(N).layoutName),513)])])])]),u("div",{ref_key:"error",ref:W,style:{color:"orange",width:"100%","text-align":"center","margin-top":"20px"}},null,512)])),_:1})])),_:1},8,["is-open"])],32)])),_:1})])),_:1}))}},[["__scopeId","data-v-4a5435fc"]]))}}}));
