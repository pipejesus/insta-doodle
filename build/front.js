!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=20)}([,,,,function(t,e){t.exports=function(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function s(e){return t.exports=s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.default=t.exports,t.exports.__esModule=!0,s(e)}t.exports=s,t.exports.default=t.exports,t.exports.__esModule=!0},,,,function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function s(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,s){var n=s(17);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,s){var n=s(18).default,r=s(19);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e},t.exports.default=t.exports,t.exports.__esModule=!0},,,,,function(t,e){function s(e,n){return t.exports=s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},t.exports.default=t.exports,t.exports.__esModule=!0,s(e,n)}t.exports=s,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){function s(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=s=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=s=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),s(e)}t.exports=s,t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.default=t.exports,t.exports.__esModule=!0},function(t,e,s){"use strict";s.r(e),s.d(e,"PolcoInstaDoodle",(function(){return ft}));var n=s(4),r=s.n(n),o=s(9),i=s.n(o),a=s(10),l=s.n(a),c=s(11),p=s.n(c),u=s(12),d=s.n(u),h=s(5),f=s.n(h);const _="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,y=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},m=`{{lit-${String(Math.random()).slice(2)}}}`,g=`\x3c!--${m}--\x3e`,S=new RegExp(`${m}|${g}`);class v{constructor(t,e){this.parts=[],this.element=e;const s=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let o=0,i=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=r.nextNode();if(null!==t){if(i++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let n=0;for(let t=0;t<s;t++)x(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=l[a],s=P.exec(e)[2],n=s.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const o=r.split(S);this.parts.push({type:"attribute",index:i,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(m)>=0){const n=t.parentNode,r=e.split(S),o=r.length-1;for(let e=0;e<o;e++){let s,o=r[e];if(""===o)s=b();else{const t=P.exec(o);null!==t&&x(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}n.insertBefore(s,t),this.parts.push({type:"node",index:++i})}""===r[o]?(n.insertBefore(b(),t),s.push(t)):t.data=r[o],a+=o}}else if(8===t.nodeType)if(t.data===m){const e=t.parentNode;null!==t.previousSibling&&i!==o||(i++,e.insertBefore(b(),t)),o=i,this.parts.push({type:"node",index:i}),null===t.nextSibling?t.data="":(s.push(t),i--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(m,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const x=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},w=t=>-1!==t.index,b=()=>document.createComment(""),P=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function N(t,e){const{element:{content:s},parts:n}=t,r=document.createTreeWalker(s,133,null,!1);let o=T(n),i=n[o],a=-1,l=0;const c=[];let p=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==i&&i.index===a;)i.index=null!==p?-1:i.index-l,o=T(n,o),i=n[o]}c.forEach(t=>t.parentNode.removeChild(t))}const C=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},T=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(w(e))return s}return-1},E=new WeakMap,A=t=>"function"==typeof t&&E.has(t),O={},M={};class V{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=_?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,i=0,a=n.nextNode();for(;o<s.length;)if(r=s[o],w(r)){for(;i<r.index;)i++,"TEMPLATE"===a.nodeName&&(e.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=e.pop(),a=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return _&&(document.adoptNode(t),customElements.upgrade(t)),t}}const k=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),U=` ${m} `;class R{constructor(t,e,s,n){this.strings=t,this.values=e,this.type=s,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const o=P.exec(t);e+=null===o?t+(s?U:g):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+m}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==k&&(e=k.createHTML(e)),t.innerHTML=e,t}}const j=t=>null===t||!("object"==typeof t||"function"==typeof t),$=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class q{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new I(this)}_getValue(){const t=this.strings,e=t.length-1,s=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=s[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!$(t))return t}let n="";for(let r=0;r<e;r++){n+=t[r];const e=s[r];if(void 0!==e){const t=e.value;if(j(t)||!$(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class I{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===O||j(t)&&t===this.value||(this.value=t,A(t)||(this.committer.dirty=!0))}commit(){for(;A(this.value);){const t=this.value;this.value=O,t(this)}this.value!==O&&this.committer.commit()}}class z{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(b()),this.endNode=t.appendChild(b())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=b()),t.__insert(this.endNode=b())}insertAfterPart(t){t.__insert(this.startNode=b()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=O,t(this)}const t=this.__pendingValue;t!==O&&(j(t)?t!==this.value&&this.__commitText(t):t instanceof R?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):$(t)?this.__commitIterable(t):t===M?(this.value=M,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof V&&this.value.template===e)this.value.update(t.values);else{const s=new V(e,t.processor,this.options),n=s._clone();s.update(t.values),this.__commitNode(n),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,n=0;for(const r of t)s=e[n],void 0===s&&(s=new z(this.options),e.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(e[n-1])),s.setValue(r),s.commit(),n++;n<e.length&&(e.length=n,this.clear(s&&s.endNode))}clear(t=this.startNode){y(this.startNode.parentNode,t.nextSibling,this.endNode)}}class B{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=O,t(this)}if(this.__pendingValue===O)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=O}}class L extends q{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new F(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class F extends I{}let H=!1;(()=>{try{const t={get capture(){return H=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class W{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;A(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=O,t(this)}if(this.__pendingValue===O)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=D(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=O}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const D=t=>t&&(H?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function J(t){let e=G.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},G.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(m);return s=e.keyString.get(n),void 0===s&&(s=new v(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const G=new Map,K=new WeakMap,Q=new class{handleAttributeExpressions(t,e,s,n){const r=e[0];return"."===r?new L(t,e.slice(1),s).parts:"@"===r?[new W(t,e.slice(1),n.eventContext)]:"?"===r?[new B(t,e.slice(1),s)]:new q(t,e,s).parts}handleTextExpression(t){return new z(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const X=(t,e)=>`${t}--${e}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const Z=t=>e=>{const s=X(e.type,t);let n=G.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},G.set(s,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(m);if(r=n.keyString.get(o),void 0===r){const s=e.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(s,t),r=new v(e,s),n.keyString.set(o,r)}return n.stringsArray.set(e.strings,r),r},tt=["html","svg"],et=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const st={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},nt=(t,e)=>e!==t&&(e==e||t==t),rt={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:nt};class ot extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const n=this._attributeNameForProperty(s,e);void 0!==n&&(this._attributeToPropertyMap.set(n,s),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=rt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdateInternal(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||rt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=nt){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,n=e.converter||st,r="function"==typeof n?n:n.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,n=e.converter;return(n&&n.toAttribute||st.toAttribute)(t,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=rt){const n=this.constructor,r=n._attributeNameForProperty(t,s);if(void 0!==r){const t=n._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,n=s._attributeToPropertyMap.get(t);if(void 0!==n){const t=s.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,s){let n=!0;if(void 0!==t){const r=this.constructor;s=s||r.getPropertyOptions(t),r._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}ot.finalized=!0;const it=Element.prototype;it.msMatchesSelector||it.webkitMatchesSelector;const at=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol();class ct{constructor(t,e){if(e!==lt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(at?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const pt={};class ut extends ot{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),n=[];s.forEach(t=>n.unshift(t)),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!at){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new ct(String(e),lt)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?at?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==pt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return pt}}var dt,ht;ut.finalized=!0,ut.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=K.has(e),o=Y&&11===e.nodeType&&!!e.host,i=o&&!et.has(n),a=i?document.createDocumentFragment():e;if(((t,e,s)=>{let n=K.get(e);void 0===n&&(y(e,e.firstChild),K.set(e,n=new z(Object.assign({templateFactory:J},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,a,Object.assign({templateFactory:Z(n)},s)),i){const t=K.get(a);K.delete(a);((t,e,s)=>{et.add(t);const n=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:o}=r;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,t);const i=document.createElement("style");for(let t=0;t<o;t++){const e=r[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}(t=>{tt.forEach(e=>{const s=G.get(X(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),N(t,s)})})})(t);const a=n.content;s?function(t,e,s=null){const{element:{content:n},parts:r}=t;if(null==s)return void n.appendChild(e);const o=document.createTreeWalker(n,133,null,!1);let i=T(r),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===s&&(a=C(e),s.parentNode.insertBefore(e,s));-1!==i&&r[i].index===l;){if(a>0){for(;-1!==i;)r[i].index+=a,i=T(r,i);return}i=T(r,i)}}(s,i,a.firstChild):a.insertBefore(i,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(i,a.firstChild);const t=new Set;t.add(i),N(s,t)}})(n,a,t.value instanceof V?t.value.template:void 0),y(e,e.firstChild),e.appendChild(a),K.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};var ft=function(t){p()(o,t);var e,s,n=(e=o,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=f()(e);if(s){var r=f()(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return d()(this,t)});function o(){var t;return i()(this,o),(t=n.call(this)).opened=!1,t}return l()(o,[{key:"render",value:function(){return((t,...e)=>new R(t,e,"html",Q))(dt||(dt=r()(['\n\t\t\t<article class="recipe">\n\t\t\t\t<header class="recipe-header">\n\t\t\t\t\t<slot name="header"></slot>\n\t\t\t\t</header>\n\t\t\t\t<div class="recipe-contents ','">\n\t\t\t\t\t<slot name="contents"></slot>\n\t\t\t\t</div>\n\t\t\t\t<div class="recipe-actions">\n\t\t\t\t\t<button @click=',">Read the recipe</button>\n\t\t\t\t</div>\n\t\t\t</article>\n    "])),this.opened?"opened":"closed",this._onClick)}},{key:"_onClick",value:function(){this.opened=!this.opened}}],[{key:"styles",get:function(){return((t,...e)=>{const s=e.reduce((e,s,n)=>e+(t=>{if(t instanceof ct)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[n+1],t[0]);return new ct(s,lt)})(ht||(ht=r()(["\n      :host {\n\t\t\t\t/**\n\t\t\t\t * Styles applied to the host element (i.e. <polcode-recipe>)\n\t\t\t\t */\n      }\n\t\t\t.recipe-contents.closed {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.recipe-contents.opened {\n\t\t\t\tdisplay: block;\n\t\t\t}\n    "])))}},{key:"properties",get:function(){return{opened:{type:Boolean}}}}]),o}(ut);window.customElements.define("polcode-insta-doodle",ft)}]);