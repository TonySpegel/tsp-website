const e=(e,t=["mouseover","focus"])=>{const i=s=>{t.forEach((t=>e.removeEventListener(t,i))),(e=>{if(navigator.connection){const e=navigator.connection;if(e.saveData)return new Error("Prefetch is not available when using Data Saver");if(e.effectiveType.includes("2g"))return new Error("Prefetch is not available on slow connection")}if(null!==e.target){const t=document.createElement("link");t.href=e.target.href,t.rel="prefetch",document.head.appendChild(t)}})(s)};t.forEach((t=>e.addEventListener(t,i)))},t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class r{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},h=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Eh(i,t);void 0!==s&&(this._$Eu.set(s,i),e.push(s))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=u){var s,r;const n=this.constructor._$Eh(e,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:d.toAttribute)(t,i.type);this._$Ei=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(e,t){var i,s,r;const n=this.constructor,o=n._$Eu.get(e);if(void 0!==o&&this._$Ei!==o){const e=n.getPropertyOptions(o),a=e.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:d.fromAttribute;this._$Ei=o,this[o]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.1.1");const m=globalThis.trustedTypes,f=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,$="?"+g,b=`<${$}>`,y=document,_=(e="")=>y.createComment(e),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,x=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,T=/"/g,P=/^(?:script|style|textarea)$/i,U=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),N=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),O=new WeakMap,R=y.createTreeWalker(y,129,null,!1),M=(e,t)=>{const i=e.length-1,s=[];let r,n=2===t?"<svg>":"",o=w;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===w?"!--"===l[1]?o=S:void 0!==l[1]?o=x:void 0!==l[2]?(P.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=k):void 0!==l[3]&&(o=k):o===k?">"===l[0]?(o=null!=r?r:w,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?k:'"'===l[3]?T:C):o===T||o===C?o=k:o===S||o===x?o=w:(o=k,r=void 0);const h=o===k&&e[t+1].startsWith("/>")?" ":"";n+=o===w?i+b:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+g+h):i+g+(-2===c?(s.push(void 0),t):h)}const a=n+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(a):a,s]};class L{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const o=e.length-1,a=this.parts,[l,c]=M(e,t);if(this.el=L.createElement(l,i),R.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=R.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const i=c[n++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?j:"?"===t[1]?V:"@"===t[1]?K:B})}else a.push({type:6,index:r})}for(const t of e)s.removeAttribute(t)}if(P.test(s.tagName)){const e=s.textContent.split(g),t=e.length-1;if(t>0){s.textContent=m?m.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],_()),R.nextNode(),a.push({type:2,index:++r});s.append(e[t],_())}}}else if(8===s.nodeType)if(s.data===$)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(g,e+1));)a.push({type:7,index:r}),e+=g.length-1}r++}}static createElement(e,t){const i=y.createElement("template");return i.innerHTML=e,i}}function z(e,t,i=e,s){var r,n,o,a;if(t===N)return t;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=A(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(t=z(e,l._$AS(e,t.values),l,s)),t}class I{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:y).importNode(i,!0);R.currentNode=r;let n=R.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new D(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new W(n,this,e)),this.v.push(t),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=R.nextNode(),o++)}return r}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class D{constructor(e,t,i,s){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),A(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return E(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=e:this.S(y.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,r="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(i);else{const e=new I(r,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=O.get(e.strings);return void 0===t&&O.set(e.strings,t=new L(e)),t}A(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new D(this.M(_()),this.M(_()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class B{constructor(e,t,i,s,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(void 0===r)e=z(this,e,t,0),n=!A(e)||e!==this._$AH&&e!==N,n&&(this._$AH=e);else{const s=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=z(this,s[i+o],t,o),a===N&&(a=this._$AH[o]),n||(n=!A(a)||a!==this._$AH[o]),a===H?e=H:e!==H&&(e+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.k(e)}k(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class j extends B{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===H?void 0:e}}const q=m?m.emptyScript:"";class V extends B{constructor(){super(...arguments),this.type=4}k(e){e&&e!==H?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class K extends B{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=z(this,e,t,0))&&void 0!==i?i:H)===N)return;const s=this._$AH,r=e===H&&s!==H||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,F;null==J||J(L,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.1.1");class G extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let o=n._$litPart$;if(void 0===o){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new D(t.insertBefore(_(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return N}}G.finalized=!0,G._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push("3.1.1");class X extends Event{constructor(e){super(X.eventName,{bubbles:!0}),this.targetElement=e}}X.eventName="dialog-event";class Y extends Event{constructor(e){super(Y.eventName,{bubbles:!0}),this.themeName="",this.themeName=e}}Y.eventName="theme-event";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ee(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ie(e){return te({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var se=function(e,t,i,s){var r,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(n<3?r(o):n>3?r(t,i,o):r(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};const re=e=>localStorage.getItem(e),ne=(e,t)=>{localStorage.setItem(e,t)},oe=e=>{localStorage.removeItem(e)},ae=[{name:"auto",checked:!0},{name:"light",checked:!1},{name:"dark",checked:!1}];let le=class extends G{constructor(){super(...arguments),this.dialogHidden=!0,this.themes=[],this.saveSelection=!1,this.availableThemes=[],this.lastIndex=this.themes.length-1}connectedCallback(){super.connectedCallback(),addEventListener(X.eventName,(async e=>{const{targetElement:t}=e,{id:i}=t;this.openerElementId=i,this.dialogHidden=!1,await this.updateComplete,this.getTabElements()[0].focus()}));const e=re("theme-preference"),t=re("save-selection");try{this.saveSelection=JSON.parse(t||"")}catch(e){this.saveSelection=!1}Array.isArray(this.availableThemes)&&this.availableThemes.length?this.themes=this.availableThemes.map(((e,t)=>({name:e,checked:0===t}))):this.themes=ae;const i=this.themes.findIndex((t=>t.name===e));this.updateThemeState(-1===i?0:i),this.lastIndex=this.themes.length-1}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(X.eventName,(()=>{console.info(`${X.eventName} has been removed as an EventListener`)}))}updateThemeState(e){const t=[...this.themes];t.forEach((e=>e.checked=!1)),t[e].checked=!0,this.themes=t}closeDialog(){var e;this.dialogHidden=!0,null===(e=document.querySelector(`#${this.openerElementId}`))||void 0===e||e.focus()}handleArrowKeys(e,t){switch(e.key){case"ArrowLeft":case"ArrowUp":0!==t?this.focusElement(this.themeButtons,t-1):this.focusElement(this.themeButtons,this.lastIndex);break;case"ArrowRight":case"ArrowDown":t!==this.lastIndex?this.focusElement(this.themeButtons,t+1):this.focusElement(this.themeButtons,0)}}getTabElements(){return this.renderRoot.querySelectorAll('a[href], input, button:not([tabindex="-1"])')}focusElement(e,t){e[t].focus()}render(){return U`
            <div
                aria-hidden="true"
                tabindex="0"
                @focus="${()=>{const e=this.getTabElements(),t=e.length-1;this.focusElement(e,t)}}"
            ></div>
            <div aria-hidden="${this.dialogHidden}" id="dialog-backdrop">
                <div
                    @keydown="${e=>{"Escape"===e.key&&this.closeDialog()}}"
                    aria-hidden="${this.dialogHidden}"
                    aria-label="Theme-Selection"
                    aria-modal="true"
                    id="dialog-theme-selection"
                    role="dialog"
                    tabindex="-1"
                >
                    <div class="dialog-title">
                        <slot name="heading"></slot>
                        <slot name="sub-heading"></slot>
                    </div>

                    <div role="radiogroup" class="themes">
                        ${this.themes.map(((e,t)=>U`
                                <div class="theme-wrapper">
                                    <div class="circle-wrapper">
                                        <button
                                            @click="${()=>{this.updateThemeState(t),this.saveSelection&&ne("theme-preference",e.name),window.dispatchEvent(new Y(e.name))}}"
                                            @keydown="${e=>{this.handleArrowKeys(e,t),"Enter"===e.key&&this.updateThemeState(t)}}"
                                            aria-checked="${e.checked}"
                                            class="radio inner-circle"
                                            id="${e.name}"
                                            role="radio"
                                            tabindex=${e.checked?0:-1}
                                            title="${e.name}-Theme aktivieren"
                                        ></button>
                                        <div class="outer-circle"></div>
                                    </div>

                                    <label for="${e.name}">
                                        ${e.name}
                                    </label>
                                </div>
                            `))}
                    </div>

                    <div class="save">
                        <div>
                            <input
                                ?checked=${this.saveSelection}
                                @click=${()=>{if(!1===this.saveSelection){const{name:e}=this.themes.filter((e=>!0===e.checked))[0];ne("save-selection","true"),ne("theme-preference",e)}else oe("save-selection"),oe("theme-preference");this.saveSelection=!this.saveSelection}}
                                id="save-selection"
                                name="save-selection"
                                type="checkbox"
                            />
                            <label for="save-selection">
                                Auswahl speichern
                            </label>
                        </div>
                        <slot name="read-more"></slot>
                    </div>

                    <button
                        @click=${this.closeDialog}
                        class="dialog-control"
                        id="btn-close-dialog"
                        title="Dialog schließen"
                    >
                        Schließen
                    </button>
                </div>
                <div
                    @focus="${()=>{const e=this.getTabElements();this.focusElement(e,0)}}"
                    aria-hidden="true"
                    tabindex="0"
                ></div>
            </div>
        `}};le.styles=((e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new r(s,i)})`
        :host {
            font-family: var(--font-fam, sans-serif);

            --base-gap: 8px;
            --base-radius: 8px;
            --blur-amount: 5px;
            --backdrop-color: hsla(0, 0, 78%, 0.1);
        }

        ::slotted(h2) {
            margin: 0;
            color: var(--text-2);
        }

        ::slotted(#read-more) {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 4px;
            width: 30px;
            height: 30px;
            text-decoration: none;

            color: var(--text-2);
            transition: transform 50ms ease-in-out,
                background-color 100ms ease-in-out;
            background-color: var(--surface-3);
            box-sizing: border-box;
        }

        ::slotted(a#read-more:hover),
        ::slotted(a#read-more:focus) {
            background-color: var(--surface-2);
        }

        #dialog-backdrop {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background-color: var(
                --backdrop-color,
                hsla(260deg, 55%, 35%, 19%)
            );
            backdrop-filter: blur(var(--blur-amount, 5px));
        }

        #dialog-backdrop[aria-hidden='true'] {
            display: none;
        }
        /**
         * Dialog
         */
        #dialog-theme-selection {
            display: flex;
            flex-direction: column;
            gap: calc(var(--base-gap) * 1.5);

            position: absolute;
            left: 50%;
            top: 50%;

            z-index: 1000;

            outline: none;
            border: 3px solid var(--surface-2);
            border-radius: calc(var(--base-radius) * 2);
            padding: calc(var(--base-gap) * 1.5);
            width: 250px;

            transform: translate(-50%, -50%);

            background-color: var(--surface-5);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);

            text-align: center;
        }

        #dialog-theme-selection[aria-hidden='true'] {
            display: none;
        }

        h2 {
            margin: 0;
            color: hsla(281, 100%, 21%, 1);
            color: var(--text-1);
        }

        label {
            color: var(--text-1);
            cursor: pointer;
            text-transform: capitalize;
        }

        .themes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            gap: calc(var(--base-gap) / 2);
            border: 1px solid var(--surface-3);
            border-radius: var(--base-radius);
            padding: calc(var(--base-gap) / 2);
        }

        .theme-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(var(--base-gap) / 4);

            border-radius: var(--base-radius);
            padding: calc(var(--base-gap) / 2);
        }

        .circle-wrapper {
            display: grid;
            place-items: center;
            grid-template-areas: 'circle';
            width: 100%;
            max-width: 45px;
            aspect-ratio: 1;
        }

        .inner-circle {
            grid-area: circle;
            z-index: 1;

            background-color: var(--circle-bg);
            border-color: var(--surface-2);
        }

        .outer-circle {
            grid-area: circle;
            z-index: 0;

            border-radius: 50%;
            width: 50%;
            aspect-ratio: 1;

            background-color: var(--circle-wave);
            opacity: 0.1;
            transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);
        }

        .radio {
            cursor: pointer;
            border-radius: 50%;
            width: 60%;
            aspect-ratio: 1;

            /* border: 2px solid var(--surface-1); */
            border: 2px solid var(--circle-border);

            transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);
            outline: none;
        }

        .radio:hover + .outer-circle,
        .radio:focus + .outer-circle {
            transform: scale(2);
        }

        .radio[aria-checked='true'].inner-circle {
            /* background-color: var(--surface-3); */
            background-color: var(--circle-checked);
        }

        .save {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--base-gap);
        }

        .dialog-control {
            color: var(--text-2);
            transition: transform 50ms ease-in-out,
                background-color 100ms ease-in-out;
            background-color: var(--surface-3);
        }

        .dialog-control:hover,
        .dialog-control:focus {
            background-color: var(--surface-2);
        }

        #btn-close-dialog {
            cursor: pointer;

            border: none;
            border-radius: var(--base-radius);
            margin: 0 auto;
            padding: calc(var(--base-gap) / 2);
            width: 80%;

            text-transform: capitalize;
        }

        @media (prefers-reduced-motion: no-preference) {
            #read-more:active,
            #btn-close-dialog:active {
                transform: scale(0.95);
            }
        }
    `,se([ie()],le.prototype,"dialogHidden",void 0),se([ie()],le.prototype,"themes",void 0),se([ie()],le.prototype,"saveSelection",void 0),se([te({type:Array})],le.prototype,"availableThemes",void 0),se([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return(({finisher:e,descriptor:t})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,n=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return null!=e&&(n.finisher=function(t){e(t,s)}),n}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,s,t(s)),null==e||e(r,s)}})({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}('button[role="radio"]')],le.prototype,"themeButtons",void 0),le=se([(e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t))("theme-switch")],le);const ce=document.querySelector("[data-scroller]"),de=document.querySelector("#site-header"),he=document.querySelector("#sentinel-element"),ue={root:ce,rootMargin:`-${de.getBoundingClientRect().height}px`,treshold:1};new IntersectionObserver((e=>{e[0].isIntersecting?de.classList.remove("opaque"):de.classList.add("opaque")}),ue).observe(he),document.querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"]):not([class*="no-fetch"])').forEach((t=>e(t))),document.querySelector("body").addEventListener("touchstart",(()=>{}),{passive:!0});class pe extends Event{static eventName="dialog-event";targetElement="";constructor(e){super(pe.eventName,{bubbles:!0}),this.targetElement=e}}document.querySelector("#btn-theme-selection").addEventListener("click",(e=>{const{target:t}=e;window.dispatchEvent(new pe(t))})),window.addEventListener("theme-event",(e=>{const{themeName:t}=e;document.documentElement.setAttribute("theme-preference",t)}));
