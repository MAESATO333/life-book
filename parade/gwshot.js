/* LIFE BOOK：Gateway の海辺の街で撮った写真（小さなメモ）を、絵にもどす部品。ゲームの中のアルバムや、届いた写真に使う。
   GWShot.render(メモ, 箱) … 箱（ページの中の要素）に写真の絵を入れる。Promise。 メモは文字（JSON）でも、そのままでもよい。
   GWShot.album() … このブラウザの Gateway アルバム（新しい順）。 GWShot.get(t) … t（撮った時刻）の写真。 */
(function(){
var BASE=(function(){ try{ return document.currentScript.src.replace(/[^\/]*$/,''); }catch(e){ return 'parade/'; } })();

var PP=(function(){
var R=Math.random, pk=function(a){ return a[Math.floor(R()*a.length)]; }, f1=function(v){ return (+v).toFixed(1); };
function rng(sd){ var a=(sd>>>0)||1; return function(){ a=(a+0x6D2B79F5)>>>0; var t=a; t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; }; }
var SKJ=['#FFE3CF','#F6D2B4','#F6D2B4','#F1CDA8','#F1CDA8','#E8BE98'], SKA=['#FFE3CF','#F6D2B4','#F1CDA8','#E8BE98','#D9A77E','#C99470','#A9764F','#8B5A3C','#6B4430'];
var HJ=['#1E1A1C','#2B2320','#2B2320','#3A2A22','#4A3326','#4A3326','#7A5236','#B07A4A'], HW=['#2B2320','#3A2A22','#4A3326','#7A5236','#B07A4A','#E8C77A','#F3E3B5','#B8452F','#D9C08A','#1E1A1C'], HFUN=['#5A3A6E','#F49AB5','#7FB8E0','#B8452F','#9B6BD6','#E8C77A'], HOLD=['#D9D6D2','#BDB8B2','#E9E6E2','#8E8A86','#C9C4BE'];
var SHIRTS=['#E85D75','#4E8FD9','#3FA66B','#F2C230','#F08A24','#7E57C2','#46A6E0','#FFFFFF','#34363C','#C8283A','#8CCB7E','#F49AB5','#B07A4A','#2F4F8F','#9AA1AA','#E9D9A6','#FF8FA3','#5BC0BE','#FFD166','#A0C4FF'];
var PANTS=['#2F3E5C','#3D5A80','#34363C','#C9B48A','#6B717A','#6E4630','#4A5A3C','#E6E1D6','#F49AB5','#FFFFFF'];
var HELM=['#FFFFFF','#E85D75','#2F4F8F','#F2C230','#34363C','#3FA66B','#F08A24','#9AA1AA','#46A6E0','#C8283A','#F49AB5','#7E57C2'];
var HATC=['#E85D75','#2F4F8F','#F2C230','#34363C','#3FA66B','#FFFFFF','#F08A24','#7FB8E0','#F49AB5'];
var HSF=[0,1,1,2,2,3,7,7,8,4,9,11,12,13,14,15,18,19,21,22,12,13,1,7,24], HSM=[0,0,5,6,6,1,4,10,10,16,17,18,20,20,10,23,17,0,25];
var LONG={0:1,7:1,8:1,13:1,15:1,19:1,21:1,22:1,2:1,12:1};
function shade(h,f){ var n=parseInt(h.slice(1),16); var r=Math.min(255,Math.round((n>>16)*f)), g=Math.min(255,Math.round(((n>>8)&255)*f)), b=Math.min(255,Math.round((n&255)*f)); return '#'+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1); }
function look(){ var f=R()<.6, jp=R()<.6, u=R(), st=u<.8?'adult':u<.94?'elder':'teen';
  var hair=st==='elder'?(R()<.25?pk(HJ):pk(HOLD)):jp?(R()<.1?pk(['#7A5236','#B07A4A','#9B6BD6','#F49AB5']):pk(HJ)):(R()<.12?pk(HFUN):pk(HW));
  var hs=f?pk(HSF):pk(HSM); if(st==='elder'&&!f&&R()<.3) hs=6;
  var hv=R(), hat=hv<.07?'cap':hv<.12?'beanie':hv<.16&&f?'sun':hv<.2?'brim':'';
  return { f:f, st:st, skin:jp?pk(SKJ):pk(SKA), hair:hair, hs:hs, shirt:pk(SHIRTS), pants:pk(PANTS), hat:hat, hatc:pk(HATC), gl:R()<.18?pk(['#34363C','#8A5A3C','#C9A23A','#E85D75','#2F4F8F']):'',
    beard:!f&&st!=='teen'&&R()<(jp?.08:.22), must:!f&&R()<.08, ear:f&&R()<.35, earc:pk(['#F2C230','#FFFFFF','#E85D75','#7FB8E0']), band:pk(['#E85D75','#FFFFFF','#F2C230','#7FB8E0','#3FA66B']) }; }
function base(hx,hy,hr,k,len,c,ex){ return '<path d="M'+f1(hx-hr)+' '+f1(hy+len)+' Q'+f1(hx-hr-1.4*k)+' '+f1(hy-hr-1.5*k)+' '+f1(hx+2*k)+' '+f1(hy-hr-.6*k)+' Q'+f1(hx+hr+.6*k)+' '+f1(hy-hr*.5)+' '+f1(hx+hr*.55)+' '+f1(hy-hr*.42)+' Q'+f1(hx)+' '+f1(hy-hr*.55)+' '+f1(hx-hr*.25)+' '+f1(hy-hr*.1)+' Q'+f1(hx-hr*.5)+' '+f1(hy+hr*.4)+' '+f1(hx-hr*.45)+' '+f1(hy+len)+'Z" fill="'+c+'"'+(ex||'')+'/>'; }
function C(x,y,r,c,ex){ return '<circle cx="'+f1(x)+'" cy="'+f1(y)+'" r="'+f1(r)+'" fill="'+c+'"'+(ex||'')+'/>'; }
function P(d,c,ex){ return '<path d="'+d+'" fill="'+c+'"'+(ex||'')+'/>'; }
function Ln(x1,y1,x2,y2,c,w,ex){ return '<line x1="'+f1(x1)+'" y1="'+f1(y1)+'" x2="'+f1(x2)+'" y2="'+f1(y2)+'" stroke="'+c+'" stroke-width="'+f1(w)+'" stroke-linecap="round"'+(ex||'')+'/>'; }
function hair(L,hx,hy,hr){ var k=hr/9, c=L.hair, hs=L.hs, s='', X=function(a){ return f1(hx+hr*a); }, Y=function(b){ return f1(hy+hr*b); };
  var len={1:.85,9:.85,11:.85,7:1.7,8:1.7,2:.5,3:.5,12:.5,14:.5,13:.4,15:1.5,19:1.4,21:1.4,22:1.7,24:1.0,18:.4,20:.35,16:.2,23:.35,25:.3}[hs]; if(len==null) len=hs===0?(L.f?1.25:.35):.35; len*=hr;
  if(hs===4){ [[-.7,-.7],[-.1,-1],[.5,-.85],[-1,-.1],[-.95,.45]].forEach(function(p){ s+=C(hx+hr*p[0],hy+hr*p[1],hr*.48,c); }); return s; }
  if(hs===17){ [[-.95,.2],[-.9,-.4],[-.55,-.85],[0,-1.02],[.5,-.85],[-1.0,.65]].forEach(function(p){ s+=C(hx+hr*p[0],hy+hr*p[1],hr*.36,c); }); return s; }
  if(hs===6) return P('M'+X(-.98)+' '+Y(-.05)+' Q'+X(-.9)+' '+Y(-1.05)+' '+X(.3)+' '+Y(-.98)+' Q'+X(.7)+' '+Y(-.85)+' '+X(.5)+' '+Y(-.6)+' Q'+X(-.2)+' '+Y(-.75)+' '+X(-.6)+' '+Y(-.1)+'Z',c,' opacity=".85"');
  // うしろ側に出る毛（先に描く）
  if(hs===2) s+=P('M'+X(-.7)+' '+Y(-.5)+' Q'+X(-2)+' '+Y(-.1)+' '+X(-1.6)+' '+Y(1.3)+' Q'+X(-1.1)+' '+Y(.2)+' '+X(-.6)+' '+Y(-.1)+'Z',c);
  if(hs===12){ s+=P('M'+X(-.8)+' '+Y(-.2)+' Q'+X(-1.9)+' '+Y(.3)+' '+X(-1.5)+' '+Y(1.6)+' Q'+X(-1.15)+' '+Y(.5)+' '+X(-.6)+' '+Y(.2)+'Z',shade(c,.85))+P('M'+X(-.6)+' '+Y(-.6)+' Q'+X(-1.6)+' '+Y(-.4)+' '+X(-1.35)+' '+Y(1.2)+' Q'+X(-1.0)+' '+Y(0)+' '+X(-.45)+' '+Y(-.2)+'Z',c); }
  if(hs===13) s+=P('M'+X(-.5)+' '+Y(-.95)+' Q'+X(-1.8)+' '+Y(-1.3)+' '+X(-1.95)+' '+Y(.9)+' Q'+X(-1.5)+' '+Y(-.3)+' '+X(-.6)+' '+Y(-.55)+'Z',c);
  if(hs===24) s+=P('M'+X(-.9)+' '+Y(.1)+' Q'+X(-1.5)+' '+Y(1.2)+' '+X(-1.0)+' '+Y(2.0)+' Q'+X(-.7)+' '+Y(1.1)+' '+X(-.55)+' '+Y(.4)+'Z',c);
  s+=base(hx,hy,hr,k,len,c);
  if(hs===2) s+=C(hx-hr*.85,hy-hr*.42,1.3*k,'#E85D75');
  if(hs===12) s+=C(hx-hr*.78,hy-hr*.05,1.3*k,'#E85D75');
  if(hs===13) s+=C(hx-hr*.62,hy-hr*.8,1.3*k,'#F2C230');
  if(hs===24) s+=C(hx-hr*.8,hy+hr*.25,1.2*k,'#7FB8E0');
  if(hs===3) s+=C(hx-hr*.55,hy-hr*.95,hr*.42,c);
  if(hs===21) s+=C(hx-hr*.75,hy-hr*.75,hr*.32,c);
  if(hs===14) s+=C(hx-hr*.25,hy-hr*1.05,hr*.36,c)+C(hx-hr*.95,hy-hr*.5,hr*.36,c);
  if(hs===8) s+=Ln(hx-hr*.7,hy,hx-hr*.9,hy+hr*1.9,c,2.6*k,' stroke-dasharray="'+f1(1.6*k)+' '+f1(.5*k)+'"');
  if(hs===9) s+='<path d="M'+X(-1.05)+' '+Y(.8)+' q'+f1(-3*k)+' '+f1(2*k)+' '+f1(-4*k)+' '+f1(-1*k)+' M'+X(-.5)+' '+Y(.95)+' q'+f1(1*k)+' '+f1(2.6*k)+' '+f1(-1.6*k)+' '+f1(2.6*k)+'" stroke="'+c+'" stroke-width="'+f1(2.2*k)+'" fill="none" stroke-linecap="round"/>';
  if(hs===15) [.3,.75,1.2].forEach(function(b){ s+=C(hx-hr*1.0,hy+hr*b,hr*.28,c); });
  if(hs===10) s+=Ln(hx-hr*.1,hy-hr*.95,hx+hr*.2,hy-hr*.55,shade(c,1.6),.8*k);
  if(hs===11||hs===22) s+=P('M'+X(-.2)+' '+Y(-.9)+' Q'+X(.8)+' '+Y(-.9)+' '+X(.85)+' '+Y(-.2)+' L'+X(.2)+' '+Y(-.35)+'Z',c);
  if(hs===18) s+=P('M'+X(-1.05)+' '+Y(.25)+' Q'+X(-1.12)+' '+Y(-1.25)+' '+X(.2)+' '+Y(-1.12)+' Q'+X(1.02)+' '+Y(-.92)+' '+X(.95)+' '+Y(-.28)+' L'+X(-.3)+' '+Y(-.3)+' L'+X(-.5)+' '+Y(.25)+'Z',c);
  if(hs===19) s+='<path d="M'+X(-1.02)+' '+Y(-.15)+' Q'+X(-.6)+' '+Y(-1.2)+' '+X(.62)+' '+Y(-.62)+'" stroke="'+L.band+'" stroke-width="'+f1(2*k)+'" fill="none" stroke-linecap="round"/>';
  if(hs===16) s+=P('M'+X(-.85)+' '+Y(-.55)+' L'+X(-.45)+' '+Y(-1.65)+' L'+X(.05)+' '+Y(-1.35)+' L'+X(.3)+' '+Y(-1.6)+' L'+X(.55)+' '+Y(-.75)+'Z',c);
  if(hs===20) s+=C(hx+hr*.15,hy-hr*.98,hr*.42,c);
  if(hs===23) s+=P('M'+X(-.6)+' '+Y(-.85)+' Q'+X(.3)+' '+Y(-1.45)+' '+X(.95)+' '+Y(-.55)+' Q'+X(.3)+' '+Y(-.9)+' '+X(-.6)+' '+Y(-.55)+'Z',shade(c,1.25));
  if(hs===25) s+=P('M'+X(-1.0)+' '+Y(-.1)+' Q'+X(-1.2)+' '+Y(-1.1)+' '+X(-.2)+' '+Y(-1.25)+' Q'+X(-.6)+' '+Y(-.8)+' '+X(-.7)+' '+Y(-.1)+'Z',c);
  if(hs===5) s+='<path d="M'+X(-.8)+' '+Y(-.8)+' l'+f1(1*k)+' '+f1(-4*k)+' l'+f1(2*k)+' '+f1(3.4*k)+' l'+f1(2*k)+' '+f1(-4.2*k)+' l'+f1(2*k)+' '+f1(3.8*k)+' l'+f1(2.2*k)+' '+f1(-3.6*k)+' l'+f1(1.4*k)+' '+f1(4.4*k)+'Z" fill="'+c+'"/>';
  return s; }
function hat(L,hx,hy,hr){ var k=hr/9, c=L.hatc, X=function(a){ return f1(hx+hr*a); }, Y=function(b){ return f1(hy+hr*b); };
  if(L.hat==='cap') return P('M'+X(-1.05)+' '+Y(-.25)+' Q'+X(-.95)+' '+Y(-1.4)+' '+X(.15)+' '+Y(-1.28)+' Q'+X(.95)+' '+Y(-1.08)+' '+X(.9)+' '+Y(-.4)+'Z',c)+P('M'+X(.5)+' '+Y(-.52)+' L'+X(1.75)+' '+Y(-.4)+' Q'+X(1.65)+' '+Y(-.18)+' '+X(.5)+' '+Y(-.28)+'Z',shade(c,.8))+C(hx-hr*.2,hy-hr*1.26,.9*k,shade(c,.8));
  if(L.hat==='beanie') return P('M'+X(-1.1)+' '+Y(-.1)+' Q'+X(-1.08)+' '+Y(-1.5)+' '+X(0)+' '+Y(-1.38)+' Q'+X(1.02)+' '+Y(-1.28)+' '+X(.97)+' '+Y(-.32)+'Z',c)+Ln(hx-hr*1.08,hy-hr*.22,hx+hr*.97,hy-hr*.42,shade(c,.82),3*k)+C(hx-hr*.15,hy-hr*1.48,2.3*k,c===('#FFFFFF')?'#E85D75':'#FFFFFF');
  if(L.hat==='sun') return '<ellipse cx="'+X(0)+'" cy="'+Y(-.62)+'" rx="'+f1(hr*1.85)+'" ry="'+f1(hr*.3)+'" fill="#E9D9A6"/>'+P('M'+X(-.85)+' '+Y(-.6)+' Q'+X(-.8)+' '+Y(-1.5)+' '+X(0)+' '+Y(-1.45)+' Q'+X(.8)+' '+Y(-1.45)+' '+X(.82)+' '+Y(-.66)+'Z','#E9D9A6')+Ln(hx-hr*.84,hy-hr*.8,hx+hr*.82,hy-hr*.82,c,2*k);
  if(L.hat==='brim') return P('M'+X(-1.06)+' '+Y(-.25)+' Q'+X(-.9)+' '+Y(-1.35)+' '+X(.2)+' '+Y(-1.25)+' Q'+X(.95)+' '+Y(-1.05)+' '+X(.9)+' '+Y(-.35)+'Z',c)+'<rect x="'+X(.3)+'" y="'+Y(-.48)+'" width="'+f1(hr*.95)+'" height="'+f1(2*k)+'" rx="'+f1(k)+'" fill="'+shade(c,.8)+'"/>';
  return ''; }
function face(L,hx,hy,hr,helm){ var k=hr/9, s='';
  if(L.beard&&!helm) s+=P('M'+f1(hx-hr*.35)+' '+f1(hy+hr*.35)+' Q'+f1(hx+hr*.1)+' '+f1(hy+hr*1.15)+' '+f1(hx+hr*.85)+' '+f1(hy+hr*.55)+' Q'+f1(hx+hr*.4)+' '+f1(hy+hr*.75)+' '+f1(hx-hr*.2)+' '+f1(hy+hr*.3)+'Z',L.st==='elder'?'#D9D6D2':L.hair);
  if(L.must&&!L.beard) s+='<path d="M'+f1(hx+4.4*k)+' '+f1(hy+3.4*k)+' q'+f1(2.2*k)+' '+f1(-1.4*k)+' '+f1(4.6*k)+' '+f1(.2*k)+'" stroke="'+(L.st==='elder'?'#BDB8B2':L.hair)+'" stroke-width="'+f1(1.4*k)+'" fill="none" stroke-linecap="round"/>';
  if(L.ear&&!helm) s+=C(hx-hr*.25,hy+hr*.4,1*k,L.earc);
  if(L.f) s+=Ln(hx+5.4*k,hy-1.6*k,hx+7*k,hy-2.6*k,'#3B2A24',.7*k)+C(hx+6.6*k,hy+4.4*k,.9*k,'#E8607A');
  if(L.gl) s+=C(hx+4.9*k,hy-.8*k,2.3*k,'none',' stroke="'+L.gl+'" stroke-width="'+f1(.8*k)+'"')+Ln(hx+2.6*k,hy-1.2*k,hx-hr*.3,hy-1.6*k,L.gl,.7*k);
  return s; }
function tail(L,hx,hy,hr){ return P('M'+f1(hx-hr*.7)+' '+f1(hy+hr*.1)+' Q'+f1(hx-hr*1.9)+' '+f1(hy+hr*.4)+' '+f1(hx-hr*1.5)+' '+f1(hy+hr*1.6)+' Q'+f1(hx-hr*1.1)+' '+f1(hy+hr*.7)+' '+f1(hx-hr*.5)+' '+f1(hy+hr*.5)+'Z',L.hair); }
return function(str,seed){ var R0=R; if(seed!=null) R=rng(seed); try{ return str.replace(/<g class="rv-rider"([^>]*)>([\s\S]*?)<\/g>/g,function(m,at,body){ var h=/data-h="([^"]*)"/.exec(at); if(!h) return m; var a=h[1].split(',').map(Number), hx=a[0], hy=a[1], hr=a[2], helm=a[3], L=look();
    var hc=pk(HELM); body=body.split('#010101').join(L.skin).split('#030303').join(L.shirt).split('#040404').join(L.pants).split('#050505').join(hc);
    body=body.replace('<!--H-->',helm?face(L,hx,hy,hr,1):hair(L,hx,hy,hr)+hat(L,hx,hy,hr)+face(L,hx,hy,hr,0)).replace('<!--P-->',helm&&L.f&&LONG[L.hs]?tail(L,hx,hy,hr):'');
    return '<g class="rv-rider"'+at+'>'+body+'</g>'; }); } finally { R=R0; } };
})();

/* Higher Self の名前：見ている人と、その友だち（このブラウザでLIFE BOOKを遊んでいるとき）。なければ、運営者ページが届けた本当の友だちのつながり。どちらもないときは名前を出さない */
var HS=(function(){
var R=Math.random, pk=function(a){ return a[Math.floor(R()*a.length)]; };
var N=[], F=[], ME=-1, ON={}; // ON＝いま画面のどこかに乗っている人（同じ人が2か所に出ないように）
function free(i){ return !ON[i]; }
function link(a,b){ if(a!==b&&F[a]&&F[b]){ F[a][b]=1; F[b][a]=1; } }
function fr(i){ return Object.keys(F[i]).map(Number); }
function fof(i){ var s={}; fr(i).forEach(function(b){ fr(b).forEach(function(c){ if(c!==i&&!F[i][c]&&free(c)) s[c]=1; }); }); return Object.keys(s).map(Number); }
function shuffle(a){ for(var i=a.length-1;i>0;i--){ var j=Math.floor(R()*(i+1)), t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function ls(k){ try{ var v=localStorage.getItem(k); if(v==null) return null; try{ return JSON.parse(v); }catch(e){ return v; } }catch(e){ return null; } }
// 1) このブラウザの自分と友だち
(function(){ var me=ls('hitotsu.myname'), L=ls('hitotsu.friends'), fof=ls('hitotsu.fof')||{}; var ids={};
  if(typeof me==='string'&&me.trim()){ ME=N.length; N.push(me.trim().slice(0,20)); F.push({}); }
  if(Array.isArray(L)) L.forEach(function(x){ if(!x||!x.id||!x.by||ids[x.id]!=null) return; ids[x.id]=N.length; N.push(String(x.by).slice(0,20)); F.push({}); if(ME>=0) link(ME,ids[x.id]); });
  try{ Object.keys(fof).forEach(function(a){ var o=fof[a]; if(ids[a]==null||!o||!Array.isArray(o.fr)) return; o.fr.forEach(function(y){ if(y&&ids[y.i]!=null) link(ids[a],ids[y.i]); }); }); }catch(e){} })();
var LOCAL=N.length>0;
// 2) 本当の友だちのつながり（運営者ページが os/parade に、Higher Self名と「だれとだれが友だちか」だけを書く）
if(!LOCAL) try{ fetch('https://firestore.googleapis.com/v1/projects/lifebook-dcae9/databases/(default)/documents/os/parade').then(function(r){ return r.ok?r.json():null; }).then(function(d){ try{ var j=JSON.parse(d.fields.j.stringValue); if(N.length||!j.n||!j.e) return; var n=j.n.map(function(x){ return String(x).slice(0,20); }); var f=n.map(function(){ return {}; }); N=n; F=f; j.e.forEach(function(q){ if(N[q[0]]!=null&&N[q[1]]!=null) link(q[0],q[1]); }); }catch(er){} }).catch(function(){}); }catch(er){}
function group(k){ if(!N.length) return null;
  if(LOCAL){ // 自分ひとり・友だちひとり・自分と友だち・友だち同士
    var others=[]; for(var i=0;i<N.length;i++) if(i!==ME&&free(i)) others.push(i); var meOk=ME>=0&&free(ME);
    if(!others.length&&!meOk) return null;
    if(k<=1||!others.length) return [meOk&&(R()<.4||!others.length)?ME:pk(others)];
    var m=[]; if(meOk&&R()<.55) m.push(ME); var a=pk(others); if(m.indexOf(a)<0) m.push(a);
    shuffle(fr(a).filter(function(b){ return b!==ME&&free(b); })).forEach(function(b){ if(m.length<k&&m.indexOf(b)<0) m.push(b); });
    shuffle(others).forEach(function(b){ if(m.length<k&&m.indexOf(b)<0&&R()<.5) m.push(b); }); return shuffle(m); }
  var c=[]; for(var i2=0;i2<N.length;i2++) if(Object.keys(F[i2]).length&&free(i2)) c.push(i2); if(!c.length) return null; var a2=pk(c);
  if(k<=1) return [a2]; if(R()<.3){ var o2=fof(a2); if(o2.length) return [a2,pk(o2)]; } var m2=[a2]; shuffle(fr(a2)).forEach(function(b){ if(m2.length<k&&free(b)&&m2.every(function(x){ return F[x][b]; })) m2.push(b); });
  if(m2.length<k) shuffle(fr(a2)).forEach(function(b){ if(m2.length<k&&free(b)&&m2.indexOf(b)<0) m2.push(b); }); return m2; }
var NS='http://www.w3.org/2000/svg';
function esc(t){ return String(t).replace(/[&<>"]/g,function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
function tw(t,fs){ return t.length*fs*(/^[\x00-\x7F]+$/.test(t)?.62:1)+fs*1.1; }
function pill(x,y,t,fs){ var w=tw(t,fs), h=fs*1.45;
  return '<g class="hs-tag"><rect x="'+(x-w/2).toFixed(1)+'" y="'+(y-h).toFixed(1)+'" width="'+w.toFixed(1)+'" height="'+h.toFixed(1)+'" rx="'+(h/2).toFixed(1)+'" fill="#FFFFFF" fill-opacity=".92" stroke="#F06C9B" stroke-width="'+(fs*.12).toFixed(2)+'"/><text x="'+x.toFixed(1)+'" y="'+(y-h*.3).toFixed(1)+'" font-size="'+fs.toFixed(1)+'" text-anchor="middle" fill="#4A3B47" font-weight="700">'+esc(t)+'</text></g>'; }
// 乗り物 e（ページに入れたあと）に、名前のふだを付ける
var tag=function(e,fs,force){ if(!force&&!N.length) return; var rs=e.querySelectorAll('.rv-rider'); if(!rs.length||(!force&&R()<.12)) return; var inv=e.getCTM(); if(!inv) return; inv=inv.inverse(); var H=[];
  for(var q=0;q<rs.length;q++){ var r=rs[q], c=null; for(var i=0;i<r.children.length;i++){ var ch=r.children[i]; if(ch.tagName==='circle'&&+ch.getAttribute('r')>5){ c=ch; break; } } if(!c) continue; var M=c.getCTM(); if(!M) continue; M=inv.multiply(M);
    var cx=+c.getAttribute('cx'), cy=+c.getAttribute('cy'), rr=+c.getAttribute('r'); H.push({x:M.a*cx+M.c*cy+M.e, y:M.b*cx+M.d*cy+M.f, r:Math.abs(M.d)*rr}); }
  if(!H.length) return; H.sort(function(a,b){ return a.x-b.x; });
  var G, st, NM, LB=0, seats;
  if(force){ st=force[0]; NM=force[1]; LB=force[2]; seats=H.slice(st,st+NM.length); if(!seats.length) return; NM=NM.slice(0,seats.length); }
  else { var k=H.length<=2?H.length:Math.min(H.length,pk([1,2,2,3,3,4])); G=group(k); if(!G||!G.length) return; k=Math.min(k,G.length);
  st=Math.floor(R()*(H.length-k+1)); seats=H.slice(st,st+k); NM=G.slice(0,seats.length).map(function(i){ return N[i]; }); }
  var s='', lv=[], top=1e9, base=Math.min.apply(null,seats.map(function(h){ return h.y-h.r*1.35-fs*.3; }));
  seats.forEach(function(h,i){ var t=NM[i], w=tw(t,fs), L=0; // ふだが重ならないよう、段をずらす
    while((lv[L]||[]).some(function(o){ return Math.abs(o.x-h.x)<(o.w+w)/2+fs*.3; })) L++; (lv[L]=lv[L]||[]).push({x:h.x,w:w});
    var yy=(seats.length>1?base:h.y-h.r*1.35-fs*.3)-L*fs*1.7; s+=pill(h.x,yy,t,fs); top=Math.min(top,yy-fs*1.45); });
  if(seats.length>=2){ var all; if(force) all=LB!==2; else { var mm=G.slice(0,seats.length); all=true; for(var x=0;x<mm.length;x++) for(var y=x+1;y<mm.length;y++) if(!F[mm[x]][mm[y]]) all=false; } LB=all?1:2;
    var minx=Math.min.apply(null,seats.map(function(h){ return h.x; })), maxx=Math.max.apply(null,seats.map(function(h){ return h.x; }));
    s+='<text x="'+((minx+maxx)/2).toFixed(1)+'" y="'+(top-fs*.35).toFixed(1)+'" font-size="'+(fs*.9).toFixed(1)+'" text-anchor="middle" fill="#E0457B" font-weight="700" stroke="#FFFFFF" stroke-width="'+(fs*.28).toFixed(2)+'" paint-order="stroke">'+(all?'♡ 友だち':'友だちの友だち')+'</text>'; }
  var g=document.createElementNS(NS,'g'); g.innerHTML=s; e.appendChild(g); e._tag=[st,NM,seats.length>=2?LB:0]; if(!force){ var used=G.slice(0,seats.length); used.forEach(function(i){ ON[i]=1; }); e._hs=used; } };
tag.on=ON; return tag;
})();
function hsFree(e){ try{ (e._hs||[]).forEach(function(i){ delete HS.on[i]; }); }catch(er){} }
// 写真（小さなメモ）から、その場面の絵をもう一度つくる。host はページの中にある箱（名前のふだの位置を測るため）
function gwRender(rec,D,host){ var wide=!!rec.w, bg=wide?D.bgW:D.bgN, v=bg.vb.split(' ').map(Number), X0=v[0], W=v[2];
  var tr='<rect x="'+X0+'" y="118" width="'+W+'" height="4" fill="#9AA3AE"/>'; for(var px=X0+14;px<X0+W;px+=46) tr+='<rect x="'+px+'" y="122" width="5" height="48" fill="#B4BCC6" opacity=".85"/>';
  var cars=''; rec.c.forEach(function(c){ var sp=D.spr[c[0]]; if(!sp) return; var g=PP(sp.g,c[4]); cars+='<g class="gw-car" transform="translate('+c[1]+' '+c[2]+')">'+(c[3]<0?'<g transform="translate('+sp.w+' 0) scale(-1 1)">'+g+'</g>':g)+'</g>'; });
  host.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="gw-photo" viewBox="'+bg.vb+'" preserveAspectRatio="xMidYMid slice" role="img" aria-label="海辺の街の写真"><g>'+PP(bg.inner,rec.b)+'</g>'+tr+cars+'</svg>';
  var gs=host.querySelectorAll('.gw-car'), j=0; rec.c.forEach(function(c){ if(!D.spr[c[0]]) return; var e=gs[j++]; if(c[5]&&e) try{ HS(e,wide?4.4:6.6,c[5]); }catch(er){} }); return host.firstChild; }

var DD=null, Q=null; function data(){ if(DD) return Promise.resolve(DD); if(!Q) Q=fetch(BASE+'parade.json').then(function(r){ return r.json(); }).then(function(d){ DD=d; return d; }); return Q; }
try{ var st=document.createElement('style'); st.textContent='.gw-photo{display:block;width:100%;height:auto}.gw-photo .pd-sb{display:none}'; document.head.appendChild(st); }catch(e){}
function alb(){ try{ var a=JSON.parse(localStorage.getItem('hitotsu.gwAlbum')||'[]'); return Array.isArray(a)?a:[]; }catch(e){ return []; } }
window.GWShot={ render:function(rec,host){ return data().then(function(d){ return gwRender(typeof rec==='string'?JSON.parse(rec):rec,d,host); }); },
  album:alb, get:function(t){ return alb().filter(function(r){ return String(r.t)===String(t); })[0]||null; } };
})();
