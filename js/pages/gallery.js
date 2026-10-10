/* GALLERY PAGE */
pages['/gallery']=()=>[`<h2 class="ttl">The <em>polaroid</em> wall</h2><p class="sub">${N} little moments, pinned up. Tap any one to see it big. Swipe or use the arrow keys.</p><div class="mas">${IM.map((s,i)=>pol(i,'rv')).join('')}</div>`,rv];
