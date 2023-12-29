(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bt={exports:{}},Q={exports:{}},j={exports:{}};/*!
  * Bootstrap data.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nt;function _t(){return nt||(nt=1,function(g,_){(function(i,n){g.exports=n()})(R,function(){const i=new Map;return{set(r,t,s){i.has(r)||i.set(r,new Map);const o=i.get(r);if(!o.has(t)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(t,s)},get(r,t){return i.has(r)&&i.get(r).get(t)||null},remove(r,t){if(!i.has(r))return;const s=i.get(r);s.delete(t),s.size===0&&i.delete(r)}}})}(j)),j.exports}var G={exports:{}},W={exports:{}};/*!
  * Bootstrap index.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function V(){return ot||(ot=1,function(g,_){(function(i,n){n(_)})(R,function(i){const t="transitionend",s=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(l,a)=>`#${CSS.escape(a)}`)),e),o=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),h=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},p=e=>{if(!e)return 0;let{transitionDuration:l,transitionDelay:a}=window.getComputedStyle(e);const c=Number.parseFloat(l),E=Number.parseFloat(a);return!c&&!E?0:(l=l.split(",")[0],a=a.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(a))*1e3)},T=e=>{e.dispatchEvent(new Event(t))},w=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),f=e=>w(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(s(e)):null,m=e=>{if(!w(e)||e.getClientRects().length===0)return!1;const l=getComputedStyle(e).getPropertyValue("visibility")==="visible",a=e.closest("details:not([open])");if(!a)return l;if(a!==e){const c=e.closest("summary");if(c&&c.parentNode!==a||c===null)return!1}return l},k=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",L=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const l=e.getRootNode();return l instanceof ShadowRoot?l:null}return e instanceof ShadowRoot?e:e.parentNode?L(e.parentNode):null},D=()=>{},C=e=>{e.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],P=e=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const l of O)l()}),O.push(e)):e()},q=()=>document.documentElement.dir==="rtl",d=e=>{P(()=>{const l=I();if(l){const a=e.NAME,c=l.fn[a];l.fn[a]=e.jQueryInterface,l.fn[a].Constructor=e,l.fn[a].noConflict=()=>(l.fn[a]=c,e.jQueryInterface)}})},u=(e,l=[],a=e)=>typeof e=="function"?e(...l):a,b=(e,l,a=!0)=>{if(!a){u(e);return}const c=5,E=p(l)+c;let A=!1;const S=({target:M})=>{M===l&&(A=!0,l.removeEventListener(t,S),u(e))};l.addEventListener(t,S),setTimeout(()=>{A||T(l)},E)},v=(e,l,a,c)=>{const E=e.length;let A=e.indexOf(l);return A===-1?!a&&c?e[E-1]:e[0]:(A+=a?1:-1,c&&(A=(A+E)%E),e[Math.max(0,Math.min(A,E-1))])};i.defineJQueryPlugin=d,i.execute=u,i.executeAfterTransition=b,i.findShadowRoot=L,i.getElement=f,i.getNextActiveElement=v,i.getTransitionDurationFromElement=p,i.getUID=h,i.getjQuery=I,i.isDisabled=k,i.isElement=w,i.isRTL=q,i.isVisible=m,i.noop=D,i.onDOMContentLoaded=P,i.parseSelector=s,i.reflow=C,i.toType=o,i.triggerTransitionEnd=T,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})})}(W,W.exports)),W.exports}/*!
  * Bootstrap event-handler.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function F(){return rt||(rt=1,function(g,_){(function(i,n){g.exports=n(V())})(R,function(i){const n=/[^.]*(?=\..*)\.|.*/,r=/\..*/,t=/::\d+$/,s={};let o=1;const h={mouseenter:"mouseover",mouseleave:"mouseout"},p=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(d,u){return u&&`${u}::${o++}`||d.uidEvent||o++}function w(d){const u=T(d);return d.uidEvent=u,s[u]=s[u]||{},s[u]}function f(d,u){return function b(v){return q(v,{delegateTarget:d}),b.oneOff&&P.off(d,v.type,u),u.apply(d,[v])}}function m(d,u,b){return function v(e){const l=d.querySelectorAll(u);for(let{target:a}=e;a&&a!==this;a=a.parentNode)for(const c of l)if(c===a)return q(e,{delegateTarget:a}),v.oneOff&&P.off(d,e.type,u,b),b.apply(a,[e])}}function k(d,u,b=null){return Object.values(d).find(v=>v.callable===u&&v.delegationSelector===b)}function L(d,u,b){const v=typeof u=="string",e=v?b:u||b;let l=O(d);return p.has(l)||(l=d),[v,e,l]}function D(d,u,b,v,e){if(typeof u!="string"||!d)return;let[l,a,c]=L(u,b,v);u in h&&(a=(U=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return U.call(this,y)})(a));const E=w(d),A=E[c]||(E[c]={}),S=k(A,a,l?b:null);if(S){S.oneOff=S.oneOff&&e;return}const M=T(a,u.replace(n,"")),$=l?m(d,b,a):f(d,a);$.delegationSelector=l?b:null,$.callable=a,$.oneOff=e,$.uidEvent=M,A[M]=$,d.addEventListener(c,$,l)}function C(d,u,b,v,e){const l=k(u[b],v,e);l&&(d.removeEventListener(b,l,!!e),delete u[b][l.uidEvent])}function I(d,u,b,v){const e=u[b]||{};for(const[l,a]of Object.entries(e))l.includes(v)&&C(d,u,b,a.callable,a.delegationSelector)}function O(d){return d=d.replace(r,""),h[d]||d}const P={on(d,u,b,v){D(d,u,b,v,!1)},one(d,u,b,v){D(d,u,b,v,!0)},off(d,u,b,v){if(typeof u!="string"||!d)return;const[e,l,a]=L(u,b,v),c=a!==u,E=w(d),A=E[a]||{},S=u.startsWith(".");if(typeof l<"u"){if(!Object.keys(A).length)return;C(d,E,a,l,e?b:null);return}if(S)for(const M of Object.keys(E))I(d,E,M,u.slice(1));for(const[M,$]of Object.entries(A)){const N=M.replace(t,"");(!c||u.includes(N))&&C(d,E,a,$.callable,$.delegationSelector)}},trigger(d,u,b){if(typeof u!="string"||!d)return null;const v=i.getjQuery(),e=O(u),l=u!==e;let a=null,c=!0,E=!0,A=!1;l&&v&&(a=v.Event(u,b),v(d).trigger(a),c=!a.isPropagationStopped(),E=!a.isImmediatePropagationStopped(),A=a.isDefaultPrevented());const S=q(new Event(u,{bubbles:c,cancelable:!0}),b);return A&&S.preventDefault(),E&&d.dispatchEvent(S),S.defaultPrevented&&a&&a.preventDefault(),S}};function q(d,u={}){for(const[b,v]of Object.entries(u))try{d[b]=v}catch{Object.defineProperty(d,b,{configurable:!0,get(){return v}})}return d}return P})}(G)),G.exports}var J={exports:{}},Z={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var at;function gt(){return at||(at=1,function(g,_){(function(i,n){g.exports=n()})(R,function(){function i(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function n(t){return t.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}return{setDataAttribute(t,s,o){t.setAttribute(`data-bs-${n(s)}`,o)},removeDataAttribute(t,s){t.removeAttribute(`data-bs-${n(s)}`)},getDataAttributes(t){if(!t)return{};const s={},o=Object.keys(t.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of o){let p=h.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1,p.length),s[p]=i(t.dataset[h])}return s},getDataAttribute(t,s){return i(t.getAttribute(`data-bs-${n(s)}`))}}})}(Z)),Z.exports}/*!
  * Bootstrap config.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function st(){return lt||(lt=1,function(g,_){(function(i,n){g.exports=n(gt(),V())})(R,function(i,n){class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,o){const h=n.isElement(o)?i.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...n.isElement(o)?i.getDataAttributes(o):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,o=this.constructor.DefaultType){for(const[h,p]of Object.entries(o)){const T=s[h],w=n.isElement(T)?"element":n.toType(T);if(!new RegExp(p).test(w))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${w}" but expected type "${p}".`)}}}return r})}(J)),J.exports}/*!
  * Bootstrap base-component.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function mt(){return ct||(ct=1,function(g,_){(function(i,n){g.exports=n(_t(),F(),st(),V())})(R,function(i,n,r,t){const s="5.3.1";class o extends r{constructor(p,T){super(),p=t.getElement(p),p&&(this._element=p,this._config=this._getConfig(T),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),n.off(this._element,this.constructor.EVENT_KEY);for(const p of Object.getOwnPropertyNames(this))this[p]=null}_queueCallback(p,T,w=!0){t.executeAfterTransition(p,T,w)}_getConfig(p){return p=this._mergeConfigObj(p,this._element),p=this._configAfterMerge(p),this._typeCheckConfig(p),p}static getInstance(p){return i.get(t.getElement(p),this.DATA_KEY)}static getOrCreateInstance(p,T={}){return this.getInstance(p)||new this(p,typeof T=="object"?T:null)}static get VERSION(){return s}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(p){return`${p}${this.EVENT_KEY}`}}return o})}(Q)),Q.exports}var X={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function K(){return ut||(ut=1,function(g,_){(function(i,n){g.exports=n(V())})(R,function(i){const n=t=>{let s=t.getAttribute("data-bs-target");if(!s||s==="#"){let o=t.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),s=o&&o!=="#"?o.trim():null}return i.parseSelector(s)},r={find(t,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,t))},findOne(t,s=document.documentElement){return Element.prototype.querySelector.call(s,t)},children(t,s){return[].concat(...t.children).filter(o=>o.matches(s))},parents(t,s){const o=[];let h=t.parentNode.closest(s);for(;h;)o.push(h),h=h.parentNode.closest(s);return o},prev(t,s){let o=t.previousElementSibling;for(;o;){if(o.matches(s))return[o];o=o.previousElementSibling}return[]},next(t,s){let o=t.nextElementSibling;for(;o;){if(o.matches(s))return[o];o=o.nextElementSibling}return[]},focusableChildren(t){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(s,t).filter(o=>!i.isDisabled(o)&&i.isVisible(o))},getSelectorFromElement(t){const s=n(t);return s&&r.findOne(s)?s:null},getElementFromSelector(t){const s=n(t);return s?r.findOne(s):null},getMultipleElementsFromSelector(t){const s=n(t);return s?r.find(s):[]}};return r})}(X)),X.exports}/*!
  * Bootstrap collapse.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(g,_){(function(i,n){g.exports=n(mt(),F(),K(),V())})(R,function(i,n,r,t){const s="collapse",h=".bs.collapse",p=".data-api",T=`show${h}`,w=`shown${h}`,f=`hide${h}`,m=`hidden${h}`,k=`click${h}${p}`,L="show",D="collapse",C="collapsing",I="collapsed",O=`:scope .${D} .${D}`,P="collapse-horizontal",q="width",d="height",u=".collapse.show, .collapse.collapsing",b='[data-bs-toggle="collapse"]',v={parent:null,toggle:!0},e={parent:"(null|element)",toggle:"boolean"};class l extends i{constructor(c,E){super(c,E),this._isTransitioning=!1,this._triggerArray=[];const A=r.find(b);for(const S of A){const M=r.getSelectorFromElement(S),$=r.find(M).filter(N=>N===this._element);M!==null&&$.length&&this._triggerArray.push(S)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return v}static get DefaultType(){return e}static get NAME(){return s}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(u).filter(N=>N!==this._element).map(N=>l.getOrCreateInstance(N,{toggle:!1}))),c.length&&c[0]._isTransitioning||n.trigger(this._element,T).defaultPrevented)return;for(const N of c)N.hide();const A=this._getDimension();this._element.classList.remove(D),this._element.classList.add(C),this._element.style[A]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const S=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(D,L),this._element.style[A]="",n.trigger(this._element,w)},$=`scroll${A[0].toUpperCase()+A.slice(1)}`;this._queueCallback(S,this._element,!0),this._element.style[A]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||n.trigger(this._element,f).defaultPrevented)return;const E=this._getDimension();this._element.style[E]=`${this._element.getBoundingClientRect()[E]}px`,t.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(D,L);for(const S of this._triggerArray){const M=r.getElementFromSelector(S);M&&!this._isShown(M)&&this._addAriaAndCollapsedClass([S],!1)}this._isTransitioning=!0;const A=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(D),n.trigger(this._element,m)};this._element.style[E]="",this._queueCallback(A,this._element,!0)}_isShown(c=this._element){return c.classList.contains(L)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=t.getElement(c.parent),c}_getDimension(){return this._element.classList.contains(P)?q:d}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(b);for(const E of c){const A=r.getElementFromSelector(E);A&&this._addAriaAndCollapsedClass([E],this._isShown(A))}}_getFirstLevelChildren(c){const E=r.find(O,this._config.parent);return r.find(c,this._config.parent).filter(A=>!E.includes(A))}_addAriaAndCollapsedClass(c,E){if(c.length)for(const A of c)A.classList.toggle(I,!E),A.setAttribute("aria-expanded",E)}static jQueryInterface(c){const E={};return typeof c=="string"&&/show|hide/.test(c)&&(E.toggle=!1),this.each(function(){const A=l.getOrCreateInstance(this,E);if(typeof c=="string"){if(typeof A[c]>"u")throw new TypeError(`No method named "${c}"`);A[c]()}})}}return n.on(document,k,b,function(a){(a.target.tagName==="A"||a.delegateTarget&&a.delegateTarget.tagName==="A")&&a.preventDefault();for(const c of r.getMultipleElementsFromSelector(this))l.getOrCreateInstance(c,{toggle:!1}).toggle()}),t.defineJQueryPlugin(l),l})})(bt);var Et={exports:{}},tt={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function At(){return dt||(dt=1,function(g,_){(function(i,n){g.exports=n(F(),st(),V())})(R,function(i,n,r){const t="backdrop",s="fade",o="show",h=`mousedown.bs.${t}`,p={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},T={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class w extends n{constructor(m){super(),this._config=this._getConfig(m),this._isAppended=!1,this._element=null}static get Default(){return p}static get DefaultType(){return T}static get NAME(){return t}show(m){if(!this._config.isVisible){r.execute(m);return}this._append();const k=this._getElement();this._config.isAnimated&&r.reflow(k),k.classList.add(o),this._emulateAnimation(()=>{r.execute(m)})}hide(m){if(!this._config.isVisible){r.execute(m);return}this._getElement().classList.remove(o),this._emulateAnimation(()=>{this.dispose(),r.execute(m)})}dispose(){this._isAppended&&(i.off(this._element,h),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const m=document.createElement("div");m.className=this._config.className,this._config.isAnimated&&m.classList.add(s),this._element=m}return this._element}_configAfterMerge(m){return m.rootElement=r.getElement(m.rootElement),m}_append(){if(this._isAppended)return;const m=this._getElement();this._config.rootElement.append(m),i.on(m,h,()=>{r.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(m){r.executeAfterTransition(m,this._getElement(),this._config.isAnimated)}}return w})}(tt)),tt.exports}var Y={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function wt(){return pt||(pt=1,function(g,_){(function(i,n){n(_,F(),K(),V())})(R,function(i,n,r,t){const s=(o,h="hide")=>{const p=`click.dismiss${o.EVENT_KEY}`,T=o.NAME;n.on(document,p,`[data-bs-dismiss="${T}"]`,function(w){if(["A","AREA"].includes(this.tagName)&&w.preventDefault(),t.isDisabled(this))return;const f=r.getElementFromSelector(this)||this.closest(`.${T}`);o.getOrCreateInstance(f)[h]()})};i.enableDismissTrigger=s,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})})}(Y,Y.exports)),Y.exports}var et={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function vt(){return ht||(ht=1,function(g,_){(function(i,n){g.exports=n(F(),K(),st())})(R,function(i,n,r){const t="focustrap",o=".bs.focustrap",h=`focusin${o}`,p=`keydown.tab${o}`,T="Tab",w="forward",f="backward",m={autofocus:!0,trapElement:null},k={autofocus:"boolean",trapElement:"element"};class L extends r{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return m}static get DefaultType(){return k}static get NAME(){return t}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),i.off(document,o),i.on(document,h,C=>this._handleFocusin(C)),i.on(document,p,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,i.off(document,o))}_handleFocusin(C){const{trapElement:I}=this._config;if(C.target===document||C.target===I||I.contains(C.target))return;const O=n.focusableChildren(I);O.length===0?I.focus():this._lastTabNavDirection===f?O[O.length-1].focus():O[0].focus()}_handleKeydown(C){C.key===T&&(this._lastTabNavDirection=C.shiftKey?f:w)}}return L})}(et)),et.exports}var it={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ft;function yt(){return ft||(ft=1,function(g,_){(function(i,n){g.exports=n(gt(),K(),V())})(R,function(i,n,r){const t=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",s=".sticky-top",o="padding-right",h="margin-right";class p{constructor(){this._element=document.body}getWidth(){const w=document.documentElement.clientWidth;return Math.abs(window.innerWidth-w)}hide(){const w=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,o,f=>f+w),this._setElementAttributes(t,o,f=>f+w),this._setElementAttributes(s,h,f=>f-w)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,o),this._resetElementAttributes(t,o),this._resetElementAttributes(s,h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(w,f,m){const k=this.getWidth(),L=D=>{if(D!==this._element&&window.innerWidth>D.clientWidth+k)return;this._saveInitialAttribute(D,f);const C=window.getComputedStyle(D).getPropertyValue(f);D.style.setProperty(f,`${m(Number.parseFloat(C))}px`)};this._applyManipulationCallback(w,L)}_saveInitialAttribute(w,f){const m=w.style.getPropertyValue(f);m&&i.setDataAttribute(w,f,m)}_resetElementAttributes(w,f){const m=k=>{const L=i.getDataAttribute(k,f);if(L===null){k.style.removeProperty(f);return}i.removeDataAttribute(k,f),k.style.setProperty(f,L)};this._applyManipulationCallback(w,m)}_applyManipulationCallback(w,f){if(r.isElement(w)){f(w);return}for(const m of n.find(w,this._element))f(m)}}return p})}(it)),it.exports}/*!
  * Bootstrap modal.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(g,_){(function(i,n){g.exports=n(mt(),F(),K(),At(),wt(),vt(),V(),yt())})(R,function(i,n,r,t,s,o,h,p){const T="modal",f=".bs.modal",m=".data-api",k="Escape",L=`hide${f}`,D=`hidePrevented${f}`,C=`hidden${f}`,I=`show${f}`,O=`shown${f}`,P=`resize${f}`,q=`click.dismiss${f}`,d=`mousedown.dismiss${f}`,u=`keydown.dismiss${f}`,b=`click${f}${m}`,v="modal-open",e="fade",l="show",a="modal-static",c=".modal.show",E=".modal-dialog",A=".modal-body",S='[data-bs-toggle="modal"]',M={backdrop:!0,focus:!0,keyboard:!0},$={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class N extends i{constructor(y,x){super(y,x),this._dialog=r.findOne(E,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new p,this._addEventListeners()}static get Default(){return M}static get DefaultType(){return $}static get NAME(){return T}toggle(y){return this._isShown?this.hide():this.show(y)}show(y){this._isShown||this._isTransitioning||n.trigger(this._element,I,{relatedTarget:y}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(v),this._adjustDialog(),this._backdrop.show(()=>this._showElement(y)))}hide(){!this._isShown||this._isTransitioning||n.trigger(this._element,L).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(l),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){n.off(window,f),n.off(this._dialog,f),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new t({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new o({trapElement:this._element})}_showElement(y){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const x=r.findOne(A,this._dialog);x&&(x.scrollTop=0),h.reflow(this._element),this._element.classList.add(l);const B=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,n.trigger(this._element,O,{relatedTarget:y})};this._queueCallback(B,this._dialog,this._isAnimated())}_addEventListeners(){n.on(this._element,u,y=>{if(y.key===k){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),n.on(window,P,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),n.on(this._element,d,y=>{n.one(this._element,q,x=>{if(!(this._element!==y.target||this._element!==x.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(v),this._resetAdjustments(),this._scrollBar.reset(),n.trigger(this._element,C)})}_isAnimated(){return this._element.classList.contains(e)}_triggerBackdropTransition(){if(n.trigger(this._element,D).defaultPrevented)return;const x=this._element.scrollHeight>document.documentElement.clientHeight,B=this._element.style.overflowY;B==="hidden"||this._element.classList.contains(a)||(x||(this._element.style.overflowY="hidden"),this._element.classList.add(a),this._queueCallback(()=>{this._element.classList.remove(a),this._queueCallback(()=>{this._element.style.overflowY=B},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const y=this._element.scrollHeight>document.documentElement.clientHeight,x=this._scrollBar.getWidth(),B=x>0;if(B&&!y){const H=h.isRTL()?"paddingLeft":"paddingRight";this._element.style[H]=`${x}px`}if(!B&&y){const H=h.isRTL()?"paddingRight":"paddingLeft";this._element.style[H]=`${x}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(y,x){return this.each(function(){const B=N.getOrCreateInstance(this,y);if(typeof y=="string"){if(typeof B[y]>"u")throw new TypeError(`No method named "${y}"`);B[y](x)}})}}return n.on(document,b,S,function(U){const y=r.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&U.preventDefault(),n.one(y,I,H=>{H.defaultPrevented||n.one(y,C,()=>{h.isVisible(this)&&this.focus()})});const x=r.findOne(c);x&&N.getInstance(x).hide(),N.getOrCreateInstance(y).toggle(this)}),s.enableDismissTrigger(N),h.defineJQueryPlugin(N),N})})(Et);class Tt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("nav-active");this.innerHTML=`
        <header class="header">
            <nav class="nav">
                <div class="nav__logo">
                    <div class="custom-container">
                        <a
                            href="https://www.bancoppel.com/main/index.html"
                            target="_blank"
                            id="lnk-logo"
                        >
                            <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
                        </a>
                    </div>
                </div>
                
                <div class="nav--menu custom-container d-block">
                        <ul class="menu font-secondary">
                            <li class="menu__item" id="nav-inicio"><a href="index.html">Inicio</a></li>
                            <li class="menu__item" id="nav-inversion"><a href="inversioncreciente.html">Inversión Creciente</a></li>
                            <li class="menu__item" id="nav-pagare"><a href="pagare.html">Pagaré</a></li>
                            
                        </ul>
                </div>
            </nav>
        </header>
                `,this.getAttribute("nav-active")&&document.getElementById(_).classList.add("menu__item--active")}}window.customElements.define("custom-header",Tt);class Ct extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
        <footer class="footer">
       <div class="custom-container">
           <a
               href="https://www.bancoppel.com/main/index.html"
               target="_blank"
           >
               <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
           </a>
          
           <div class="row">
               <div class="col-12 col-lg-3" id="acerca">
                <h3>Acerca de BanCoppel</h3>
                   <ul>
                       <li><a href="https://www.bancoppel.com/acerca_bancoppel/quienes_somos.html?v=2" target="_blank">¿Quiénes somos?</a></li>
                       <li><a href="https://www.bancoppel.com/preguntas_frecuentes/" target="_blank">Centro de Ayuda</a></li>
                       <li><a href="https://www.bancoppel.com/acerca_bancoppel/info_corp.html?v=2" target="_blank">Información corporativa</a></li>
                       <li><a href="https://www.bancoppel.com/corresponsales/index.html" target="_blank">Corresponsales</a></li>
                       <li><a href="https://www.bancoppel.com/acerca_bancoppel/ipab.html" target="_blank">Productos protegidos por IPAB</a></li>
                       <li><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank">Tarifas y comisiones</a></li>
                       <li><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a41f" target="_blank">Despachos de cobranza internos</a></li>
                       <li><a href="https://www.bancoppel.com/pdf/Despacho_de_Cobranza_Externos.pdf" target="_blank">Despachos de cobranza externos</a></li>
                       <li><a href="https://www.bancoppelapimarket.com/" target="_blank">API Market</a></li>
                        
                   </ul>
               </div>
               <div class="col-12 col-lg-6" id="unidad">
                   <h3>Unidad Especializada Bancoppel Condusef</h3>
                   
                   <p>
                       BanCoppel, S.A., Institución de Banca Múltiple recibe las consultas, reclamaciones o
                       aclaraciones en su <a href="https://bancoppel.com/pdf/unidad_especializada_bancoppel_condusef.pdf" target="_blank" id="lnk-unidadespec"><span> Unidad Especializada de Atención a Usuarios<span></a>, ubicada en 
                       Av. Insurgentes Sur 553, Interior Piso 6, Colonia Escandón II Sección, C.P. 11800, Miguel Hidalgo, Ciudad de México y 
                       por  <span> correo electrónico <a href="mailto:une@bancoppel.com" id="lnk-correobanco">une@bancoppel.com</a> </span> o <span>teléfono (55) 5278 0000 ext. 510196</span> , 
                       así como en cualquiera de sus sucursales u oficinas. En el caso de no obtener una 
                       respuesta satisfactoria, podrá acudir a la Comisión Nacional para la Protección 
                       y Defensa de los Usuarios de Servicios Financieros.
                   </p>
                   <p>
                      <span> Correo electrónico: <a href="mailto:une@bancoppel.com" id="lnk-correoasesoria">asesoria@condusef.gob.mx</a>, chat en línea 
                       <a href="https://www.condusef.gob.mx/" target="_blank" id="lnk-condusef">www.condusef.gob.mx</a> o Tel: 800 999 8080 y 55 53 40 09 99.
                      </span>   
                   </p>
               </div>
               <div class="col-12 col-lg-3" id="contacto">
                 <h3>Contacto</h3>
                   <ul>
                       <li>
                       <a 
                           href="tel:8001226773"                               
                       > 
                       Lada sin costo en México<br />
                       800-1-226-773 
                        </a>
                       </li>
                       <li>
                         <a href="tel:8662543790">
                           Desde Estados Unidos y Canadá<br />
                          866-254-3790</a>
                       </li>
                   </ul>
                   <div class="footer--socials">
                       <a href="https://www.facebook.com/BanCoppel/" target="_blank"><img
                           src="img/icon-facebook.svg"
                           title="Facebook"
                           alt="Facebook"
                       /></a>
                       <a href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg" target="_blank"><img
                           src="img/icon-youtube.svg"
                           title="Youtube"
                           alt="Youtube"
                       /></a>
                       <a href="https://www.linkedin.com/company/bancoppel/" target="_blank"><img
                           src="img/linkedin.svg"
                           title="Linkedin"
                           alt="Linkedin"
                       /></a>
                       <a href="https://www.tiktok.com/@bancoppel" target="_blank"><img
                           src="img/tiktok.svg"
                           title="Tik Tok"
                           alt="Tik Tok"
                       /></a>
                       <a href="https://wa.me/5215530559922" target="_blank"><img
                                src="img/whatsapp.svg"
                                title="Whatsapp"
                                alt="Whatsapp"
                            /></a>
                       
                   </div>
               </div>
           </div>

           <div class="footer--sponsors">
               
               <a href="https://www.bancoppel.com/modal_bcopp/buro.html" target="_blank">
                   <img src="img/buro.svg" alt="Buro" title="Buro"/>
               </a>
               <a href="https://www.fintechmexico.org/" target="_blank">
                   <img src="img/fintech.svg" alt="Fintech"  title="FINTECH"/>
               </a>
              
             
           </div>
           <div class="footer--legales">
           <p class="sitio-admin">
             Este sitio es administrado por BanCoppel.
           </p>
           <p class="sacv">
           BanCoppel S.A. Institución de Banca Múltiple es una persona moral distinta a Coppel S.A. DE C.V., así como de cualquiera de sus negocios asociados o vinculados.
           </p>    
           <p class="copyright">
                   Copyrigth 2022
                   <span class="asociacion"
                       >Bancoppel S.A Institución de Banca Múltiple</span
                   >
                   - Todos los derechos reservados
                  
               </p>
               <p id="links-legal">
                  <a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank"> Consulta costos y comisiones de nuestros productos</a>
                   <a href="https://www.bancoppel.com/acerca_bancoppel/terminos.html" target="_blank">Términos y Condiciones de Uso </a>
                   <a href="https://www.bancoppel.com/acerca_bancoppel/aviso.html" target="_blank"> Aviso de Privacidad </a>
                  
               </p>
               
           </div>
       </div>
   </footer>
   `}}window.customElements.define("custom-footer",Ct);class St extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
             <section class="app">
                <div class="custom-container">
                    <div class="row">
                        <div class="col-12 col-lg-10 col-xl-12 app--mockup">
                           <div class="img--container">

                               <picture class="image">
                                   <source
                                       srcset="img/app.webp"
                                       type="image/webp"
                                   />
                                   <img                                    
                                       srcset="/img/app.jpeg"
                                       alt="magen App Bancoppel"
                                   />
                               </picture>
                              
                                <picture class="qr">
                                    <img                                     
                                        src="img/qr-image.png"
                                        width="224" height="224"
                                        alt="imagen QR"
                                    />
                                </picture>
                           </div>
                        </div>
                        <div class="col-lg-8 app--instrucciones">
                            <picture>
                                <img src="icons/idea.svg" alt="" />
                            </picture>
                            <p>
                                Pon la cámara de tu celular frente al código QR
                                para descargar la App.
                            </p>
                        </div>
                        <div class="col-12 col-lg-10 col-xl-6 app--info">
                            <h2 class="title-underline">
                                Lleva el banco a todas partes con la App
                                BanCoppel
                            </h2>
                            <p>
                                Acude a cualquier Sucursal para firmar el
                                Contrato de Servicios Digitales, antes de usar
                                la Banca Electrónica.
                            </p>
                            <a href="https://www.bancoppel.com/geolocalizacion/index.html" target="_blank"><custom-boton tipo="primario" texto="Descargar"></custom-boton></a>
                        </div>
                    </div>
                </div>
            </section>
        `}}window.customElements.define("app-bancoppel",St);class kt extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
        <section class="legales">
        <div class="custom-container">
          <div class="row">
             <div class="col-12 legales--imagen">
                  <picture id="img-ipab">
                    <source
                        srcset="img/ipab.webp"
                        type="image/webp"
                    />
                    <img
                        src="img/ipab.png"
                        alt="image/webp"
                    />
                </picture>
               
                  <p>Inversión Creciente y Pagaré son productos garantizados por el IPAB hasta por 400 mil UDIS. <a data-bs-toggle="modal" data-bs-target="#modal-salida-ipab" id="link-ipab">www.ipab.org.mx</a></p>
               
             </div>
             <div class="col-12 legales--info">
                
                <p>Los productos anteriores solo se encuentran disponibles para su contratación en la República Mexicana.</p>
                <p>*Para hacer uso de los servicios de Banca Electrónica, es indispensable que el cliente haya firmado el contrato de servicios digitales.</p>
                <p id="link-tyc"><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank">Tabla de tasas y comisiones</a></p>
             </div>
          </div>
        </div>
    </section>
    <modal-salida id-modal="modal-salida-ipab" link-btn-salida="https://www.gob.mx/ipab"></modal-salida>
        `}}window.customElements.define("custom-legales",kt);class Dt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icon"),i=this.getAttribute("texto-badge");this.innerHTML=`
          <div class="badge">
            <img src="${_}">
            <h6>${i}</h6>
          </div>
        `}}window.customElements.define("custom-badge",Dt);class Lt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("data-id"),i=this.getAttribute("texto"),n=this.getAttribute("tipo"),r=this.getAttribute("desabilitado");this.innerHTML=`
              <button class="btn ${n}" id='${_}'  ${r?"disabled":""}>${i}</buton>`}attributeChangesCallback(_,i,n){}}window.customElements.define("custom-boton",Lt);class Nt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icon"),i=this.getAttribute("texto-badge"),n=this.getAttribute("titulo"),r=this.getAttribute("descripcion"),t=this.getAttribute("imagen"),s=this.getAttribute("imagenWebp"),o=this.getAttribute("link");this.innerHTML=`
            <a href="${o}" class="text-decoration-none">
                <div class="card card-promo">
                    <custom-badge icon="${_}" texto-badge="${i}"></custom-badge>
                    <div class="card-promo__info">
                        <h5><strong>${n}</strong></h5>
                        <p>${r}
                        </p>
                        <h6 class="link d-none"><strong>Ver más</strong></h6>
                        
                    </div>
                    <div class="card-promo__image">
                        <picture>
                            <source srcset="${s}" type="image/webp">
                            <img src="${t}" alt="" />
                        </picture>
                    </div>
                </div>
            </a>
    `}}window.customElements.define("custom-card",Nt);class xt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("alineacion"),i=this.getAttribute("flujo"),n=this.getAttribute("icono"),r=this.getAttribute("titulo-card"),t=this.getAttribute("contenido-card"),s=this.getAttribute("link-card"),o=this.getAttribute("texto-link"),h=this.getAttribute("target-link");this.innerHTML=`        
                <div
                    class="card card-icon ${_} ${i}"
                >
                    <picture>
                        <img
                            class="w-100"
                            src="${n}"
                            alt=""
                        />
                    </picture>
                    
                    ${i=="fila",'<div class="contenido"><h5>'+r+"</h5>"}
                   
                    ${t??""} 
                    
                    ${o==null?"":h!=null?'<a href="'+s+'" target="'+h+'">'+o+"</a></div>":'<a href="'+s+'">'+o+"</a></div>"} 
                </div>
            `}}window.customElements.define("custom-card-icon",xt);class Mt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("tipo"),i=this.getAttribute("campaña"),n=this.getAttribute("titulo"),r=this.getAttribute("subtitulo"),t=this.getAttribute("texto-boton"),s=this.getAttribute("link-boton"),o=this.getAttribute("id-boton"),h=this.getAttribute("imagen"),p=this.getAttribute("imagen-webp"),T=this.getAttribute("imagen-tarjeta"),w=this.getAttribute("imagen-tarjeta-webp"),f=this.getAttribute("icon"),m=this.getAttribute("texto-badge");_=="primario"?this.innerHTML=`
                <div class="hero hero-${_}"> 
                    <div class="hero--info">
                        <h1 class="title-underline">${n}</h1>
                        <p>${r}</p>

                        ${t=="hide"?"":'<a href="'+s+'"><custom-boton tipo="secundario" texto="'+t+'" data-id="'+o+'"><custom-boton></a>'}
                    </div>
                    
                    <figure class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${p}" type="image/webp">
                            <img
                                class="w-100"
                                src="${h}"
                                alt="Imagen Hero"
                            />
                        </picture>
                        ${T=="hide"?"":'<picture class="hero--img--tdc"><source srcset="'+T+'" type="image/webp"><img class="w-100" src="'+w+'" alt="Imagen Tarjeta Credito Bancoppel" /></picture>'}
                        ${f=="hide"?"":'<div class="hero--badge"><custom-badge icon="'+f+'" texto-badge="'+m+'"></custom-badge></div>'}    
                    </figure>
                    
                </div>
            `:_=="secundario"&&(this.innerHTML=`
                <div class="hero hero-${_} ${i}">
                    <div class="hero--info">
                        <h1 class="title-underline">${n}</h1>
                        <p>${r}</p>

                        ${t==null?"":'<a href="'+s+'"><custom-boton data-id="'+o+'" tipo="primario" texto="'+t+'"><custom-boton></a>'}
                    </div>
                    
                    <div class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${p}" type="image/webp">
                            <img
                                class="w-100"
                                src="${h}"
                                alt="Imagen Hero"
                            />
                        </picture>
                    </div>
                    
                </div>
            `)}}window.customElements.define("custom-hero",Mt);class Ot extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icono"),i=this.getAttribute("titulo-alert"),n=this.getAttribute("texto-alert");this.innerHTML=`
          <div class="col-12 col-lg-10 col-xl-8 alert--card">
                <picture class="alert--image">
                    <img src="${_}" alt="Icono Idea" />
                </picture>
                
                <div class="contenido">
                ${i=="hide"?"":'<h4 class="strong-circular">'+i+"</h4>"}
                   
                    ${n}
                </div>
          </div>
        `}}window.customElements.define("custom-alert",Ot);class $t extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("title"),i=this.getAttribute("content");this.innerHTML=`
                <div class="accordion-item">
                    <h2 class="accordion-button collapsed" data-bs-toggle="collapse" aria-expanded="false">
                        ${_}
                    </h2>
                    <div id="" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><p>
                        ${i}
                        </p>
                    </div>
                </div>
                `}attributeChangesCallback(_,i,n){}static get observedAttributes(){}}window.customElements.define("custom-accordion",$t);let z=document.querySelectorAll("custom-accordion");for(let g=0;g<z.length;g++)z[g].querySelector(".accordion-button").setAttribute("data-bs-target","#accordion-"+g),z[g].querySelector(".accordion-button").id="heading-"+g,z[g].querySelector(".accordion-collapse").id="accordion-"+g;class It extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("id-modal"),i=this.getAttribute("id-btn-salida"),n=this.getAttribute("link-btn-salida");this.innerHTML=`
             <div
                class="modal fade"
                id="${_}"
                tabindex="-1"
                aria-labelledby="modal-salidaLabel"
                aria-hidden="true"
                role="dialog"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-body">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <h1 id="modal-salidaLabel">
                            <strong>
                                Estás a punto de salir de 
                                Inversiones BanCoppel</strong
                            >
                        </h1>
                        <p>
                         Serás redirigido al sitio enlazado. Este sitio es responsable de
                         su propio contenido y política de privacidad.
                        </p>
                        <a
                            href="${n}"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="${i}"
                        >
                            <custom-boton
                                tipo="secundario-icon"
                                texto="Continuar"
                            ></custom-boton
                        ></a>
                    </div>
                </div>
            </div>

        `}}window.customElements.define("modal-salida",It);
