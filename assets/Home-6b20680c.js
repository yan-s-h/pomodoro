import{u as F}from"./list-ed8248cd.js";import{g as H,o as W,a as M,b as U,n as j,u as B,r as I,w as q,c as x,s as E,d as S,e as w,f as T,V as R,h as _,i as P,t as b,j as C,k as N}from"./index-3ca0c78d.js";import{u as $}from"./settings-87a735b7.js";import{V as A,a as z}from"./VRow-72e42cbb.js";function O(t){return H()?(W(t),!0):!1}function k(){const t=new Set,n=s=>{t.delete(s)};return{on:s=>{t.add(s);const a=()=>n(s);return O(a),{off:a}},off:n,trigger:s=>Promise.all(Array.from(t).map(a=>a(s)))}}function D(t){return typeof t=="function"?t():B(t)}const J=typeof window<"u",K=()=>{};function Q(t,n=!0){M()?U(t):n?t():j(t)}function X(t){var n;const o=D(t);return(n=o==null?void 0:o.$el)!=null?n:o}const G=J?window:void 0;function Y(...t){let n,o,e,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([o,e,s]=t,n=G):[n,o,e,s]=t,!n)return K;Array.isArray(o)||(o=[o]),Array.isArray(e)||(e=[e]);const a=[],f=()=>{a.forEach(u=>u()),a.length=0},p=(u,r,i,c)=>(u.addEventListener(r,i,c),()=>u.removeEventListener(r,i,c)),g=q(()=>[X(n),D(s)],([u,r])=>{f(),u&&a.push(...o.flatMap(i=>e.map(c=>p(u,i,c,r))))},{immediate:!0,flush:"post"}),v=()=>{g(),f()};return O(v),v}function Z(){const t=I(!1);return M()&&U(()=>{t.value=!0}),t}function tt(t){const n=Z();return x(()=>(n.value,!!t()))}function et(t={}){const{window:n=G}=t,o=tt(()=>!!n&&"Notification"in n),e=I(null),s=async()=>{o.value&&"permission"in Notification&&Notification.permission!=="denied"&&await Notification.requestPermission()},{on:a,trigger:f}=k(),{on:p,trigger:g}=k(),{on:v,trigger:u}=k(),{on:r,trigger:i}=k(),c=async m=>{if(!o.value)return;await s();const l=Object.assign({},t,m);return e.value=new Notification(l.title||"",l),e.value.onclick=f,e.value.onshow=g,e.value.onerror=u,e.value.onclose=i,e.value},d=()=>{e.value&&e.value.close(),e.value=null};if(Q(async()=>{o.value&&await s()}),O(d),o.value&&n){const m=n.document;Y(m,"visibilitychange",l=>{l.preventDefault(),m.visibilityState==="visible"&&d()})}return{isSupported:o,notification:e,show:c,close:d,onClick:a,onShow:p,onError:v,onClose:r}}const it={__name:"Home",setup(t){const n=F(),{items:o,currentItem:e,timeleft:s}=E(n),{countdown:a,setCurrentItem:f,setFinishItem:p}=n,g=$(),{selectedAlarmFile:v,notify:u}=E(g),r={STOP:0,COUNTING:1,PAUSE:2},i=I(r.STOP);let c=0;const d=()=>{i.value===r.STOP&&o.value.length>0&&f(),e.value.length!==0&&(i.value=r.COUNTING,c=setInterval(()=>{a(),s.value===0&&l()},1e3))},m=()=>{i.value=r.PAUSE,clearInterval(c)},l=()=>{clearInterval(c),i.value=r.STOP;const h=new Audio;if(h.src=v.value,h.play(),u.value){const{show:y}=et({title:"Task Completed",body:V.value,icon:"https://cdn-icons-png.flaticon.com/128/5511/5511410.png"});y()}p(),o.value.length>0&&d()},V=x(()=>e.value.length>0?e.value:o.value.length>0?"Click to Start":"No Tasks"),L=x(()=>{const h=Math.floor(s.value/60).toString().padStart(2,"0"),y=(s.value%60).toString().padStart(2,"0");return h+":"+y});return(h,y)=>(S(),w(R,{class:"background"},{default:T(()=>[_(z,{class:"text-center"},{default:T(()=>[_(A,{cols:"12",class:"mt-10 mt-lg-16"}),_(A,{cols:"12",class:"mt-lg-16"},{default:T(()=>[P("h1",null,b(V.value),1),P("h1",null,b(L.value),1)]),_:1}),_(A,{cols:"12"},{default:T(()=>[i.value!==r.COUNTING?(S(),w(C,{key:0,variant:"text",icon:"mdi-play",onClick:d})):N("",!0),i.value===r.COUNTING?(S(),w(C,{key:1,variant:"text",icon:"mdi-pause",onClick:m})):N("",!0),B(e).length>0?(S(),w(C,{key:2,variant:"text",icon:"mdi-skip-next",onClick:l})):N("",!0)]),_:1})]),_:1})]),_:1}))}};export{it as default};