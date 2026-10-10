/* SURPRISE PAGE */
pages['/surprise']=()=>[`<div class="sp"><p class="hand">one more thing…</p><h2 class="q">${NAME}, will you let me take you out for a birthday <em>coffee &amp; cake</em>? Just us, and far too many photos.</h2><div class="ys"><button class="btn" id="yes">Yes ♥</button> <button class="btn g" id="no">No</button></div><p class="sub" id="sm"></p></div>`,()=>{
 let n=0;const no=$('#no'),yes=$('#yes'),dodge=()=>{n++;no.style.transform=`translate(${rnd(-110,110)}px,${rnd(-50,60)}px) scale(${Math.max(.4,1-n*.08)})`;yes.style.transform=`scale(${1+n*.1})`;if(n>4)$('#sm').textContent='Nice try 😌'};
 no.onpointerenter=dodge;no.onclick=dodge;
 yes.onclick=()=>{$('.q').innerHTML='You just made my <em>entire year</em> ✨';$('.ys').remove();$('#sm').textContent='Happy Birthday, Sou. I\'ll plan everything. ♥';for(let i=0;i<6;i++)setTimeout(()=>burst(rnd(100,innerWidth-100),rnd(100,innerHeight/2),120),i*350);rain(90);bday()}}];
