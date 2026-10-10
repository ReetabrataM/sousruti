/* HOME PAGE */
const bunting=()=>{const W=Math.max(innerWidth,360),n=Math.round(W/52),sg=W>700?34:22,C=['#e8456a','#ff9a5a','#f4b942','#6fae94','#8f6fd6','#ff8fb0'];let f='';
 for(let i=0;i<n;i++){const x=(i+.5)*W/n-17,t=(x+17)/W,y=6+4*sg*t*(1-t);f+=`<polygon class="fg" points="${x},${y} ${x+34},${y} ${x+17},${y+46}" fill="${C[i%6]}" style="animation-delay:${(i%7)*.25}s"/>`}
 return`<svg class="bunt" viewBox="0 0 ${W} 110"><path d="M0 6Q${W/2} ${6+2*sg} ${W} 6"/>${f}</svg>`};
const ringHTML=()=>`<div class="stage" id="st"><div class="sc"><div class="ring" id="rg" style="--n:${N}">${IM.map((s,i)=>`<img data-i="${i}" style="--i:${i}" src="${s}" alt="">`).join('')}</div></div></div>`;
/* phone version of the centrepiece: a big round photo in the middle, every other photo orbiting around it */
const orbitHTML=()=>`<div class="orb" id="orb"><svg class="orbpath" viewBox="0 0 100 100"><circle cx="50" cy="50" r="43"/></svg><div class="spin">${IM.map((s,i)=>`<button class="ot" data-k="${i}" aria-label="photo ${i+1}" style="--a:${(i/N*360).toFixed(2)}deg"><i><img src="${s}" alt=""></i></button>`).join('')}</div><div class="core"><img id="cimg" data-i="0" src="${IM[0]}" alt=""></div></div>`;
function orbit(){const img=$('#cimg'),ts=$$('.ot');let k=0,iv;
 const show=i=>{k=i;img.style.opacity=0;setTimeout(()=>{img.src=IM[k];img.dataset.i=k;img.style.opacity=1},220);ts.forEach((t,j)=>t.classList.toggle('on',j==k))};
 const auto=()=>{clearInterval(iv);iv=setInterval(()=>show((k+1)%N),3000)};
 ts.forEach(t=>t.onclick=e=>{e.stopPropagation();show(+t.dataset.k);auto()});show(0);auto();off.push(()=>clearInterval(iv))}
const strip=(a,c='')=>`<div class="strip ${c}"><div class="trk">${a.concat(a).map(i=>pol(i)).join('')}</div></div>`;
function balloons(box,onpop){const C=['#e8456a','#ff9a5a','#f4b942','#6fae94','#8f6fd6','#ff8fb0'];let alive=0;
 const mk=()=>{if(alive>=(innerWidth<760?5:8)||!box.isConnected)return;alive++;const b=document.createElement('div'),c=C[Math.floor(Math.random()*C.length)];b.className='bl';
  b.style.cssText=`left:${rnd(2,90)}%;--d:${rnd(10,17)}s;--s:${rnd(.8,1.3)};--sw:${rnd(8,26)}px;--h:${box.clientHeight+260}px`;
  b.innerHTML=`<svg viewBox="0 0 60 100"><ellipse cx="30" cy="34" rx="25" ry="31" fill="${c}"/><ellipse cx="21" cy="22" rx="6" ry="9" fill="#fff" opacity=".35"/><path d="M30 65l-5 8h10z" fill="${c}"/><path d="M30 73q-7 10 0 18t0 9" stroke="#8a6a70" fill="none" stroke-width="1.5"/></svg>`;
  b.onanimationend=e=>{if(e.target===b){b.remove();alive--}};
  b.onclick=e=>{e.stopPropagation();const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height*.35,40,.7);try{note(rnd(170,260),0,.12,.25)}catch(x){}b.remove();alive--;onpop()};
  box.appendChild(b)};
 for(let i=0;i<5;i++)setTimeout(mk,i*450);const iv=setInterval(mk,1400);off.push(()=>clearInterval(iv))}
pages['/']=()=>{const ids=IM.map((_,i)=>i),A=ids.filter(i=>i%2==0),B=ids.filter(i=>i%2==1).reverse(),mob=innerWidth<760;
return[`<section class="hero"><div class="hbox">${bunting()}<div class="bals" id="bals"></div></div>
<p class="hand">it's finally here ✦</p><h1>Happy <span class="n20">${AGE}<sup>${sfx(AGE)}</sup></span> Birthday, <em>${NAME}</em></h1>
<div class="rw">${mob?orbitHTML():ringHTML()}
<div class="badge"><svg viewBox="0 0 120 120"><defs><path id="bp" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0"/></defs><text font-size="10.5" font-weight="700" fill="#fff"><textPath href="#bp" textLength="283" lengthAdjust="spacing">happy ${AGE}${sfx(AGE)} birthday ✦ happy ${AGE}${sfx(AGE)} birthday ✦ </textPath></text></svg><b>${AGE}</b></div></div>
<p class="hint">${mob?'tap a photo to bring it to the middle':'drag to spin · tap a photo'} · pop the balloons 🎈</p><p class="pops" id="pops"></p>
<p class="sub">A little corner of the internet that sounds like acoustic guitar and smells like chai. Press play, scroll slow.</p></section>
<section class="t20"><div class="b20" id="b20">${AGE}</div><p class="hand">${AGE} years of you</p><p class="sub">Welcome to your ${AGE=='20'||AGE==20?'twenties':'next chapter'}. Be loud, be soft, be unreasonably happy.</p></section>
${strip(A)}${strip(B,'r')}
<a class="sf rv" href="#/school">${SCH_ART}<div class="sft"><small>where it all began</small><h3>${SCHOOL}</h3><p>Midnapore · the back bench, shared tiffin and the same silly jokes. We grew up. The jokes didn't.</p><span>read our school story →</span></div></a>
<section class="toc"><p class="hand" style="text-align:center">the contents of this little book</p><h2 class="ttl">Where to <em>next?</em></h2><div class="tl2">${CT.map(([h,t,d,k],i)=>`<a class="ti rv" href="#${h}" style="--r:${i%2?3:-3}deg"><small>${String(i+1).padStart(2,'0')}</small><div><b>${t}</b><span>${d}</span></div><i class="lead"></i><figure><img src="${IM[k-1]}" alt=""></figure><em>→</em></a>`).join('')}</div></section>
<div class="end"><p>That's everything I made for you.</p><button class="btn" id="cf1">Throw some confetti 🎉</button></div>`,()=>{
 if(mob)orbit();else{const st=$('#st'),sc=$('.sc',st),rg=$('#rg');const s=Math.min(1,innerWidth/640);sc.style.transform=`scale(${s})`;st.style.height=545*s+'px';st.style.marginTop=-70*s+'px';
 let rot=0,v=.15,dn=0,lx=0,mv=0,id;const lp=()=>{rot+=v;if(!dn)v+=(.15-v)*.02;rg.style.transform=`rotateX(-8deg) rotateY(${rot}deg)`;id=requestAnimationFrame(lp)};lp();
 st.onpointerdown=e=>{dn=1;lx=e.clientX;mv=0};addEventListener('pointerup',()=>dn=0);
 st.onpointermove=e=>{if(dn){const d=e.clientX-lx;lx=e.clientX;rot+=d*.4;v=d*.4;mv+=Math.abs(d)}};
 st.addEventListener('click',e=>{if(mv>6)e.stopPropagation()},true);off.push(()=>cancelAnimationFrame(id))}
 let pops=0;balloons($('#bals'),()=>{pops++;$('#pops').textContent=pops>=AGE?`🎉 ${AGE} balloons for your ${AGE}${sfx(AGE)}!`:`${pops} popped 🎈`;if(pops==AGE){burst(innerWidth/2,innerHeight/3,220);rain(80)}});
 $('#b20').onclick=()=>{burst(innerWidth/2,innerHeight/2,170);rain(50)};$('#cf1').onclick=()=>{burst(innerWidth/2,innerHeight/2,200);rain(70)};rv()}]};
