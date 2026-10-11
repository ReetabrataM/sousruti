/* app.js : menu, routing (back button), opening-page password lock. (Normally no need to edit) */
$('#gn .bi').textContent=NAME;$('#vn .bi').textContent=NAME;$('#gn').dataset.t=NAME;$('#vn').dataset.t=NAME;$$('.vault .o img').forEach((e,i)=>e.src=IM[GATE_CORNERS[i]-1]);$('#gh').innerHTML=`Happy <em>${AGE}${sfx(AGE)} Birthday</em>`;$$('.gp img').forEach((e,i)=>e.src=IM[GATE_CORNERS[i]-1]);
/* router */
const NV=[['/','Home','🏠','Home'],['/gallery','Polaroid Wall','📸','Wall'],['/school','Since School Days','🎒','School'],['/story','Our Story','🎞️','Story'],['/letter','A Letter','💌','Letter'],['/reasons','Jar of Notes','🫙','Notes'],['/cake','Your Cake','🎂','Cake'],['/play','Games','🎮','Games'],['/fortune','Fortune Teller','🔮','Fortune']];
$('#dn').innerHTML=NV.map(([h,n,e,s])=>`<a href="#${h}">${s}</a>`).join('');
$('#nav').innerHTML=NV.map(([h,n,e],i)=>`<a href="#${h}" style="--k:${i}"><small>${String(i+1).padStart(2,'0')}</small>${n}<span>${e}</span></a>`).join('');
const mn=$('#menu'),mb=$('#mb'),tm=o=>{mn.classList.toggle('on',o);mb.classList.toggle('on',o);document.body.style.overflow=o?'hidden':''};
mb.onclick=()=>tm(!mn.classList.contains('on'));addEventListener('keydown',e=>e.key=='Escape'&&tm(false));mn.onclick=e=>{if(e.target.closest('a')||e.target==mn)tm(false)};
const stack=[],SC={};let cur=null;history.scrollRestoration='manual';
function go(){const raw=(location.hash.slice(1)||'/').split('?')[0],pg=pages[raw]?raw:'/';if(cur!==null)SC[cur]=scrollY;
 let back=false;if(stack.length>1&&stack[stack.length-2]===pg){stack.pop();back=true}else if(stack[stack.length-1]!==pg)stack.push(pg);cur=pg;
 off.forEach(f=>f());off=[];const[h,i]=pages[pg]();const a=$('#app');a.className='';a.innerHTML=h;void a.offsetWidth;a.className='in';
 scrollTo(0,back?(SC[pg]||0):0);if(back)setTimeout(()=>scrollTo(0,SC[pg]||0),150);
 $$('#nav a,#dn a').forEach(l=>l.classList.toggle('on',l.getAttribute('href')=='#'+pg));tm(false);$('#bk').style.display=pg=='/'?'none':'grid';i()}
$('#bk').onclick=()=>{const prev=stack[stack.length-2];if(prev===undefined){location.hash='#/';return}const h=location.hash;history.back();setTimeout(()=>{if(location.hash===h)location.hash='#'+prev},250)};
addEventListener('hashchange',go);go();

/* ---- the face moves inside the name: the photo glides so her face passes through the letters S, o, u and back ----
   GATE_FACE = [x, y, size] = where the face is in the name photo (0 to 1). The default fits the default photo.
   If you change GATE_PHOTO in config.js, you can add a line there:  const GATE_FACE = [0.5, 0.4, 0.2]; */
(function(){
 const F=(typeof GATE_FACE!=='undefined')?GATE_FACE:[0.53,0.485,0.22];
 const el=$('#gn .bi'),gate=$('#gate'),img=new Image();img.src=IM[GATE_PHOTO-1];
 const setup=()=>{if(!img.naturalWidth||!el.offsetWidth||!el.firstChild)return;
  const Wb=el.offsetWidth,Hb=el.offsetHeight,r=img.naturalHeight/img.naturalWidth,fx=F[0],fy=F[1],fw=F[2];
  const Wi=Math.min(Math.max(Hb*0.78/fw,Wb*1.6),Wb*3),Hi=Wi*r,t=el.firstChild,rg=document.createRange(),eb=el.getBoundingClientRect(),cs=[];
  for(let i=0;i<t.length;i++){rg.setStart(t,i);rg.setEnd(t,i+1);const b=rg.getBoundingClientRect();cs.push(b.left-eb.left+b.width/2)}
  const cl=v=>Math.max(0,Math.min(100,v)),px=c=>cl((fx*Wi-c)/(Wi-Wb)*100),py=cl((fy*Hi-Hb/2)/(Hi-Hb)*100),s=gate.style;
  s.setProperty('--fsz',(Wi/Wb*100).toFixed(1)+'%');s.setProperty('--fx0',px(cs[0]).toFixed(1)+'%');s.setProperty('--fx1',px(cs[cs.length-1]).toFixed(1)+'%');s.setProperty('--fy',py.toFixed(1)+'%')};
 const go=()=>{try{setup()}catch(e){}};
 (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(()=>img.decode?img.decode().then(go,go):go());
})();
/* ---- opening page: floating sparkles + hearts (cheap, transform/opacity only) ---- */
(function(){const g=$('#gate'),L=document.createElement('div');L.className='fx2';let h='';
 for(let i=0;i<16;i++)h+=`<s style="left:${rnd(2,98).toFixed(1)}%;top:${rnd(2,96).toFixed(1)}%;--d:${rnd(2,5).toFixed(1)}s;--s:${Math.round(rnd(5,11))}px;animation-delay:-${rnd(0,4).toFixed(1)}s"></s>`;
 for(let i=0;i<9;i++)h+=`<u style="left:${rnd(4,94).toFixed(1)}%;--d:${rnd(9,16).toFixed(1)}s;--z:${Math.round(rnd(14,26))}px;animation-delay:-${rnd(0,14).toFixed(1)}s">♥</u>`;
 L.innerHTML=h;g.insertBefore(L,g.firstChild)})();
/* ---- password: ONE hidden input feeds four display boxes (no focus jumping, no keyboard flicker) ---- */
const pi=$('#pi'),boxes=$$('.pin b'),lk=$('#lk'),gate=$('#gate');let un=0,busy=0;
const say=t=>{$('#lm').textContent=t;$('#vm').textContent=t};
const render=()=>{const v=pi.value,f=document.activeElement===pi;boxes.forEach((b,i)=>{const k=i%4;b.querySelector('span').textContent=v[k]||'';b.classList.toggle('f',!!v[k]);b.classList.toggle('on',f&&k===Math.min(v.length,3))});gate.classList.toggle('typing',f)};
gate.addEventListener('pointerdown',()=>{if(un)return;un=1;AU.muted=true;AU.play().then(()=>{AU.pause();AU.currentTime=0;AU.muted=false}).catch(()=>AU.muted=false)},{once:true});
gate.addEventListener('click',e=>{if(!busy&&e.target.closest('.lock,.vault'))pi.focus({preventScroll:true})});
pi.addEventListener('focus',render);pi.addEventListener('blur',render);
function unlock(){busy=1;gate.classList.add('done');pi.blur();R.classList.remove('hid');lk.classList.add('open');say('Welcome, beautiful ♥');
 setTimeout(()=>gate.classList.add('off'),650);
 setTimeout(()=>{ac();const m=innerWidth<700;burst(innerWidth/2,innerHeight*.5,m?50:120);rain(m?16:50);AU.play().catch(()=>{})},1300);
 setTimeout(()=>R.classList.remove('locked'),1700)}
function wrong(){busy=1;$$('.pin').forEach(p=>p.classList.add('bad'));say('Hmm, not quite… think again ♥');setTimeout(()=>{$$('.pin').forEach(p=>p.classList.remove('bad'));pi.value='';render();busy=0},650)}
pi.addEventListener('input',()=>{pi.value=pi.value.replace(/\D/g,'').slice(0,4);render();if(pi.value.length===4&&!busy)pi.value===PW?unlock():wrong()});
if(matchMedia('(pointer:fine)').matches)pi.focus();
/* warm up: decode the photos quietly while she types, so the home page appears without a hitch */
(function(){let i=0;const nx=()=>{if(i>=IM.length)return;const im=new Image();im.src=IM[i++];(im.decode?im.decode():Promise.resolve()).catch(()=>{}).then(()=>setTimeout(nx,90))};setTimeout(nx,1200)})();
$('#logo').onclick=()=>{rain(80);burst(innerWidth/2,150,80)};