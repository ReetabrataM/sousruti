/* CAKE PAGE */
pages['/cake']=()=>{const cs=[96,128,150,172,204];
const art=`<g id="cakeart"><rect x="40" y="150" width="220" height="70" rx="14" fill="#e9707f"/><rect x="70" y="100" width="160" height="56" rx="12" fill="#ffc77a"/><path d="M40 164q18 22 36 0t36 0 36 0 36 0 36 0 40 0v-14H40z" fill="#fff6ec"/><path d="M70 112q16 20 32 0t32 0 32 0 32 0 32 0v-12H70z" fill="#fff6ec"/></g>`;
return[`<h2 class="ttl">Make a <em>wish</em>, then cut the cake</h2><p class="sub" id="cm">Light the candles first. Tap them one by one, or all at once.</p>
<svg class="cake" id="ck" viewBox="0 36 300 214"><defs>${art}<clipPath id="kf"><rect width="300" height="300"/></clipPath><clipPath id="kb"><rect width="210" height="300"/></clipPath><clipPath id="ks"><rect x="210" width="90" height="300"/></clipPath><g id="face"><rect width="9" y="100" height="120" fill="#fff0d6"/><rect width="9" y="126" height="5" fill="#e9707f"/><rect width="9" y="190" height="6" fill="#e9707f"/></g></defs>
<ellipse cx="150" cy="226" rx="140" ry="18" fill="#000" opacity=".2"/>
<use id="base" href="#cakeart" clip-path="url(#kf)"/><use class="cfc" id="cf1" href="#face" x="201" style="opacity:0"/>
<g id="sl"><use href="#cakeart" clip-path="url(#ks)"/><use class="cfc" id="cf2" href="#face" x="210" style="opacity:0"/></g>
${cs.map(c=>`<g class="c"><rect x="${c-4}" y="66" width="8" height="34" rx="3" fill="#f3e2c7"/><g class="fl"><ellipse cx="${c}" cy="56" rx="7" ry="12" fill="#ffb347"/><ellipse cx="${c}" cy="59" rx="3.5" ry="7" fill="#fff3a0"/></g><circle cx="${c}" cy="68" r="22" fill="transparent"/></g>`).join('')}
<g id="kn" opacity="0" transform="translate(212 -10)"><rect x="-6" y="-38" width="12" height="38" rx="4" fill="#7a3a4a"/><path d="M-4 0H4V74L-4 82Z" fill="#e6ecf2" stroke="#9aa7b4" stroke-width="1"/></g></svg>
<div class="row"><button class="btn" id="lt">🔥 Light the candles</button><button class="btn" id="bl">💨 Blow</button></div><div class="row"><button class="btn" id="cu">🔪 Cut the cake</button><button class="btn g" id="sg">🎵 Birthday song</button></div>`,()=>{
 off.push(birthdayStop);const k=$('#ck'),m=$('#cm'),C=$$('.c',k),base=$('#base'),sl=$('#sl'),kn=$('#kn'),f1=$('#cf1'),f2=$('#cf2'),cu=$('#cu');let had=0,done=0,cutting=0,isCut=0;
 const lit=()=>C.filter(c=>c.classList.contains('lit')).length;
 const light=c=>{c.classList.add('lit');had=1;done=0;m.textContent=lit()==C.length?'All lit. Close your eyes, make a wish, then blow!':lit()+' of '+C.length+' lit'};
 const out=c=>{if(!c.classList.contains('lit'))return;c.classList.remove('lit');if(!lit()&&had&&!done){done=1;m.textContent='🎉 Happy Birthday! Hope your wish comes true ♥ Now cut the cake!';burst(innerWidth/2,innerHeight/3,160);rain(40)}};
 C.forEach(c=>c.onclick=()=>c.classList.contains('lit')?out(c):light(c));
 $('#lt').onclick=()=>C.forEach((c,i)=>setTimeout(()=>light(c),i*220));
 $('#bl').onclick=()=>{if(!lit()){m.textContent='Light the candles first 🔥';return}C.forEach((c,i)=>setTimeout(()=>out(c),i*180))};
 $('#sg').onclick=birthdayStart;
 const ease=p=>1-Math.pow(1-p,3),tw=(d,f,cb)=>{const t0=performance.now();(function s(t){const p=Math.min(1,(t-t0)/d);f(p);p<1?requestAnimationFrame(s):cb&&cb()})(t0)};
 cu.onclick=()=>{if(cutting)return;
  if(isCut){isCut=0;base.setAttribute('clip-path','url(#kf)');sl.setAttribute('transform','');f1.style.opacity=0;f2.style.opacity=0;cu.textContent='🔪 Cut the cake';m.textContent='A fresh cake, just for you. Cut it again!';return}
  cutting=1;kn.setAttribute('opacity',1);m.textContent='Slicing…';if(!bdMode)birthdayStart();
  tw(650,p=>kn.setAttribute('transform',`translate(212 ${-10+158*ease(p)})`),()=>{
   base.setAttribute('clip-path','url(#kb)');f1.style.opacity=1;f2.style.opacity=1;burst(innerWidth/2,innerHeight/2,90);
   tw(1000,p=>{const e=ease(p);sl.setAttribute('transform',`translate(${46*e} ${12*e}) rotate(${15*e} 210 220)`);kn.setAttribute('opacity',1-e)},()=>{cutting=0;isCut=1;cu.textContent='↺ Whole cake again';m.textContent='🍰 First slice is yours, and it is the biggest one.';rain(30)})})};
}]};
