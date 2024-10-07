(()=>{"use strict";function e(e,t,i,r){return new(i||(i=Promise))((function(o,n){function s(e){try{l(r.next(e))}catch(e){n(e)}}function a(e){try{l(r.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var i=t((function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var r,o,n;if(Array.isArray(t)){if((r=t.length)!=i.length)return!1;for(o=r;0!=o--;)if(!e(t[o],i[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((r=(n=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(i,n[o]))return!1;for(o=r;0!=o--;){var s=n[o];if(!e(t[s],i[s]))return!1}return!0}return t!=t&&i!=i}));const r="__googleMapsScriptId";var o;!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(o||(o={}));class n{constructor({apiKey:e,authReferrerPolicy:t,channel:o,client:s,id:a=r,language:l,libraries:h=[],mapIds:c,nonce:d,region:g,retries:p=3,url:u="https://maps.googleapis.com/maps/api/js",version:f}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=o,this.client=s,this.id=a||r,this.language=l,this.libraries=h,this.mapIds=c,this.nonce=d,this.region=g,this.retries=p,this.url=u,this.version=f,n.instance){if(!i(this.options,n.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(n.instance.options)}`);return n.instance}n.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?o.FAILURE:this.done?o.SUCCESS:this.loading?o.LOADING:o.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((i=>{i?t(i.error):e(window.google)}))}))}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var t,i;if(document.getElementById(this.id))return void this.callback();const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach((e=>!r[e]&&delete r[e])),(null===(i=null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)||void 0===i?void 0:i.importLibrary)||(t=>{let i,r,o,n="The Google Maps JavaScript API",s="google",a="importLibrary",l="__ib__",h=document,c=window;c=c[s]||(c[s]={});const d=c.maps||(c.maps={}),g=new Set,p=new URLSearchParams,u=()=>i||(i=new Promise(((a,c)=>e(this,void 0,void 0,(function*(){var e;for(o in yield r=h.createElement("script"),r.id=this.id,p.set("libraries",[...g]+""),t)p.set(o.replace(/[A-Z]/g,(e=>"_"+e[0].toLowerCase())),t[o]);p.set("callback",s+".maps."+l),r.src=this.url+"?"+p,d[l]=a,r.onerror=()=>i=c(Error(n+" could not load.")),r.nonce=this.nonce||(null===(e=h.querySelector("script[nonce]"))||void 0===e?void 0:e.nonce)||"",h.head.append(r)})))));d[a]?console.warn(n+" only loads once. Ignoring:",t):d[a]=(e,...t)=>g.add(e)&&u().then((()=>d[a](e,...t)))})(r);const o=this.libraries.map((e=>this.importLibrary(e)));o.length||o.push(this.importLibrary("core")),Promise.all(o).then((()=>this.callback()),(e=>{const t=new ErrorEvent("error",{error:e});this.loadErrorCallback(t)}))}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setScript())}}}const s=new n({apiKey:"AIzaSyAZMLzHgOMLubSVx_IcPZy4ioquS0Xm_J8",version:"weekly"});let a,l;const h=[],c=[];s.load().then((async()=>{a=new google.maps.Map(document.getElementById("map"),{zoom:13,center:new google.maps.LatLng(40.7224852,-73.9459952)}),l=e=>new Promise(((t,i)=>{(new google.maps.Geocoder).geocode(e,((e,r)=>{"OK"===r?t(e):i(r)}))}));let e=new CustomEvent("mapReady");document.dispatchEvent(e)})),document.addEventListener("markerAdd",(async e=>{let t;if(e.detail.address)t=(await l({address:e.detail.address}))[0].geometry.location,console.log(e.detail.title,t.lat(),t.lng());else{if(!e.detail.lat||!e.detail.long)throw new Error("No location information supplied!");t=new google.maps.LatLng({lat:e.detail.lat,lng:e.detail.long})}const i=new google.maps.Marker({position:t,map:a,title:""!==e.detail.title?e.detail.title:void 0});let r;r=""!==e.detail.description?new google.maps.InfoWindow({content:`<h4>${e.detail.title}</h4><p>${e.detail.description}<p>`}):new google.maps.InfoWindow({content:`<h4>${e.detail.title}</h4><p>${e.detail.lat} ${e.detail.long}</p>`}),i.addListener("click",(()=>{r.open(a,i)})),h.push(),c.push()}))})();