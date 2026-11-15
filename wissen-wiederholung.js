/* Wissen › Wiederholung: jede Woche 5 Einheiten aus kurzer Wiederholung und Quiz.
   Inhalte: fortbildung/index.js (Wochenliste) und fortbildung/<KW>.js (Einheiten der Woche).
   Ergebnisse bleiben nur auf diesem Gerät (localStorage "df-wdh"), keine Patientendaten. */
(function(){
if(window.WDH_geladen)return;window.WDH_geladen=true;
var E=function(x){return String(x==null?"":x).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
var KEY="df-wdh",W={},IDX=null,ladend={};
window.WDH_woche=function(w){W[w.kw]=w;if(window.WI_st&&WI_st.modus==="wdh")WI_zeige()};
function lesen(){try{return JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){return{}}}
function schreiben(x){try{localStorage.setItem(KEY,JSON.stringify(x))}catch(e){}}
function lade(src,cb){if(ladend[src])return;ladend[src]=1;var s=document.createElement("script");s.src=src;s.onload=cb||null;s.onerror=function(){ladend[src]=0};document.head.append(s)}
function index(){if(window.WDH_INDEX){IDX=window.WDH_INDEX;return IDX}lade("fortbildung/index.js?t="+Date.now(),function(){IDX=window.WDH_INDEX||[];if(WI_st.modus==="wdh")WI_zeige()});return null}
function woche(kw){var e=(IDX||[]).find(function(x){return x.kw===kw});if(!W[kw]&&e)lade(e.datei);return W[kw]}
function heuteKw(){var d=new Date(),t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())),n=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-n);var j=new Date(Date.UTC(t.getUTCFullYear(),0,1));return t.getUTCFullYear()+"-W"+String(Math.ceil(((t-j)/864e5+1)/7)).padStart(2,"0")}
function aktuelleKw(){var k=heuteKw(),l=IDX||[];if(l.some(function(x){return x.kw===k}))return k;var f=l.filter(function(x){return x.kw<=k});return(f[0]||l[0]||{}).kw}
function tag(){return["so","mo","di","mi","do","fr","sa"][new Date().getDay()]}
function datum(iso){var p=String(iso||"").split("-");return p.length===3?(+p[2])+"."+(+p[1])+".":""}
var ART={kb:"Krankheitsbild",neu:"Neu aus der Forschung",wdh:"Wiederholung"};
var ICO={ok:'<svg viewBox="0 0 24 24" class="wq-mk"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',no:'<svg viewBox="0 0 24 24" class="wq-mk"><path d="M7 7l10 10M17 7L7 17"/></svg>',
 pfeil:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
 x:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>'};

/* ---------- Gestaltung ---------- */
(function(){if(document.getElementById("wdh-css"))return;var st=document.createElement("style");st.id="wdh-css";st.textContent=`
.wi-portal .wk-seg{max-width:100%;overflow-x:auto;scrollbar-width:none;flex-wrap:nowrap}
.wi-portal .wk-seg::-webkit-scrollbar{display:none}
.wi-portal .wk-seg button{flex:none;white-space:nowrap}
.wd-woche{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:22px 0 10px}
.wd-woche h2{font-size:1.25rem;font-weight:800;margin:0;letter-spacing:-.01em}
.wd-woche span{color:var(--schrift2);font-size:.875rem;white-space:nowrap}
.wd-liste{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px}
.wd-e{display:grid;grid-template-columns:44px minmax(0,1fr) 20px;align-items:center;gap:14px;border:0;background:var(--flaeche);border-radius:20px;padding:14px 16px;text-align:left;font:inherit;color:inherit;cursor:pointer;transition:transform .16s ease-out}
.wd-e:active{transform:scale(.97)}
.wd-nr{width:44px;height:44px;border-radius:14px;background:var(--seite);display:grid;place-items:center;font-weight:800;font-size:1.125rem;color:var(--schrift2);font-variant-numeric:tabular-nums}
.wd-e.fertig .wd-nr{background:#C9E86B;color:#2E3236}
.wd-t{display:flex;flex-direction:column;gap:3px;min-width:0}
.wd-t small{font-size:.8125rem;color:var(--tape);font-weight:700}
.wd-t b{font-size:1.0625rem;line-height:1.25}
.wd-t span{font-size:.8125rem;color:var(--schrift2)}
.wd-e>svg{color:var(--schrift2)}
.wd-heute{display:inline-block;margin-left:6px;padding:1px 8px;border-radius:999px;background:var(--tape);color:var(--flaeche);font-size:.75rem;font-weight:700;vertical-align:1px}
.wd-frueher{margin-top:26px}
.wd-frueher summary{cursor:pointer;font-weight:700;color:var(--tape);padding:6px 0;list-style:none}
.wd-frueher summary::-webkit-details-marker{display:none}
.wd-hinweis{color:var(--schrift2);font-size:.875rem;margin:14px 0 0;max-width:62ch}
.wd-k p,.wd-k li{line-height:1.55}
.wd-k ul{padding-left:20px;margin:8px 0}
.wd-k li{margin:5px 0}
.wd-tab{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.4fr);border-top:1px solid var(--linie);margin-top:8px}
.wd-tab div{padding:9px 10px 9px 0;border-bottom:1px solid var(--linie);font-size:.9375rem;line-height:1.4}
.wd-tab div:nth-child(odd){font-weight:700}
.wd-figs{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-top:10px}
.wd-figs figure{margin:0}
.wd-figs img{width:100%;display:block;border-radius:14px;background:#000;aspect-ratio:1/1;object-fit:contain}
.wd-figs figcaption{font-size:.875rem;color:var(--schrift2);line-height:1.45;margin-top:8px}
.wd-figs figcaption b{color:var(--schrift)}
.wd-merk{background:color-mix(in srgb,#C9E86B 30%,var(--flaeche));border-radius:14px;padding:12px 14px;margin-top:10px;line-height:1.5}
.wd-quellen{font-size:.8125rem;color:var(--schrift2);line-height:1.5}
.wd-start{position:sticky;bottom:calc(84px + env(safe-area-inset-bottom));z-index:2;display:flex;align-items:center;gap:12px;background:var(--flaeche);border-radius:20px;padding:12px;margin:18px 0 0;box-shadow:0 6px 24px rgba(0,0,0,.12)}
.wd-teil{flex:none;width:48px;height:48px;border:0;border-radius:14px;background:var(--seite);color:var(--schrift);display:grid;place-items:center;cursor:pointer;transition:transform 140ms ease-out}
.wd-teil:active{transform:scale(.97)}
.wd-teil[aria-busy="true"]{opacity:.5;pointer-events:none}
.wd-start span{flex:1;font-size:.9375rem;color:var(--schrift2);line-height:1.35}
.wd-start span b{color:var(--schrift);display:block;font-size:1rem}
.wq-go,.wq-ghost{font:inherit;font-weight:700;font-size:1.0625rem;min-height:52px;padding:0 24px;border-radius:14px;border:0;cursor:pointer;transition:transform 140ms ease-out;-webkit-tap-highlight-color:transparent;white-space:nowrap}
.wq-go{background:var(--tape);color:var(--flaeche)}
.wq-ghost{background:transparent;color:var(--schrift);box-shadow:inset 0 0 0 2px var(--linie)}
.wq-go:active,.wq-ghost:active,.wq-opt:active,.wq-ico:active{transform:scale(.97)}
.wq-go:focus-visible,.wq-ghost:focus-visible,.wq-opt:focus-visible,.wq-ico:focus-visible{outline:3px solid var(--tape);outline-offset:3px}
.wq{--ok:#1f7a4a;--no:#c4140b;--okbg:#e7f4ec;--nobg:#fdeceb;--eo:cubic-bezier(.23,1,.32,1);--drawer:cubic-bezier(.32,.72,0,1);position:fixed;inset:0;z-index:10050;background:var(--grund);color:var(--schrift);display:flex;flex-direction:column;font-family:var(--ww-font,-apple-system,system-ui,sans-serif)}
.wq[hidden]{display:none}
.wq-top{display:flex;align-items:center;gap:14px;padding:max(10px,env(safe-area-inset-top)) clamp(14px,4vw,24px) 10px;max-width:760px;width:100%;margin:0 auto}
.wq-ico{width:44px;height:44px;flex:none;border:0;background:transparent;color:var(--schrift2);border-radius:12px;cursor:pointer;display:grid;place-items:center;transition:transform 140ms ease-out}
.wq-ico svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round}
.wq-bar{flex:1;height:10px;border-radius:99px;background:var(--flaeche);overflow:hidden}
.wq-bar i{display:block;height:100%;background:var(--tape);border-radius:99px;transform-origin:left;transform:scaleX(.02);transition:transform 420ms var(--eo)}
.wq-cnt{font-size:.875rem;color:var(--schrift2);font-variant-numeric:tabular-nums;white-space:nowrap;min-width:4.5em;text-align:right}
.wq-view{position:relative;flex:1;overflow-y:auto;overflow-x:hidden;padding-bottom:calc(var(--sh,0px) + 28px);transition:padding-bottom 280ms var(--drawer)}
.wq-card{inset:0 0 auto 0;max-width:680px;margin:0 auto;padding:10px clamp(16px,4vw,24px) 0}
.wq-tag{display:inline-block;font-size:.8125rem;font-weight:700;color:var(--tape);background:var(--flaeche);padding:4px 10px;border-radius:99px;margin-bottom:10px}
.wq-q{font-weight:800;font-size:clamp(1.375rem,4.6vw,1.75rem);line-height:1.2;letter-spacing:-.01em;text-wrap:balance;margin:6px 0 18px}
.wq-img{margin:0 0 18px;background:#000;border-radius:14px;overflow:hidden}
.wq-img img{display:block;width:100%;max-height:36vh;object-fit:contain}
.wq-opts{display:grid;gap:10px}
.wq-opt{display:flex;align-items:center;gap:14px;width:100%;min-height:58px;padding:10px 14px;text-align:left;font:inherit;font-size:1rem;line-height:1.35;color:var(--schrift);background:var(--flaeche);border:2px solid transparent;border-radius:14px;cursor:pointer;transition:transform 140ms ease-out,border-color 160ms ease,background-color 160ms ease,opacity 200ms ease;animation:wq-in 300ms var(--eo) var(--d) backwards}
@keyframes wq-in{from{opacity:0;transform:translateY(8px)}}
@media (hover:hover) and (pointer:fine){.wq-opt:hover{border-color:var(--tape)}}
.wq-key{flex:none;width:30px;height:30px;border-radius:9px;background:var(--seite);display:grid;place-items:center;font-size:.875rem;font-weight:700;color:var(--schrift2)}
.wq-tx{flex:1}
.wq-st{flex:none;width:24px;height:24px}
.wq-mk{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.wq-mk path{stroke-dasharray:30;stroke-dashoffset:30;animation:wq-draw 260ms var(--eo) 60ms forwards}
@keyframes wq-draw{to{stroke-dashoffset:0}}
.wq-ans .wq-opt{pointer-events:none}
.wq-ans .wq-opt:not(.isok):not(.isno){opacity:.4}
.wq-opt.isok{border-color:var(--ok);background:var(--okbg);color:#14251b}
.wq-opt.isok .wq-key{background:var(--ok);color:#fff}
.wq-opt.isok .wq-st{color:var(--ok)}
.wq-opt.isno{border-color:var(--no);background:var(--nobg);color:#2b1210}
.wq-opt.isno .wq-key{background:var(--no);color:#fff}
.wq-opt.isno .wq-st{color:var(--no)}
.wq-sheet{position:fixed;left:0;right:0;bottom:0;z-index:10051;background:var(--okbg);color:#14251b;transform:translateY(105%);transition:transform 180ms ease-in;box-shadow:0 -8px 30px rgba(0,0,0,.14);border-radius:22px 22px 0 0;max-height:62vh;overflow-y:auto}
.wq-sheet.on{transform:none;transition:transform 300ms var(--drawer)}
.wq-sheet.no{background:var(--nobg);color:#2b1210}
.wq-sin{max-width:680px;margin:0 auto;padding:20px clamp(16px,4vw,24px) calc(18px + env(safe-area-inset-bottom))}
.wq-verdict{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.5rem}
.wq-sheet.ok .wq-verdict{color:var(--ok)}.wq-sheet.no .wq-verdict{color:var(--no)}
.wq-verdict .wq-mk{width:28px;height:28px}
.wq-verdict em{margin-left:auto;font-size:.8125rem;font-style:normal;color:var(--ok);background:#fff;padding:5px 10px;border-radius:99px;white-space:nowrap}
.wq-cmp{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;margin-top:12px;font-size:.9375rem;line-height:1.35}
.wq-cmp:empty{display:none}
.wq-cmp div{background:#fff;border-radius:10px;padding:10px 12px}
.wq-cmp small{display:block;font-size:.8125rem;opacity:.7;margin-bottom:3px}
.wq-why{font-size:.96875rem;line-height:1.55;margin:12px 0 16px}
.wq-sheet .wq-go{width:100%;color:#fff}
.wq-sheet.ok .wq-go{background:var(--ok)}.wq-sheet.no .wq-go{background:var(--no)}
.wq-mid{text-align:center;padding-top:6vh}
.wq-mid p{max-width:44ch;margin:0 auto 26px;color:var(--schrift2);line-height:1.5}
.wq-big{font-weight:800;font-size:clamp(4rem,18vw,6rem);line-height:1;font-variant-numeric:tabular-nums}
.wq-big span{font-size:.45em;color:var(--schrift2)}
.wq-ausw{border-radius:16px;overflow:hidden;margin-bottom:6px;background:#2E3236;min-height:120px}
.wq-miss{margin:22px 0}
.wq-miss h4{font-size:1rem;margin:0 0 8px}
.wq-miss ol{margin:0;padding-left:20px;font-size:.9375rem}
.wq-miss li{margin:0 0 10px}
.wq-miss li span{display:block;color:var(--schrift2)}
.wq-ends{display:grid;gap:10px;margin:18px 0 10px}
.wq-note{font-size:.8125rem;color:var(--schrift2)}
@media (max-width:600px){.wq-cmp{grid-template-columns:1fr}.wd-tab{grid-template-columns:1fr}.wd-tab div:nth-child(odd){border-bottom:0;padding-bottom:0}}
@media (prefers-reduced-motion:reduce){.wq-opt{animation:none}.wq-mk path{animation:none;stroke-dashoffset:0}.wq-bar i,.wq-sheet,.wq-sheet.on,.wq-view{transition-duration:0ms}}
`;document.head.append(st)})();

/* ---------- Seiten im Reiter Wissen ---------- */
function status(id){var r=lesen()[id];return r?`${r.right}/${r.total} auf Anhieb`:""}
function karte(e,i,w){var r=lesen()[e.id],heute=w&&w.plan&&w.plan[tag()]===e.id&&w.kw===heuteKw();
 return `<button class="wd-e${r?" fertig":""}" data-wdh="${E(e.id)}" data-kw="${E(w.kw)}"><span class="wd-nr">${r?'<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>':i+1}</span><span class="wd-t"><small>${E(ART[e.art]||"")}${heute?'<span class="wd-heute">Heute dran</span>':""}</small><b>${E(e.titel)}</b><span>${r?E(status(e.id))+" · "+E(e.min||8)+" min":"ca. "+E(e.min||8)+" min lesen · "+E((e.fragen||[]).length)+" Fragen"}</span></span>${ICO.pfeil}</button>`}
function seiteListe(){
 var l=index();
 var kopf=`<div class="wi-seite"><button class="wi-zur" data-a="zu">‹ Mehr</button><h1>Wissen</h1><p class="wi-unter">Wiederholung · jede Woche 5 Einheiten mit Quiz</p>${WI_umschWdh()}`;
 if(!l)return kopf+`<p class="wd-hinweis">Lade die Einheiten …</p></div>`;
 if(!l.length)return kopf+`<p class="wd-hinweis">Noch keine Einheiten da.</p></div>`;
 var kw=aktuelleKw(),w=woche(kw),meta=l.find(function(x){return x.kw===kw})||{};
 var h=kopf+`<div class="wd-woche"><h2>Diese Woche</h2><span>${datum(meta.von)} – ${datum(meta.bis)}</span></div>`;
 h+=w?`<div class="wd-liste">${w.einheiten.map(function(e,i){return karte(e,i,w)}).join("")}</div>`:`<p class="wd-hinweis">Lade die Einheiten …</p>`;
 if(w&&w.plan)h+=`<p class="wd-hinweis">Montag und Mittwoch um 21 Uhr kommt eine Erinnerung. Die übrigen Einheiten machst du, wann es passt. Was du im Quiz falsch hattest, kommt am Ende nochmal.</p>`;
 var alt=l.filter(function(x){return x.kw!==kw});
 if(alt.length)h+=`<details class="wd-frueher"${WI_st.wdhAlt?" open":""}><summary>Frühere Wochen</summary>${alt.map(function(m){var a=woche(m.kw);return `<div class="wd-woche"><h2>KW ${E(m.kw.slice(-2))}</h2><span>${datum(m.von)} – ${datum(m.bis)}</span></div>`+(a?`<div class="wd-liste">${a.einheiten.map(function(e,i){return karte(e,i,a)}).join("")}</div>`:`<p class="wd-hinweis">${E((m.titel||[]).join(" · "))}</p>`)}).join("")}</details>`;
 return h+`</div>`}
function block(b){var h=b.t?`<h3>${E(b.t)}</h3>`:"";
 (b.p||[]).forEach(function(x){h+=`<p>${E(x)}</p>`});
 if(b.l)h+=`<ul>${b.l.map(function(x){return `<li>${E(x)}</li>`}).join("")}</ul>`;
 if(b.tab)h+=`<div class="wd-tab">${b.tab.map(function(r){return `<div>${E(r[0])}</div><div>${E(r[1])}</div>`}).join("")}</div>`;
 if(b.fig)h+=`<div class="wd-figs">${b.fig.map(function(f){return `<figure><img src="${E(f.src)}" alt="${E(f.alt||"")}" loading="lazy"><figcaption><b>${E(f.t)}</b> ${E(f.c||"")}</figcaption></figure>`}).join("")}</div>`;
 if(b.merk)h+=`<div class="wd-merk"><b>Merke:</b> ${E(b.merk)}</div>`;
 return h}
function seiteEinheit(kw,id){var w=woche(kw),e=w&&w.einheiten.find(function(x){return x.id===id});
 if(!e)return seiteListe();
 var r=lesen()[id];
 var h=`<div class="wi-seite"><button class="wi-zur" data-a="wdh-liste">‹ Wiederholung</button><h1>${E(e.titel)}</h1><p class="wi-unter">${E(ART[e.art]||"")} · ca. ${E(e.min||8)} min · ${E(e.fragen.length)} Fragen${e.kb?` · <button class="wd-kblink" data-kbid="${E(e.kb)}" style="border:0;background:none;padding:0;font:inherit;color:var(--tape);font-weight:600;cursor:pointer">Zum Krankheitsbild</button>`:""}</p>`;
 (e.abschnitte||[]).forEach(function(a){h+=`<section class="wi-karte wd-k"><h2>${E(a.t)}</h2>${(a.b||[a]).map(function(b){return block(b===a?{p:a.p,l:a.l,tab:a.tab,fig:a.fig,merk:a.merk}:b)}).join("")}</section>`});
 if(e.quellen)h+=`<section class="wi-karte"><h2>Quellen</h2><p class="wd-quellen">${e.quellen.map(E).join("<br>")}</p></section>`;
 h+=`<div class="wd-start"><button class="wd-teil" data-wdhpdf="${E(id)}" data-kw="${E(kw)}" aria-label="Als PDF teilen"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg></button><span><b>${r?"Quiz nochmal":"Quiz"}</b>${E(e.fragen.length)} Fragen · ca. 5 min${r?" · zuletzt "+E(status(id)):""}</span><button class="wq-go" data-wdhquiz="${E(id)}" data-kw="${E(kw)}">Quiz starten</button></div>`;
 return h+`</div>`}
window.WI_umschWdh=function(){return `<div class="wk-seg"><button data-a="wk-kb">Krankheitsbilder</button><button data-modus="tests">Tests</button><button data-a="wk-vo">Verordnung &amp; Abrechnung</button><button data-modus="wdh" class="an">Wiederholung</button></div>`};

/* Einhängen: neues letztes Segment */
var vorListe=WI_liste,vorZeige=WI_zeige;
WI_liste=function(){if(WI_st.modus==="wdh")return WI_st.wdh?seiteEinheit(WI_st.wdhKw,WI_st.wdh):seiteListe();return vorListe.apply(this,arguments)};
WI_zeige=function(){var el=WI_st.el;
 if(el&&WI_st.modus==="wdh"&&!WI_st.tid&&!WI_st.id&&!WI_st.kap){var k=WI_st.wdh||"",a=el.dataset.wdhK;el.innerHTML=WI_liste();el.dataset.wdhK=k;var sg=el.querySelector(".wk-seg"),an=sg&&sg.querySelector(".an");if(an&&sg.scrollWidth>sg.clientWidth)sg.scrollLeft=an.offsetLeft-sg.offsetLeft-12;if(a!==k){var n=el;while(n&&n!==document.documentElement){if(n.scrollTop)n.scrollTop=0;n=n.parentElement}try{window.scrollTo(0,0)}catch(e){}}return}
 vorZeige.apply(this,arguments);
 if(!el)return;el.querySelectorAll(".wk-seg").forEach(function(s){if(!s.querySelector('[data-modus="wdh"]')){var b=document.createElement("button");b.dataset.modus="wdh";b.textContent="Wiederholung";s.append(b)}})};
document.addEventListener("click",function(ev){var b=ev.target.closest(".wi-portal button,.wi-portal summary");if(!b)return;var d=b.dataset;
 if(b.tagName==="SUMMARY"){setTimeout(function(){WI_st.wdhAlt=b.parentElement.open},0);return}
 if(d.modus==="wdh"){WI_st.wdh=null}
 if(d.wdh){ev.stopImmediatePropagation();WI_st.wdh=d.wdh;WI_st.wdhKw=d.kw;WI_zeige();return}
 if(d.a==="wdh-liste"){ev.stopImmediatePropagation();WI_st.wdh=null;WI_zeige();return}
 if(d.wdhpdf){ev.stopImmediatePropagation();var w2=woche(d.kw),e2=w2&&w2.einheiten.find(function(x){return x.id===d.wdhpdf});if(e2)pdfTeilen(e2,b);return}
 if(d.wdhquiz){ev.stopImmediatePropagation();var w=woche(d.kw),e=w&&w.einheiten.find(function(x){return x.id===d.wdhquiz});if(e)Quiz.auf(e);return}
},true);


/* ---------- Teilen als PDF: Wiederholung, dann jede Frage auf eigener Seite, Lösungen am Ende ---------- */
function ladeJs(src){return new Promise(function(ok,no){if(window.jspdf)return ok();var s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=no;document.head.append(s)})}
function bildJpg(src){return new Promise(function(ok){var im=new Image();im.onload=function(){var c=document.createElement("canvas");c.width=im.naturalWidth;c.height=im.naturalHeight;var g=c.getContext("2d");g.fillStyle="#000";g.fillRect(0,0,c.width,c.height);g.drawImage(im,0,0);ok(c.toDataURL("image/jpeg",.85))};im.onerror=function(){ok(null)};im.src=src})}
// shortcut: Helvetica kann nur Windows-1252, seltene Zeichen werden ersetzt; bei Bedarf eigene TTF einbetten
function T(x){return String(x==null?"":x).replace(/≤/g,"<=").replace(/≥/g,">=").replace(/→/g,"->").replace(/≈/g,"ca.").replace(/[^\x00-\xff€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,"")}
async function pdfBauen(e){
 await ladeJs("jspdf.umd.min.js");
 var doc=new window.jspdf.jsPDF({unit:"mm",format:"a4"}),W=210,H=297,M=18,B=W-2*M,y=M,ANT=[46,50,54],GR=[110,116,122],LIM=[201,232,107],LINIE=[226,226,222];
 var bilder={},alle=[];(e.abschnitte||[]).forEach(function(a){(a.b||[a]).forEach(function(b){(b.fig||[]).forEach(function(f){alle.push(f.src)})})});e.fragen.forEach(function(q){if(q[4])alle.push(q[4])});
 await Promise.all(alle.map(function(s){return bildJpg(s).then(function(d){bilder[s]=d})}));
 function farbe(c){doc.setTextColor(c[0],c[1],c[2])}
 function neu(){doc.addPage();y=M}
 function platz(h){if(y+h>H-M-8)neu()}
 function text(t,gr,stil,c,ab){doc.setFont("helvetica",stil||"normal");doc.setFontSize(gr);farbe(c||ANT);var z=doc.splitTextToSize(T(t),ab||B),lh=gr*.42;z.forEach(function(l){platz(lh);doc.text(l,M+(B-(ab||B)),y+lh*.8);y+=lh});return z.length*lh}
 // Kopf
 doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.roundedRect(M,y,46,7,3.5,3.5,"F");doc.setFont("helvetica","bold");doc.setFontSize(8.5);farbe(ANT);doc.text(T(ART[e.art]||"Wiederholung"),M+23,y+4.8,{align:"center"});y+=13;
 text(e.titel,24,"bold");y+=2;text("Kurze Wiederholung, ca. "+(e.min||8)+" min lesen · Quiz mit "+e.fragen.length+" Fragen",10,"normal",GR);y+=6;
 (e.abschnitte||[]).forEach(function(a){
  platz(16);doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.setLineWidth(.3);doc.line(M,y,W-M,y);y+=6;text(a.t,14,"bold");y+=2;
  (a.b||[a]).forEach(function(b){
   if(b.t){y+=1;text(b.t,11,"bold");y+=1}
   (b.p||[]).forEach(function(x){text(x,10.5);y+=2});
   if(b.l)b.l.forEach(function(x){doc.setFontSize(10.5);var z=doc.splitTextToSize(T(x),B-6);platz(z.length*4.4);doc.setFillColor(ANT[0],ANT[1],ANT[2]);doc.circle(M+1.5,y+2.5,.8,"F");farbe(ANT);doc.setFont("helvetica","normal");z.forEach(function(l){doc.text(l,M+6,y+3.6);y+=4.4});y+=1.2});
   if(b.tab){y+=1;b.tab.forEach(function(r){doc.setFontSize(10);var k=doc.splitTextToSize(T(r[0]),52),v=doc.splitTextToSize(T(r[1]),B-58),h=Math.max(k.length,v.length)*4.2+3;platz(h);doc.setFont("helvetica","bold");farbe(ANT);k.forEach(function(l,i){doc.text(l,M,y+4+i*4.2)});doc.setFont("helvetica","normal");v.forEach(function(l,i){doc.text(l,M+58,y+4+i*4.2)});y+=h;doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.line(M,y-.5,W-M,y-.5)});y+=3}
   if(b.fig&&b.fig.length===1){var f1=b.fig[0],iw=72;doc.setFont("helvetica","normal");doc.setFontSize(9.5);var cz=doc.splitTextToSize(T(f1.t+" "+(f1.c||"")),B-iw-6);platz(iw+4);if(bilder[f1.src])doc.addImage(bilder[f1.src],"JPEG",M,y,iw,iw);farbe(GR);cz.forEach(function(l,k){doc.text(l,M+iw+6,y+4+k*4.2)});y+=iw+5}
   else if(b.fig){var bw=(B-6)/2;for(var i=0;i<b.fig.length;i+=2){var zeile=b.fig.slice(i,i+2),capH=0;doc.setFontSize(9);zeile.forEach(function(f){capH=Math.max(capH,doc.splitTextToSize(T(f.t+" "+(f.c||"")),bw).length*3.8)});platz(bw+capH+6);zeile.forEach(function(f,j){var x=M+j*(bw+6);if(bilder[f.src])doc.addImage(bilder[f.src],"JPEG",x,y,bw,bw);doc.setFont("helvetica","normal");farbe(GR);doc.splitTextToSize(T(f.t+" "+(f.c||"")),bw).forEach(function(l,k){doc.text(l,x,y+bw+4.5+k*3.8)})});y+=bw+capH+7}}
   if(b.merk){doc.setFont("helvetica","bold");doc.setFontSize(10.5);var z=doc.splitTextToSize(T("Merke: "+b.merk),B-10),h=z.length*4.4+7;platz(h);doc.setFillColor(238,246,212);doc.roundedRect(M,y,B,h,3,3,"F");doc.setFont("helvetica","bold");farbe(ANT);z.forEach(function(l,i){doc.text(l,M+5,y+6+i*4.4)});y+=h+3}
  });y+=3});
 if(e.quellen){platz(14);doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.line(M,y,W-M,y);y+=6;text("Quellen",11,"bold");y+=1;e.quellen.forEach(function(q){text(q,9,"normal",GR);y+=1})}
 // Quiz: jede Frage eine Seite
 var L="ABCD",start=doc.getNumberOfPages()+1,loes=start+e.fragen.length;
 e.fragen.forEach(function(q,n){neu();
  doc.setFont("helvetica","bold");doc.setFontSize(9);farbe(GR);doc.text("QUIZ · FRAGE "+(n+1)+" VON "+e.fragen.length,M,y+3);
  doc.setFillColor(LINIE[0],LINIE[1],LINIE[2]);doc.roundedRect(M,y+6,B,2,1,1,"F");doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.roundedRect(M,y+6,Math.max(2,B*(n+1)/e.fragen.length),2,1,1,"F");y+=18;
  text(q[0],18,"bold");y+=6;
  if(q[4]&&bilder[q[4]]){var s=Math.min(110,H-M-y-95);doc.addImage(bilder[q[4]],"JPEG",M+(B-s)/2,y,s,s);y+=s+8}
  q[1].forEach(function(o,i){doc.setFontSize(12);var z=doc.splitTextToSize(T(o),B-22),h=Math.max(14,z.length*5.2+8);doc.setDrawColor(LINIE[0],LINIE[1],LINIE[2]);doc.setLineWidth(.5);doc.roundedRect(M,y,B,h,3.5,3.5,"S");doc.setFillColor(242,242,238);doc.roundedRect(M+4,y+h/2-4,8,8,2,2,"F");doc.setFont("helvetica","bold");doc.setFontSize(10);farbe(GR);doc.text(L[i],M+8,y+h/2+1.3,{align:"center"});doc.setFont("helvetica","normal");doc.setFontSize(12);farbe(ANT);z.forEach(function(l,k){doc.text(l,M+17,y+h/2+1.8-(z.length-1)*2.6+k*5.2)});y+=h+4});
  doc.setFont("helvetica","normal");doc.setFontSize(9);farbe(GR);doc.text("Lösung ab Seite "+loes,M,H-M-6)});
 // Lösungen
 neu();text("Lösungen",20,"bold");y+=4;
 e.fragen.forEach(function(q,n){doc.setFontSize(10.5);var z=doc.splitTextToSize(T(q[3]),B-12);platz(10+z.length*4.4);doc.setFillColor(LIM[0],LIM[1],LIM[2]);doc.circle(M+3.5,y+3.3,3.5,"F");doc.setFont("helvetica","bold");doc.setFontSize(9);farbe(ANT);doc.text(String(n+1),M+3.5,y+4.6,{align:"center"});doc.setFontSize(10.5);doc.text(doc.splitTextToSize(T(L[q[2]]+"  "+q[1][q[2]]),B-12),M+12,y+4.5);y+=6+4.4*(doc.splitTextToSize(T(q[1][q[2]]),B-18).length-1);doc.setFont("helvetica","normal");farbe(GR);z.forEach(function(l){doc.text(l,M+12,y+3.5);y+=4.4});y+=5});
 // Fuß auf jeder Seite
 var N=doc.getNumberOfPages();for(var i=1;i<=N;i++){doc.setPage(i);doc.setFont("helvetica","normal");doc.setFontSize(8);farbe(GR);doc.text(T("Doku-Fix · Wiederholung · "+e.titel),M,H-8);doc.text(i+" / "+N,W-M,H-8,{align:"right"});if(i===1)doc.text(T("Entwurf, fachlich prüfen. Bilder sind KI-erstellte Lehrbilder, keine echten Aufnahmen."),M,H-12)}
 return doc.output("blob")}
async function pdfTeilen(e,btn){btn.setAttribute("aria-busy","true");
 try{var blob=await pdfBauen(e),name="Wiederholung_"+e.titel.replace(/[^A-Za-zÄÖÜäöüß0-9]+/g,"_").replace(/^_|_$/g,"")+".pdf",f=new File([blob],name,{type:"application/pdf"});
  try{var cl=window.claude,dl=cl&&cl.use?await cl.use("downloads"):null;if(dl){await dl.save({filename:name,data:blob});return}}catch(x){if(x&&x.code==="declined")return}
  try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:e.titel});return}}catch(x){if(x&&x.name==="AbortError")return}
  var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.append(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},2000)}
 catch(x){btn.style.color="#c4140b";btn.setAttribute("aria-label","PDF ging nicht");console.error(x)}
 finally{btn.removeAttribute("aria-busy")}}
window.WDH_pdf=pdfBauen;

/* ---------- Quiz: eine Frage pro Bildschirm ---------- */
var Quiz=(function(){
 var RM=matchMedia("(prefers-reduced-motion: reduce)").matches,L="ABCD",st,view,sheet,bar,cnt,Q,unit,queue,pos,round,att,right,answered,firstWrong,done,streak;
 function $(s){return st.querySelector(s)}
 function bauen(){if(st)return;st=document.createElement("div");st.className="wq";st.hidden=true;st.setAttribute("role","dialog");st.setAttribute("aria-modal","true");
  st.innerHTML=`<header class="wq-top"><button class="wq-ico" data-q="zu" type="button" aria-label="Quiz schließen">${ICO.x}</button><div class="wq-bar" aria-hidden="true"><i></i></div><span class="wq-cnt"></span></header><div class="wq-view"></div><div class="wq-sheet" aria-live="polite"><div class="wq-sin"><div class="wq-verdict"></div><div class="wq-cmp"></div><p class="wq-why"></p><button class="wq-go" data-q="weiter" type="button">Weiter</button></div></div>`;
  document.body.append(st);view=$(".wq-view");sheet=$(".wq-sheet");bar=$(".wq-bar i");cnt=$(".wq-cnt");
  st.addEventListener("click",function(ev){var b=ev.target.closest("button");if(!b)return;
   if(b.classList.contains("wq-opt"))return pick(b);
   var q=b.dataset.q;if(q==="zu")zu();else if(q==="weiter")next();else if(q==="rep")ask();else if(q==="neu"){reset();ask()}});
  document.addEventListener("keydown",function(e){if(st.hidden)return;if(e.key==="Escape"){zu();return}
   var k="1234abcd".indexOf(String(e.key).toLowerCase());
   if(k>-1&&!answered){var o=view.lastElementChild&&view.lastElementChild.querySelectorAll(".wq-opt")[k%4];if(o)pick(o)}
   else if(e.key==="Enter"&&answered&&document.activeElement!==$('[data-q="weiter"]')){e.preventDefault();next()}})}
 function mix(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=a[i];a[i]=a[j];a[j]=t}return a}
 function reset(){queue=Q.map(function(_,i){return i});pos=0;round=1;att=Q.map(function(){return 0});right=0;firstWrong=[];done=0;streak=0}
 function progress(){var rest=queue.length-pos-(answered?1:0),total=done+rest;bar.style.transform="scaleX("+Math.max(.02,done/Math.max(total,1))+")";cnt.textContent=round===1?(pos+1)+" / "+Q.length:"Wiederholung "+(pos+1)+" / "+queue.length}
 function sheetZu(){answered=false;sheet.classList.remove("on","ok","no");st.style.setProperty("--sh","0px")}
 function swap(html,after){var old=view.firstElementChild,nu=document.createElement("div");nu.className="wq-card";nu.innerHTML=html;
  if(old&&!RM){old.animate([{opacity:1,transform:"none",filter:"blur(0)"},{opacity:0,transform:"translateX(-6%)",filter:"blur(2px)"}],{duration:180,easing:"cubic-bezier(.4,0,1,1)",fill:"forwards"}).onfinish=function(){old.remove()};
   nu.style.position="absolute";view.append(nu);nu.animate([{opacity:0,transform:"translateX(8%)"},{opacity:1,transform:"none"}],{duration:300,delay:90,easing:"cubic-bezier(.23,1,.32,1)",fill:"backwards"}).onfinish=function(){nu.style.position=""}}
  else{if(old)old.remove();view.append(nu)}
  view.scrollTop=0;if(after)after(nu)}
 function ask(){sheetZu();var i=queue[pos],q=Q[i],again=round>1,ord=q[1].map(function(_,j){return j});if(again)ord=mix(ord);progress();
  swap(`${again?'<span class="wq-tag">Nochmal</span>':""}<h3 class="wq-q">${E(q[0])}</h3>${q[4]?`<figure class="wq-img"><img src="${E(q[4])}" alt="Bild zur Frage"></figure>`:""}<div class="wq-opts" role="group">${ord.map(function(j,k){return `<button class="wq-opt" type="button" data-a="${j}" style="--d:${k*40}ms"><span class="wq-key">${L[k]}</span><span class="wq-tx">${E(q[1][j])}</span><span class="wq-st"></span></button>`}).join("")}</div>`)}
 function pick(btn){if(answered)return;answered=true;var i=queue[pos],q=Q[i],c=q[2],a=+btn.dataset.a,ok=a===c,card=view.lastElementChild;att[i]++;done++;
  if(round===1){if(ok)right++;else firstWrong.push(i)}
  card.classList.add("wq-ans");var cb=card.querySelector('.wq-opt[data-a="'+c+'"]');cb.classList.add("isok");cb.querySelector(".wq-st").innerHTML=ICO.ok;
  if(!ok){btn.classList.add("isno");btn.querySelector(".wq-st").innerHTML=ICO.no;if(!RM)btn.animate([{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(5px)"},{transform:"translateX(-3px)"},{transform:"translateX(0)"}],{duration:320,easing:"ease-out"});try{navigator.vibrate&&navigator.vibrate(40)}catch(e){}queue.push(i);streak=0}
  else{streak++;if(!RM)cb.animate([{transform:"scale(1)"},{transform:"scale(1.025)"},{transform:"scale(1)"}],{duration:280,easing:"cubic-bezier(.23,1,.32,1)"})}
  var lines=ok?["Richtig.","Genau.","Sitzt.","Stimmt."]:["Nicht ganz.","Knapp daneben.","Das war es nicht."];
  $(".wq-verdict").innerHTML=(ok?ICO.ok:ICO.no)+"<span>"+lines[(i+att[i])%lines.length]+"</span>"+(ok&&streak>=3?"<em>"+streak+" in Folge</em>":"");
  $(".wq-cmp").innerHTML=ok?"":`<div><small>Deine Antwort</small>${E(q[1][a])}</div><div><small>Richtig</small><b>${E(q[1][c])}</b></div>`;
  $(".wq-why").textContent=q[3];
  var last=pos+1>=queue.length;$('[data-q="weiter"]').textContent=last?"Zur Auswertung":(pos+1===Q.length&&round===1&&queue.length>Q.length?"Zu den Wiederholungen":"Weiter");
  sheet.classList.add("on",ok?"ok":"no");
  requestAnimationFrame(function(){var sh=sheet.offsetHeight;st.style.setProperty("--sh",sh+"px");var o=card.querySelector(".wq-opts"),t=o.offsetTop+o.offsetHeight-(view.clientHeight-sh)+20;if(t>view.scrollTop)setTimeout(function(){view.scrollTo({top:t,behavior:RM?"auto":"smooth"})},60)});
  progress();setTimeout(function(){$('[data-q="weiter"]').focus({preventScroll:true})},60)}
 function next(){if(!answered)return;pos++;
  if(pos<queue.length&&pos===Q.length&&round===1){queue=queue.slice(pos);pos=0;round=2;pause();return}
  if(pos>=queue.length){ende();return}ask()}
 function pause(){sheetZu();progress();cnt.textContent="Pause";var n=queue.length;
  swap(`<div class="wq-mid"><div class="wq-big">${right}<span>/${Q.length}</span></div><h3 class="wq-q">Erste Runde geschafft.</h3><p>${n===1?"Eine Frage kommt":n+" Fragen kommen"} jetzt nochmal, mit neu gemischten Antworten. Was wieder falsch ist, kommt so lange, bis es sitzt.</p><button class="wq-go" data-q="rep" type="button">Wiederholung starten</button></div>`)}
 function ende(){sheetZu();bar.style.transform="scaleX(1)";cnt.textContent="Fertig";
  var reps=att.reduce(function(s,a){return s+a-1},0),R=lesen(),alt=R[unit.id];
  R[unit.id]={right:right,total:Q.length,reps:reps,datum:new Date().toISOString().slice(0,10),mal:(alt&&alt.mal||0)+1,best:Math.max(right,alt&&alt.best||0)};schreiben(R);
  var miss=firstWrong.length?`<div class="wq-miss"><h4>Diese Fragen hatten dich erwischt</h4><ol>${firstWrong.filter(function(v,i,a){return a.indexOf(v)===i}).map(function(i){return `<li><span>${E(Q[i][0])}</span><b>${E(Q[i][1][Q[i][2]])}</b></li>`}).join("")}</ol></div>`:"";
  swap(`<h3 class="wq-q">Auswertung</h3><div class="wq-ausw"></div><p class="wq-note">Antippen spielt die Auswertung nochmal ab.</p>${miss}<div class="wq-ends"><button class="wq-go" data-q="neu" type="button">Quiz neu starten</button><button class="wq-ghost" data-q="zu" type="button">Zurück zur Einheit</button></div>`,function(nu){
   var el=nu.querySelector(".wq-ausw"),p={right:right,total:Q.length,attempts:att.slice()};
   var fb=function(){el.style.cssText="padding:20px;color:#fff";el.textContent=right+" von "+Q.length+" auf Anhieb, "+reps+(reps===1?" Wiederholung":" Wiederholungen")+"."};
   var go=function(){try{window.zeigeAuswertung(el,p)}catch(e){fb()}};
   if(window.zeigeAuswertung)go();else{var s=document.createElement("script");s.src="fortbildung/auswertung.js";s.onload=go;s.onerror=fb;document.head.append(s)}})}
 function auf(e){bauen();unit=e;Q=e.fragen;reset();st.hidden=false;document.documentElement.classList.add("wi-auf");
  if(!RM)st.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:320,easing:"cubic-bezier(.23,1,.32,1)"});
  view.innerHTML="";ask()}
 function zu(){st.hidden=true;sheetZu();document.documentElement.classList.remove("wi-auf");if(WI_st.modus==="wdh")WI_zeige()}
 return{auf:auf}})();
window.WDH_Quiz=Quiz;
index();
if(WI_st&&WI_st.el&&WI_st.modus==="wdh")WI_zeige();
})();
