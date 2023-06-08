(()=>{"use strict";var n={462:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"/* styles for burger-menu*/\r\n\r\n.menu_icon {\r\n    position: relative;\r\n    width: 30px;\r\n    height: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu_icon span,\r\n.menu_icon::before,\r\n.menu_icon::after {\r\n    right: 0;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 10%;\r\n    background-color: #107298;\r\n}\r\n\r\n.menu_icon::before,\r\n.menu_icon::after {\r\n    content: '';\r\n\r\n}\r\n\r\n.menu_icon::before {\r\n    top: 0;\r\n}\r\n\r\n.menu_icon::after {\r\n    bottom: 0;\r\n    height: 2px;\r\n}\r\n\r\n.menu_icon span {\r\n    top: 50%;\r\n    transform: scale(1) translate(0px, -50%);\r\n    height: 2px;\r\n}\r\n\r\n/* styles for navigation*/\r\nli {\r\n    list-style: none;\r\n}\r\n\r\n.navigation-link {\r\n    text-decoration: none;\r\n}",""]);const c=a},402:(n,r,e)=>{e.d(r,{Z:()=>b});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(391),s=e(462),p=e(667),l=e.n(p),u=new URL(e(237),e.b),d=new URL(e(812),e.b),f=a()(o());f.i(c.Z),f.i(s.Z);var h=l()(u),m=l()(d);f.push([n.id,"@font-face {\r\n    font-family: 'Roboto black';\r\n    src: url("+h+");\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n\r\nbody {\r\n    background-image: url("+m+");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20px 40px;\r\n}\r\n\r\n.header__logo {\r\n    font-family: 'Roboto black';\r\n    font-size: 45px;\r\n    color: #107298;\r\n}\r\n",""]);const b=f},391:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,".switch {\r\n    position: relative;\r\n    display: flex;\r\n    background-color: #76cced;\r\n    justify-content: space-between;\r\n    width: 205px;\r\n    height: 42px;\r\n    border: none;\r\n    border-radius: 24px;\r\n    margin: 6px 0;\r\n    box-shadow: 13px 13px 27px -5px rgba(14, 118, 198, 0.58);\r\n}\r\n\r\n.switch__round {\r\n    position: absolute;\r\n    width: calc(50% - 10px);\r\n    height: calc(100% - 10px);\r\n    top: 5px;\r\n    left: 5px;\r\n    background-color: #f6f6f6;\r\n    border-radius: 24px;\r\n    transition: .5s;\r\n    cursor: pointer;\r\n}\r\n\r\n.active .switch__round,\r\n.switch.active:nth-child(2):after {\r\n    left: calc(50% + 5px);\r\n}\r\n\r\n.switch:nth-child(2):after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: calc(50% - 10px);\r\n    height: calc(100% - 10px);\r\n    top: 5px;\r\n    left: 5px;\r\n    background-color: red;\r\n    border-radius: 24px;\r\n    transition: 2s;\r\n}\r\n\r\n.switch__round__train, .switch__round__play {\r\n    margin-top: 4px;\r\n    margin-bottom: 8px;\r\n    font-family: 'Roboto black';\r\n    font-size: 23px;\r\n    color: #107298;\r\n}\r\n\r\n.switch__round__train {\r\n    margin-left: 25px;\r\n}\r\n\r\n.switch__round__play {\r\n    margin-right: 25px;\r\n}\r\n\r\n.text__hidden {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],p=t.base?s[0]+t.base:s[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),p=0;p<i.length;p++){var l=e(i[p]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},237:(n,r,e)=>{n.exports=e.p+"35eab922fdbe4b5324d4.ttf"},812:(n,r,e)=>{n.exports=e.p+"7f3e3b01e1ec334b93b6.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),p=e(216),l=e.n(p),u=e(589),d=e.n(u),f=e(402),h={};h.styleTagTransform=d(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=e(462),b={};b.styleTagTransform=d(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),r()(m.Z,b),m.Z&&m.Z.locals&&m.Z.locals,console.log("hello")})()})();