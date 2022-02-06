const e=(e,t=['mouseover','focus'])=>{const i=r=>{t.forEach((t=>e.removeEventListener(t,i))),(e=>{if(navigator.connection){const e=navigator.connection;if(e.saveData)return new Error('Prefetch is not available when using Data Saver');if(e.effectiveType.includes('2g'))return new Error('Prefetch is not available on slow connection')}if(null!==e.target){const t=document.createElement('link');t.href=e.target.href,t.rel='prefetch',document.head.appendChild(t)}})(r)};t.forEach((t=>e.addEventListener(t,i)))},t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype,i=Symbol(),r=new Map;class o{constructor(e,t){if(this._$cssResult$=!0,t!==i)throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');this.cssText=e}get styleSheet(){let e=r.get(this.cssText);return t&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t='';for(const i of e.cssRules)t+=i.cssText;return(e=>new o('string'==typeof e?e:e+'',i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n;const l=window.trustedTypes,a=l?l.emptyScript:'',c=window.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?a:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},h=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const r=this._$Eh(i,t);void 0!==r&&(this._$Eu.set(r,i),e.push(r))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i='symbol'==typeof e?Symbol():'__'+e,r=this.getPropertyDescriptor(e,i,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty('finalized'))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty('properties')){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:'string'==typeof i?i:'string'==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement('style'),r=window.litNonce;void 0!==r&&i.setAttribute('nonce',r),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=u){var r,o;const s=this.constructor._$Eh(e,i);if(void 0!==s&&!0===i.reflect){const n=(null!==(o=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==o?o:d.toAttribute)(t,i.type);this._$Ei=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(e,t){var i,r,o;const s=this.constructor,n=s._$Eu.get(e);if(void 0!==n&&this._$Ei!==n){const e=s.getPropertyOptions(n),l=e.converter,a=null!==(o=null!==(r=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:'function'==typeof l?l:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=n,this[n]=a(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let r=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:'open'},null==c||c({ReactiveElement:p}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push('1.1.1');const m=globalThis.trustedTypes,g=m?m.createPolicy('lit-html',{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+'').slice(9)}$`,b='?'+f,$=`<${b}>`,y=document,_=(e='')=>y.createComment(e),A=e=>null===e||'object'!=typeof e&&'function'!=typeof e,x=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,w=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,T=/"/g,P=/^(?:script|style|textarea)$/i,U=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),N=Symbol.for('lit-noChange'),H=Symbol.for('lit-nothing'),R=new WeakMap,O=y.createTreeWalker(y,129,null,!1),M=(e,t)=>{const i=e.length-1,r=[];let o,s=2===t?'<svg>':'',n=E;for(let t=0;t<i;t++){const i=e[t];let l,a,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===E?'!--'===a[1]?n=k:void 0!==a[1]?n=w:void 0!==a[2]?(P.test(a[2])&&(o=RegExp('</'+a[2],'g')),n=S):void 0!==a[3]&&(n=S):n===S?'>'===a[0]?(n=null!=o?o:E,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?S:'"'===a[3]?T:C):n===T||n===C?n=S:n===k||n===w?n=E:(n=S,o=void 0);const h=n===S&&e[t+1].startsWith('/>')?' ':'';s+=n===E?i+$:c>=0?(r.push(l),i.slice(0,c)+'$lit$'+i.slice(c)+f+h):i+f+(-2===c?(r.push(void 0),t):h)}const l=s+(e[i]||'<?>')+(2===t?'</svg>':'');if(!Array.isArray(e)||!e.hasOwnProperty('raw'))throw Error('invalid template strings array');return[void 0!==g?g.createHTML(l):l,r]};class I{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0;const n=e.length-1,l=this.parts,[a,c]=M(e,t);if(this.el=I.createElement(a,i),O.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=O.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith('$lit$')||t.startsWith(f)){const i=c[s++];if(e.push(t),void 0!==i){const e=r.getAttribute(i.toLowerCase()+'$lit$').split(f),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:t[2],strings:e,ctor:'.'===t[1]?j:'?'===t[1]?V:'@'===t[1]?K:B})}else l.push({type:6,index:o})}for(const t of e)r.removeAttribute(t)}if(P.test(r.tagName)){const e=r.textContent.split(f),t=e.length-1;if(t>0){r.textContent=m?m.emptyScript:'';for(let i=0;i<t;i++)r.append(e[i],_()),O.nextNode(),l.push({type:2,index:++o});r.append(e[t],_())}}}else if(8===r.nodeType)if(r.data===b)l.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(f,e+1));)l.push({type:7,index:o}),e+=f.length-1}o++}}static createElement(e,t){const i=y.createElement('template');return i.innerHTML=e,i}}function L(e,t,i=e,r){var o,s,n,l;if(t===N)return t;let a=void 0!==r?null===(o=i._$Cl)||void 0===o?void 0:o[r]:i._$Cu;const c=A(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,i,r)),void 0!==r?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[r]=a:i._$Cu=a),void 0!==a&&(t=L(e,a._$AS(e,t.values),a,r)),t}class z{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:r}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:y).importNode(i,!0);O.currentNode=o;let s=O.nextNode(),n=0,l=0,a=r[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new D(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new W(s,this,e)),this.v.push(t),a=r[++l]}n!==(null==a?void 0:a.index)&&(s=O.nextNode(),n++)}return o}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class D{constructor(e,t,i,r){var o;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cg=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),A(e)?e===H||null==e||''===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return x(e)||'function'==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=e:this.S(y.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:r}=e,o='number'==typeof r?this._$AC(e):(void 0===r.el&&(r.el=I.createElement(r.h,this.options)),r);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(i);else{const e=new z(o,this),t=e.p(this.options);e.m(i),this.S(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new I(e)),t}A(e){x(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new D(this.M(_()),this.M(_()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class B{constructor(e,t,i,r,o){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||''!==i[0]||''!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const o=this.strings;let s=!1;if(void 0===o)e=L(this,e,t,0),s=!A(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{const r=e;let n,l;for(e=o[0],n=0;n<o.length-1;n++)l=L(this,r[i+n],t,n),l===N&&(l=this._$AH[n]),s||(s=!A(l)||l!==this._$AH[n]),l===H?e=H:e!==H&&(e+=(null!=l?l:'')+o[n+1]),this._$AH[n]=l}s&&!r&&this.k(e)}k(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:'')}}class j extends B{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===H?void 0:e}}const q=m?m.emptyScript:'';class V extends B{constructor(){super(...arguments),this.type=4}k(e){e&&e!==H?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class K extends B{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=L(this,e,t,0))&&void 0!==i?i:H)===N)return;const r=this._$AH,o=e===H&&r!==H||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==H&&(r===H||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;'function'==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,F;null==J||J(I,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push('2.1.1');class G extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var r,o;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:t;let n=s._$litPart$;if(void 0===n){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=n=new D(t.insertBefore(_(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return N}}G.finalized=!0,G._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:G});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:G}),(null!==(F=globalThis.litElementVersions)&&void 0!==F?F:globalThis.litElementVersions=[]).push('3.1.1');class X extends Event{constructor(e){super(X.eventName,{bubbles:!0}),this.targetElement=e}}X.eventName='dialog-event';class Y extends Event{constructor(e){super(Y.eventName,{bubbles:!0}),this.themeName='',this.themeName=e}}Y.eventName='theme-event';
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee=(e,t)=>'method'===t.kind&&t.descriptor&&!('value'in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:'field',key:Symbol(),placement:'own',descriptor:{},originalKey:t.key,initializer(){'function'==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
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
 */var re=function(e,t,i,r){var o,s=arguments.length,n=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};const oe=e=>localStorage.getItem(e),se=(e,t)=>{localStorage.setItem(e,t)},ne=e=>{localStorage.removeItem(e)},le=[{name:'auto',checked:!0},{name:'light',checked:!1},{name:'dark',checked:!1}];let ae=class extends G{constructor(){super(...arguments),this.dialogHidden=!0,this.themes=[],this.saveSelection=!1,this.availableThemes=[],this.lastIndex=this.themes.length-1}connectedCallback(){super.connectedCallback(),addEventListener(X.eventName,(async e=>{const{targetElement:t}=e,{id:i}=t;this.openerElementId=i,this.dialogHidden=!1,await this.updateComplete,this.getTabElements()[0].focus()}));const e=oe('theme-preference'),t=oe('save-selection');try{this.saveSelection=JSON.parse(t||'')}catch(e){this.saveSelection=!1}Array.isArray(this.availableThemes)&&this.availableThemes.length?this.themes=this.availableThemes.map(((e,t)=>({name:e,checked:0===t}))):this.themes=le;const i=this.themes.findIndex((t=>t.name===e));this.updateThemeState(-1===i?0:i),this.lastIndex=this.themes.length-1}disconnectedCallback(){super.disconnectedCallback(),removeEventListener(X.eventName,(()=>{console.info(`${X.eventName} has been removed as an EventListener`)}))}updateThemeState(e){const t=[...this.themes];t.forEach((e=>e.checked=!1)),t[e].checked=!0,this.themes=t}closeDialog(){var e;this.dialogHidden=!0,null===(e=document.querySelector(`#${this.openerElementId}`))||void 0===e||e.focus()}handleArrowKeys(e,t){switch(e.key){case'ArrowLeft':case'ArrowUp':0!==t?this.focusElement(this.themeButtons,t-1):this.focusElement(this.themeButtons,this.lastIndex);break;case'ArrowRight':case'ArrowDown':t!==this.lastIndex?this.focusElement(this.themeButtons,t+1):this.focusElement(this.themeButtons,0)}}getTabElements(){return this.renderRoot.querySelectorAll('a[href], input, button:not([tabindex="-1"])')}focusElement(e,t){e[t].focus()}render(){return U`
            <div
                aria-hidden="true"
                tabindex="0"
                @focus="${()=>{const e=this.getTabElements(),t=e.length-1;this.focusElement(e,t)}}"
            ></div>
            <div aria-hidden="${this.dialogHidden}" id="dialog-backdrop">
                <div
                    @keydown="${e=>{'Escape'===e.key&&this.closeDialog()}}"
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
                                <div class="theme">
                                    <div class="circle-wrapper">
                                        <button
                                            @click="${()=>{this.updateThemeState(t),this.saveSelection&&se('theme-preference',e.name),window.dispatchEvent(new Y(e.name))}}"
                                            @keydown="${e=>{this.handleArrowKeys(e,t),'Enter'===e.key&&this.updateThemeState(t)}}"
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

                    <div class="save-settings">
                        <div>
                            <input
                                ?checked=${this.saveSelection}
                                @click=${()=>{if(!1===this.saveSelection){const{name:e}=this.themes.filter((e=>!0===e.checked))[0];se('save-selection','true'),se('theme-preference',e)}else ne('save-selection'),ne('theme-preference');this.saveSelection=!this.saveSelection}}
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
                        <slot name="close-caption"></slot>
                    </button>
                </div>
                <div
                    @focus="${()=>{const e=this.getTabElements();this.focusElement(e,0)}}"
                    aria-hidden="true"
                    tabindex="0"
                ></div>
            </div>
        `}};ae.styles=((e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if('number'==typeof e)return e;throw Error('Value passed to \'css\' function must be a \'css\' function result: '+e+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.')})(i)+e[r+1]),e[0]);return new o(r,i)})`
        :host {
            --purple-50: #faf5ff;
            --purple-100: #f3e8ff;
            --purple-200: #e9d5ff;
            --purple-300: #d8b4fe;
            --purple-400: #c084fc;
            --purple-500: #a855f7;
            --purple-600: #9333ea;
            --purple-700: #7e22ce;
            --purple-800: #6b21a8;
            --purple-900: #581c87;
            --purple-950: #2f0050;

            --base-gap: 8px;
            --base-radius: 8px;
            --blur-amount: 5px;
            --backdrop-color: hsla(0, 0, 78%, 0.1);

            --text-color-1: var(--purple-950);
            --text-color-2: var(--purple-900);
            --outline-color: #000;

            /* Dialog */
            --dialog-bg-color: var(--purple-50);
            --dialog-border-color: var(--purple-500);
            /* Themes Wrapper */
            --themes-border-color: var(--purple-400);
            /* Radio Buttons */
            --circle-bg-color: var(--purple-100);
            --circle-bg-color-checked: var(--purple-300);
            --circle-border-color: var(--purple-500);
            /* Control elements */
            --control-color: var(--purple-300);
            --control-interaction-color: var(--purple-400);
            /* Checkbox */
            --checkbox-bg-color: var(--purple-50);
            --checkbox-bg-color-checked: var(--purple-200);
            --checkmark-color: var(--purple-900);
            --checkbox-border-color: var(--purple-500);

            font-family: var(--font-fam, sans-serif);
        }

        ::slotted(h2) {
            margin: 0;
            color: var(--text-color-1);
        }

        ::slotted(span) {
            color: var(--text-color-2);
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

            color: var(--text-color-1);
            transition: transform 50ms ease-in-out,
                background-color 100ms ease-in-out;
            background-color: var(--control-color);
            box-sizing: border-box;
        }

        ::slotted(a#read-more:hover),
        ::slotted(a#read-more:focus) {
            background-color: var(--control-interaction-color);
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
            border: 3px solid var(--dialog-border-color);
            border-radius: calc(var(--base-radius) * 2);
            padding: calc(var(--base-gap) * 1.5);
            width: 250px;

            transform: translate(-50%, -50%);

            background-color: var(--dialog-bg-color);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);

            text-align: center;
        }

        #dialog-theme-selection[aria-hidden='true'] {
            display: none;
        }

        label {
            color: var(--text-color-1);
            cursor: pointer;
        }

        .themes {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
            gap: calc(var(--base-gap) / 2);
            border: 1px solid var(--themes-border-color);
            border-radius: var(--base-radius);
            padding: calc(var(--base-gap) / 2);
        }

        .theme {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc(var(--base-gap) / 4);

            border-radius: var(--base-radius);
            padding: calc(var(--base-gap) / 2);

            text-transform: capitalize;
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

            background-color: var(--circle-bg-color);
            border-color: var(--circle-border-color);
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

            border: 2px solid var(--circle-border-color);

            transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);
            outline: none;
        }

        .radio:hover + .outer-circle,
        .radio:focus + .outer-circle {
            transform: scale(2);
        }

        .radio[aria-checked='true'].inner-circle {
            /* background-color: var(--surface-3); */
            /* background-color: var(--circle-checked); */
            background-color: var(--circle-bg-color-checked);
        }

        .save-settings {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--base-gap);
        }

        .dialog-control {
            color: var(--text-color-1);
            transition: transform 50ms ease-in-out,
                background-color 100ms ease-in-out;
            background-color: var(--control-color);
        }

        .dialog-control:hover,
        .dialog-control:focus {
            background-color: var(--control-interaction-color);
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

        input[type='checkbox'] {
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
            clip: rect(1px, 1px, 1px, 1px);
        }

        input[type='checkbox'] + label {
            display: grid;
            align-items: center;
            gap: var(--base-gap);
            grid-template-areas: 'checkbox-cell label';
            grid-template-columns: auto 1fr;
        }

        input[type='checkbox'] + label:before {
            content: '';
            grid-area: checkbox-cell;
            border-radius: 2px;
            border: 1px solid var(--checkbox-border-color);
            width: 20px;
            height: 20px;
            background: var(--checkbox-bg-color);
        }

        input[type='checkbox']:checked + label:before {
            background: var(--checkbox-bg-color-checked);
        }

        input[type='checkbox']:checked + label::after {
            content: '';
            border-left: 2px solid var(--checkmark-color);
            border-bottom: 2px solid var(--checkmark-color);
            height: 5px;
            width: 12px;
            transform: rotate(-45deg);
            position: relative;
            left: 4px;
            grid-area: checkbox-cell;
            top: -2px;
        }

        input[type='checkbox']:focus + label::before {
            outline: var(--outline-color) solid 1px;
        }

        @media (prefers-reduced-motion: no-preference) {
            #read-more:active,
            #btn-close-dialog:active {
                transform: scale(0.95);
            }
        }
    `,re([ie()],ae.prototype,'dialogHidden',void 0),re([ie()],ae.prototype,'themes',void 0),re([ie()],ae.prototype,'saveSelection',void 0),re([te({type:Array})],ae.prototype,'availableThemes',void 0),re([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(e){return(({finisher:e,descriptor:t})=>(i,r)=>{var o;if(void 0===r){const r=null!==(o=i.originalKey)&&void 0!==o?o:i.key,s=null!=t?{kind:'method',placement:'prototype',key:r,descriptor:t(i.key)}:{...i,key:r};return null!=e&&(s.finisher=function(t){e(t,r)}),s}{const o=i.constructor;void 0!==t&&Object.defineProperty(i,r,t(r)),null==e||e(o,r)}})({descriptor:t=>({get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==i?i:[]},enumerable:!0,configurable:!0})})}('button[role="radio"]')],ae.prototype,'themeButtons',void 0),ae=re([(e=>t=>'function'==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t))('theme-switch')],ae);
/**
 * @license
 * Copyright 2022 Tony Spegel
 */
const ce=document.querySelector('[data-scroller]'),de=document.querySelector('#site-header'),he=document.querySelector('#sentinel-element'),ue={root:ce,rootMargin:`-${de.getBoundingClientRect().height}px`,treshold:1};new IntersectionObserver((e=>{e[0].isIntersecting?de.classList.remove('opaque'):de.classList.add('opaque')}),ue).observe(he),
/**
 * @license
 * Copyright 2022 Tony Spegel
 */
document.querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"]):not([class*="no-fetch"])').forEach((t=>e(t))),document.querySelector('body').addEventListener('touchstart',(()=>{}),{passive:!0});class pe extends Event{static eventName='dialog-event';targetElement='';constructor(e){super(pe.eventName,{bubbles:!0}),this.targetElement=e}}document.querySelector('#btn-theme-selection').addEventListener('click',(e=>{const{target:t}=e;window.dispatchEvent(new pe(t))})),window.addEventListener('theme-event',(e=>{const{themeName:t}=e;document.documentElement.setAttribute('theme-preference',t)}));
