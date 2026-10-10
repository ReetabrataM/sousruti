/* app.js : menu, routing (back button), opening-page password lock. (Normally no need to edit) */
$('#gn').textContent=NAME;$('#gh').innerHTML=`Happy <em>${AGE}${sfx(AGE)} Birthday</em>`;$$('.gp img').forEach((e,i)=>e.src=IM[GATE_CORNERS[i]-1]);
/* router */
const NV=[['/','Home','🏠','Home'],['/gallery','Polaroid Wall','📸','Wall'],['/school','Since School Days','🎒','School'],['/story','Our Story','🎞️','Story'],['/letter','A Letter','💌','Letter'],['/reasons','Jar of Notes','🫙','Notes'],['/cake','Your Cake','🎂','Cake'],['/play','Games','🎮','Games'],['/fortune','Fortune Teller','🔮','Fortune'],['/surprise','One More Thing','✨','Surprise']];
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
const pins=$$('#pin input');let un=0;
$('#gate').addEventListener('pointerdown',()=>{if(un)return;un=1;AU.muted=true;AU.play().then(()=>{AU.pause();AU.currentTime=0;AU.muted=false}).catch(()=>AU.muted=false)},{once:true});
function unlock(){$('#lm').textContent='Welcome, beautiful ♥';pins.forEach(i=>i.blur());setTimeout(()=>{$('#gate').classList.add('off');ac();burst(innerWidth/2,innerHeight*.8,150);rain(60);AU.play().catch(()=>{})},700)}
function chkp(){const v=pins.map(i=>i.value).join('');if(v.length<4)return;if(v===PW)unlock();else{$('#pin').classList.add('bad');$('#lm').textContent='Hmm, not quite… think again ♥';setTimeout(()=>{$('#pin').classList.remove('bad');pins.forEach(i=>i.value='');pins[0].focus()},700)}}
pins.forEach((el,i)=>{el.oninput=()=>{el.value=el.value.replace(/\\D/g,'').slice(-1);if(el.value&&i<3)pins[i+1].focus();chkp()};el.onkeydown=e=>{if(e.key=='Backspace'&&!el.value&&i>0){pins[i-1].focus();pins[i-1].value=''}};el.onpaste=e=>{e.preventDefault();const d=(e.clipboardData.getData('text')||'').replace(/\\D/g,'').slice(0,4);d.split('').forEach((c,k)=>pins[k].value=c);pins[Math.min(d.length,3)].focus();chkp()}});
if(matchMedia('(pointer:fine)').matches)pins[0].focus();
$('#logo').onclick=()=>{rain(80);burst(innerWidth/2,150,80)};
