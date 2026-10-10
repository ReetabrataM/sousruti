/* FORTUNE PAGE */
pages['/fortune']=()=>{
 const TR=[['Rose','#e8456a','120,8 232,120 120,120',157,86],['Gold','#e9a62f','232,120 120,232 120,120',157,160],['Sage','#6fae94','120,232 8,120 120,120',83,160],['Violet','#8f6fd6','8,120 120,8 120,120',83,86]];
 return[`<h2 class="ttl">The school days <em>fortune teller</em></h2><p class="sub" id="fp">Remember making these in class? Pick a colour.</p><div class="ctw"><svg id="ct" viewBox="0 0 240 240"><g id="cg">${TR.map(([n,c,p])=>`<polygon points="${p}" fill="${c}" data-c="${n}"/>`).join('')}${TR.map(([n,c,p,x,y])=>`<text x="${x}" y="${y}">${n}</text>`).join('')}</g></svg></div><div class="row" id="co"></div>`,()=>{
 const fp=$('#fp'),co=$('#co'),cg=$('#cg');let st=0,n2=0;
 const snap=(n,cb)=>{let i=0;const iv=setInterval(()=>{cg.classList.toggle('sn');fp.textContent=(Math.floor(i/2)+1)+'…';if(++i>=n*2){clearInterval(iv);cg.classList.remove('sn');cb()}},330);off.push(()=>clearInterval(iv))};
 const opts=a=>co.innerHTML=a.map(n=>`<button class="btn g" data-n="${n}">${n}</button>`).join('');
 $$('#ct polygon').forEach(p=>p.onclick=()=>{if(st)return;st=1;snap(p.dataset.c.length,()=>{fp.textContent='Now pick a number';opts([1,2,3,4]);st=2})});
 co.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.id=='ag'){st=0;co.innerHTML='';fp.textContent='Pick a colour again.';return}const n=+b.dataset.n;
  if(st==2){st=3;n2=n;co.innerHTML='';snap(n,()=>{fp.textContent='One more, pick again';opts([5,6,7,8]);st=4})}
  else if(st==4){st=5;co.innerHTML='';snap(n-4,()=>{fp.textContent='Your fortune says…';co.innerHTML=`<div class="fort"><p>${FT[(n2>2?4:0)+(n-5)]}</p></div><button class="btn" id="ag">Play again</button>`;burst(innerWidth/2,innerHeight/2,100)})}}}]};
