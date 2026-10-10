/* PLAY PAGE */
pages['/play']=()=>[`<h2 class="ttl">Little <em>games</em></h2><div class="tabs"><button class="btn" id="t1">Memory</button><button class="btn g" id="t2">Catch hearts</button></div><div id="gm"></div>`,()=>{
 const gm=$('#gm');let stop=()=>{};const sel=t=>{stop();$('#t1').className='btn'+(t?' g':'');$('#t2').className='btn'+(t?'':' g');t?hr():mem()};$('#t1').onclick=()=>sel(0);$('#t2').onclick=()=>sel(1);off.push(()=>stop());
 function mem(){const ids=MEMORY_PHOTOS.map(n=>n-1),dk=[...ids,...ids].sort(()=>Math.random()-.5);let a=null,lock=0,mv=0,ok=0;
  gm.innerHTML=`<p class="sub" id="mi">Match the pairs · moves: 0 · best: ${ld('best','none yet')}</p><div class="mg">${dk.map(i=>`<div class="mc" data-i="${i}"><div><i>♥</i><img src="${IM[i]}" alt=""></div></div>`).join('')}</div>`;
  $$('.mc',gm).forEach(c=>c.onclick=()=>{if(lock||c.classList.contains('f'))return;c.classList.add('f');if(!a){a=c;return}mv++;$('#mi').textContent=`Match the pairs · moves: ${mv} · best: ${ld('best','none yet')}`;
   if(a.dataset.i==c.dataset.i){a.classList.add('ok');c.classList.add('ok');a=null;if(++ok==8){if(mv<ld('best',99))sv('best',mv);$('#mi').textContent=`You did it in ${mv} moves 🎉`;burst(innerWidth/2,innerHeight/2,140)}}
   else{lock=1;setTimeout(()=>{a.classList.remove('f');c.classList.remove('f');a=null;lock=0},800)}})}
 function hr(){gm.innerHTML=`<p class="sub" id="hi">Drag to move the basket · 25 seconds</p><canvas class="hc" id="hc" width="320" height="420"></canvas>`;const c=$('#hc'),g=c.getContext('2d');let H=[],bx=160,sc=0,t=25,f=0,id,live=1;
  c.onpointermove=e=>bx=(e.clientX-c.getBoundingClientRect().left)*320/c.clientWidth;const iv=setInterval(()=>{if(--t<=0){live=0;clearInterval(iv);$('#hi').textContent=`Time! You caught ${sc} hearts 💗`;if(sc>15)burst(innerWidth/2,innerHeight/2,100)}},1000);
  (function l(){g.clearRect(0,0,320,420);if(live&&++f%28==0)H.push({x:rnd(20,300),y:-10,v:rnd(2,4.5)});g.font='26px serif';g.textAlign='center';
   H.forEach(h=>{h.y+=h.v;g.fillText('💗',h.x,h.y);if(h.y>372&&h.y<400&&Math.abs(h.x-bx)<38){h.y=999;sc++}});H=H.filter(h=>h.y<420);g.fillText('🧺',bx,410);g.font='16px sans-serif';g.fillStyle='#ffc77a';g.fillText(`♥ ${sc}   ⏱ ${t}`,160,24);id=requestAnimationFrame(l)})();stop=()=>{live=0;clearInterval(iv);cancelAnimationFrame(id)}}
 mem()}];
