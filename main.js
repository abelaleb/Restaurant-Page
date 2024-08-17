(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),c=n.n(s),d=new URL(n(65),n.b),l=new URL(n(54),n.b),p=new URL(n(506),n.b),u=new URL(n(722),n.b),m=i()(a()),f=c()(d),h=c()(l),g=c()(p),y=c()(u);m.push([e.id,`* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  line-height: 1.5;\n}\n:root {\n  --clr-1: #ffffff;\n  --clr-2: #d7eefa;\n  --clr-3: #91a0a8;\n  --clr-4: #6e7980;\n  --clr-5: #afc2cc;\n  --clr-6: #4b5257;\n  --border-radius: 8px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n}\n@font-face {\n  font-family: "HermeneusOne";\n  src: url(${f});\n}\n@font-face {\n  font-family: "Lemon";\n  src: url(${h});\n}\n@font-face {\n  font-family: "Lora";\n  src: url(${g});\n}\n@font-face {\n  font-family: Playfair;\n  src: url(${y});\n}\nbody {\n  font-family: "Lora";\n  display: grid;\n}\nnav {\n  font-family: "Playfair";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0.5rem;\n  gap: 3rem;\n  height: 40px;\n  background-color: var(--clr-1);\n}\nimg {\n  width: 50%;\n}\n#content {\n  min-height: 100vh;\n  color: var(--clr-6);\n}\np {\n}\nbutton {\n  background-color: var(--clr-2);\n  border-width: 0;\n  box-shadow: rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0;\n  color: var(--clr-6);\n  cursor: pointer;\n  display: inline-block;\n  font-family: "Playfair";\n  font-size: 1.3rem;\n  height: 2rem;\n  padding: 0 25px;\n  transition: all 200ms;\n}\nbutton:hover {\n  background-color: var(--clr-5);\n  transform: scale(1.05);\n}\n\n.footer {\n  font-size: 1.1rem;\n  background-color: var(--clr-2);\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  padding: 0.3rem;\n}\n\n.fa-github {\n  font-size: 24px;\n  color: var(--clr-6);\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n`,""]);const b=m},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=a(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},65:(e,t,n)=>{e.exports=n.p+"02666af38bab89092fbc.otf"},54:(e,t,n)=>{e.exports=n.p+"388ce7e72e1277b306d5.ttf"},506:(e,t,n)=>{e.exports=n.p+"c27317484b1d2ac06532.ttf"},722:(e,t,n)=>{e.exports=n.p+"bf46a6bcddc9999a295e.ttf"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;const r=n.p+"7d3728e7615c0728ad3a.png",a=n.p+"106ab8dc159f07b638c7.jpg",o=n.p+"ac4d61b3bd0c3dbc5351.jpg",i=n.p+"f93a39792897de1b8033.jpg",s=n.p+"903249b43da1beaa0ea3.jpg",c=n.p+"3130f22dfd561dc4791e.jpg",d=n.p+"87af058e7edc46a87870.jpg",l=n.p+"6345e64c59414d171d23.jpg",p=n.p+"818967aec46103fd7474.jpeg",u=n.p+"6699eda1885b05c5ff28.jpg",m=n.p+"990266a78f591f7c4459.jpg",f=n.p+"cca5ba3bb6696d25209a.jpg",h=n.p+"12fe823e1757c5383288.jpg";var g=n(72),y=n.n(g),b=n(825),v=n.n(b),x=n(659),w=n.n(x),C=n(56),E=n.n(C),A=n(540),k=n.n(A),S=n(113),j=n.n(S),L=n(208),R={};function I(){document.getElementById("content").innerHTML=""}function T(){I(),function(){const e=document.getElementById("content");e.style.fontSize="1.25rem",e.style.textAlign="center",e.style.backgroundImage=`url(${r})`;const t=document.createElement("h1");t.textContent="Remy's",t.style.fontSize="5rem";const n=document.createElement("div");n.textContent="Immerse yourself in a culinary masterpiece. Our restaurant is renowned for its exquisite cuisine and impeccable ambiance. Each dish is a labor of love, crafted with the finest ingredients and presented with artistic flair. \nWhether you're celebrating a special occasion or simply seeking a luxurious escape, our restaurant is the perfect destination.",n.style.display="flex",n.style.flexDirection="column",n.style.justifyContent="center",n.style.alignItems="center",n.style.padding=".5rem",n.style.gap="1rem";const o=document.createElement("div");o.style.backgroundImage=`url(${a})`,o.style.backgroundSize="cover",o.style.backgroundPosition="end",o.style.backgroundRepeat="no-repeat",o.style.minHeight="60vh",o.style.minWidth="80vh";const i=document.createElement("p");i.textContent="Av. Gustave Eiffel, 75007 Paris, France",i.style.margin=".5rem",n.append(o,i),e.append(t,n)}()}function z(){I(),function(){const e=document.getElementById("content");e.style.backgroundImage=`url(${r})`,e.style.textAlign="center",e.style.fontSize="1.3rem",e.style.padding="2rem",e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem";const t=document.createElement("h1");t.textContent="About Us",e.appendChild(t);const n=document.createElement("p");n.textContent="Welcome to Remy's, a Parisian gem where the art of cooking shines. Inspired by the story of a determined rat chef, our restaurant offers a delightful dining experience with passion and creativity at its core.",e.appendChild(n);const a=document.createElement("h2");a.textContent="Our Story",e.appendChild(a);const o=document.createElement("p");o.textContent="Remy's started with a little rat’s big dreams in Paris. From humble beginnings, Remy proved anyone can cook. Today, we continue his legacy with a blend of traditional and modern French cuisine.",e.appendChild(o);const i=document.createElement("h2");i.textContent="Our Philosophy",e.appendChild(i);const s=document.createElement("p");s.textContent="We believe great food brings people together. Cooking is an art, and we aim to create memorable experiences with our inventive French dishes.",e.appendChild(s);const c=document.createElement("h2");c.textContent="Join Us",e.appendChild(c);const d=document.createElement("p");d.textContent="Join us for a culinary journey at Remy's. Share in our passion for great food and experience the magic of French cuisine. Bon appétit!",e.appendChild(d)}()}function P(){I(),function(){const e=document.getElementById("content");e.style.textAlign="center",e.style.backgroundImage=`url(${r})`,e.style.backgroundImage="cover";const t=document.createElement("h1");t.textContent="Remy's: A Culinary Adventure",t.style.marginTop="20px",e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-container"),e.appendChild(n),[{id:"appetizers",title:"Appetizers"},{id:"main-courses",title:"Main Courses"},{id:"sides",title:"Sides"},{id:"desserts",title:"Desserts"}].forEach((e=>{const t=document.createElement("h2");t.textContent=e.title,t.style.marginTop="30px",n.appendChild(t);const r=document.createElement("div");r.id=e.id,n.appendChild(r)})),[{name:"Remy's Ratatouille",description:"A classic Provençal dish featuring a medley of roasted summer vegetables, slow-cooked to perfection.",image:a,section:"appetizers"},{name:"Linguini with White Truffles",description:"Delicate pasta tossed with a rich truffle cream sauce, a nod to Remy's love for fine dining.",image:p,section:"appetizers"},{name:"Escargot Bourguignonne",description:"A French classic, these tender snails are bathed in a garlic and herb butter sauce.",image:d,section:"appetizers"},{name:"Le Chef's Surprise",description:"A daily changing special inspired by the freshest ingredients, showcasing the chef's creativity.",image:o,section:"main-courses"},{name:"Confit de Canard",description:"Crispy duck leg served with a sweet and tangy orange sauce, a nod to French culinary tradition.",image:s,section:"main-courses"},{name:"Roasted Lamb with Herbs de Provence",description:"Tender lamb slow-roasted with aromatic herbs, a true taste of the French countryside.",image:f,section:"main-courses"},{name:"Pommes Frites",description:"Classic French fries, crispy on the outside, fluffy on the inside.",image:u,section:"sides"},{name:"Ratatouille Gratin",description:"A hearty baked version of the classic dish, topped with a golden cheese crust.",image:m,section:"sides"},{name:"Green Beans Almondine",description:"A simple yet elegant side dish, featuring fresh green beans with toasted almonds.",image:l,section:"sides"},{name:"Tarte Tatin",description:"A caramelized upside-down apple tart, a French dessert classic.",image:h,section:"desserts"},{name:"Crème Brûlée",description:"A rich custard topped with a caramelized sugar crust.",image:c,section:"desserts"},{name:"Chocolate Soufflé",description:"A decadent dessert, light and airy with a molten chocolate center.",image:i,section:"desserts"}].forEach((e=>{!function(e,t,n,r){const a=document.createElement("div");a.classList.add("menu-item"),a.style.marginBottom="20px",a.style.position="relative",a.style.overflow="hidden";const o=document.createElement("img");o.src=n,o.alt=e,o.style.width="50%",o.style.height="400px",o.style.objectFit="cover",o.style.borderRadius="10px",o.style.transition="transform 0.3s ease-in-out",a.appendChild(o);const i=document.createElement("div");i.textContent=t,i.style.position="absolute",i.style.bottom="10%",i.style.left="25%",i.style.width="calc(50% - 20px)",i.style.padding="10px",i.style.backgroundColor="rgba(0, 0, 0, 0.6)",i.style.color="white",i.style.fontSize="14px",i.style.borderRadius="10px",i.style.opacity="0",i.style.transition="opacity 0.3s ease-in-out",a.appendChild(i),a.addEventListener("mouseover",(()=>{o.style.transform="scale(1.05)",i.style.opacity="1"})),a.addEventListener("mouseout",(()=>{o.style.transform="scale(1)",i.style.opacity="0"})),document.getElementById(r).appendChild(a)}(e.name,e.description,e.image,e.section)}))}()}function F(){document.querySelector("button:nth-child(1)").addEventListener("click",T),document.querySelector("button:nth-child(2)").addEventListener("click",P),document.querySelector("button:nth-child(3)").addEventListener("click",z)}R.styleTagTransform=j(),R.setAttributes=E(),R.insert=w().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=k(),y()(L.A,R),L.A&&L.A.locals&&L.A.locals,F(),document.addEventListener("DOMContentLoaded",(()=>{F(),T()}))})();