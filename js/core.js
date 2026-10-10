/* core.js : helpers, background petals, confetti, sounds, music, photo viewer. (Normally no need to edit) */
const IM=PHOTOS,N=IM.length;
const sfx=n=>(n%100>=11&&n%100<=13)?'th':({1:'st',2:'nd',3:'rd'}[n%10]||'th');
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const rnd=(a,b)=>a+Math.random()*(b-a),sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
const R=document.documentElement;R.style.setProperty('--ph',`url(${new URL(IM[GATE_PHOTO-1],document.baseURI).href})`);
R.dataset.theme='light';
const tb=()=>$('#th').textContent=R.dataset.theme=='dark'?'☀':'☾';tb();$('#th').onclick=()=>{R.dataset.theme=R.dataset.theme=='dark'?'light':'dark';tb()};
/* petals */
const bg=$('#bg'),b=bg.getContext('2d');let FF=[],mx=0,my=0;
function rb(){bg.width=innerWidth;bg.height=innerHeight;FF=Array.from({length:Math.min(18,innerWidth/50)},()=>({x:rnd(0,bg.width),y:rnd(0,bg.height),r:rnd(5,10),t:rnd(0,6),vy:rnd(.25,.6),a:rnd(0,6)}))}rb();addEventListener('resize',rb);
(function f(t){b.clearRect(0,0,bg.width,bg.height);const c=getComputedStyle(R).getPropertyValue('--pt');
FF.forEach(s=>{s.y+=s.vy;s.a+=.01;if(s.y>bg.height+20){s.y=-20;s.x=rnd(0,bg.width)}b.save();b.translate(s.x+Math.sin(t/1800+s.t)*30+mx*s.r*6,s.y);b.rotate(s.a+Math.sin(t/1200+s.t));b.fillStyle=`rgba(${c},.32)`;b.beginPath();b.ellipse(0,0,s.r,s.r*.55,0,0,6.3);b.fill();b.restore()});requestAnimationFrame(f)})(0);
/* particles */
const fx=$('#fx'),x=fx.getContext('2d');let P=[],run=0;
function rf(){const d=Math.min(2,devicePixelRatio||1);fx.width=innerWidth*d;fx.height=innerHeight*d;x.setTransform(d,0,0,d,0,0)}rf();addEventListener('resize',rf);
const CL=['#e8456a','#ff9a5a','#f4b942','#7fb69e','#b79bff'];
function burst(px,py,n=90,sp=1){for(let i=0;i<n;i++){const a=rnd(0,6.28),v=rnd(2,9)*sp;P.push({x:px,y:py,vx:Math.cos(a)*v,vy:Math.sin(a)*v-3,g:.13,l:1,d:rnd(.007,.016),c:CL[i%5],s:rnd(3,8),h:Math.random()<.3})}tick()}
function rain(n=70){for(let i=0;i<n;i++)P.push({x:rnd(0,innerWidth),y:rnd(-300,-20),vx:rnd(-1,1),vy:rnd(1.5,3.5),g:.01,l:1,d:.0035,c:CL[i%5],s:rnd(5,11),h:1});tick()}
function tick(){if(run)return;run=1;(function f(){x.clearRect(0,0,innerWidth,innerHeight);P=P.filter(p=>p.l>0&&p.y<innerHeight+40);
P.forEach(p=>{p.vx*=.99;p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.l-=p.d;x.globalAlpha=Math.max(p.l,0);x.fillStyle=p.c;if(p.h){x.font=p.s*2.4+'px serif';x.fillText('♥',p.x,p.y)}else x.fillRect(p.x,p.y,p.s,p.s*.5)});
P.length?requestAnimationFrame(f):(run=0,x.clearRect(0,0,innerWidth,innerHeight))})()}
let lt=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;if(e.timeStamp-lt>40){lt=e.timeStamp;P.push({x:e.clientX,y:e.clientY,vx:rnd(-.6,.6),vy:rnd(-1,-.2),g:-.01,l:1,d:.035,c:'#ffc77a',s:3,h:0});tick()}});
addEventListener('click',e=>{if(!e.target.closest('input,#dock'))burst(e.clientX,e.clientY,12,.5)});
/* synth (cake song + acoustic ambient) */
let AC,mg;
function ac(){if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)();mg=AC.createGain();mg.gain.value=.6;const d=AC.createDelay(),f=AC.createGain();d.delayTime.value=.3;f.gain.value=.3;d.connect(f);f.connect(d);mg.connect(d);d.connect(AC.destination);mg.connect(AC.destination)}AC.resume();return AC}
function note(fr,t=0,l=1.3,v=.17){const a=ac(),o=a.createOscillator(),g=a.createGain(),s=a.currentTime+t;o.type='triangle';o.frequency.value=fr;g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(v,s+.015);g.gain.exponentialRampToValueAtTime(.0001,s+l);o.connect(g);g.connect(mg);o.start(s);o.stop(s+l+.1)}
const F=n=>261.63*2**(n/12);
function bday(){AU.volume=.25;setTimeout(()=>AU.volume=.9,14000);let t=0;[[0,.75],[0,.25],[2,1],[0,1],[5,1],[4,2],[0,.75],[0,.25],[2,1],[0,1],[7,1],[5,2],[0,.75],[0,.25],[12,1],[9,1],[5,1],[4,1],[2,2],[10,.75],[10,.25],[9,1],[5,1],[7,1],[5,2]].forEach(([n,d])=>{note(F(n),t,d*.6+.6,.2);t+=d*.52})}
/* Husn (music/husn.mp3) */
const AU=$('#au'),mu=$('#mu');AU.volume=.9;AU.onerror=()=>mu.style.display='none';AU.onplay=()=>mu.style.opacity=1;AU.onpause=()=>mu.style.opacity=.45;
/* Birthday song (music/birthday.mp3): plays on the cake page while the cake is cut. Husn pauses, then resumes when she leaves the page.
   If birthday.mp3 is missing, the built-in tune (bday) is played instead. */
const BDA=$('#bd');let bdOK=true,bdMode=false,huWas=false;
BDA.onerror=()=>{bdOK=false};BDA.onplay=()=>{mu.style.opacity=1};BDA.onpause=()=>{if(bdMode)mu.style.opacity=.45};
function birthdayStart(){
 if(!bdMode){huWas=!AU.paused;AU.pause()}
 bdMode=true;
 if(bdOK){BDA.currentTime=0;BDA.play().catch(()=>{bdOK=false;bday()})}else bday();
}
function birthdayStop(){
 if(!bdMode)return;bdMode=false;BDA.pause();BDA.currentTime=0;
 if(huWas)AU.play().catch(()=>{});else mu.style.opacity=.45;huWas=false;
}
mu.onclick=()=>{if(bdMode){BDA.paused?BDA.play().catch(()=>{}):BDA.pause();return}AU.paused?AU.play().catch(()=>{}):AU.pause()};
/* lightbox */
const lb=$('#lb'),li=$('img',lb);let ci=0,tx0=0;
function show(i){ci=(i+N)%N;li.style.animation='none';li.offsetWidth;li.style.animation='';li.src=IM[ci];$('#lc').textContent=`${ci+1} / ${N}`;lb.classList.add('on')}
$('.x',lb).onclick=()=>lb.classList.remove('on');$('.pv',lb).onclick=()=>show(ci-1);$('.nx',lb).onclick=()=>show(ci+1);lb.onclick=e=>{if(e.target==lb)lb.classList.remove('on')};
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')lb.classList.remove('on');if(e.key=='ArrowLeft')show(ci-1);if(e.key=='ArrowRight')show(ci+1)});
li.onpointerdown=e=>tx0=e.clientX;li.onpointerup=e=>{const d=e.clientX-tx0;if(Math.abs(d)>50)show(ci+(d<0?1:-1))};
document.addEventListener('click',e=>{const t=e.target.closest('img[data-i]');if(t)show(+t.dataset.i)});
/* helpers + data */
let off=[];const rv=()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add('v'),io.unobserve(e.target))),{threshold:.1});$$('.rv').forEach(e=>io.observe(e));off.push(()=>io.disconnect())};
const pol=(i,c='',r=rnd(-3,3))=>`<figure class="pl ${c}" style="--r:${r}deg"><img data-i="${i}" src="${IM[i]}" alt=""><figcaption>${CAP[i%CAP.length]}</figcaption></figure>`;
const pages={};
