// Renders a project page from PAGES in projects.js.
const main=document.querySelector("main[data-project]");const P=PAGES[main.dataset.project];
const el=(t,c,txt)=>{const e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e};
document.title=P.title+" — Aman Pathiara";
document.querySelector("#p-kicker").append(P.kicker);
document.querySelector("#p-title").prepend(P.title);
document.querySelector("#p-intro").textContent=P.intro;
const tags=document.querySelector("#p-tags");P.tags.forEach(t=>tags.append(el("span",null,t)));
const eps=document.querySelector("#p-episodes");
if(P.episodes&&P.episodes.length){P.episodes.forEach(ep=>{const card=el("article","project-card");const f=el("div","video-frame");const i=document.createElement("iframe");i.src="https://www.youtube-nocookie.com/embed/"+encodeURIComponent(ep.youtubeId);i.title=ep.title;i.loading="lazy";i.referrerPolicy="strict-origin-when-cross-origin";i.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";i.allowFullscreen=true;f.append(i);card.append(f,el("h3",null,ep.title),el("p",null,ep.note));eps.append(card)})}else eps.closest("section").hidden=true;
const reels=document.querySelector("#p-reels");
const reelCard=r=>{const card=el("figure","reel-card");const bq=document.createElement("blockquote");bq.className="instagram-media";bq.setAttribute("data-instgrm-permalink","https://www.instagram.com/p/"+r.id+"/");bq.setAttribute("data-instgrm-version","14");const a=el("a","reel-fallback","Watch on Instagram ↗");a.href="https://www.instagram.com/p/"+r.id+"/";a.target="_blank";a.rel="noopener noreferrer";bq.append(a);const fc=el("figcaption");fc.append(el("span","reel-title",r.caption));if(r.stats)fc.append(el("span","reel-stats",r.stats));card.append(bq,fc);return card};
let anyReels=false;
if(P.reels&&P.reels.length){P.reels.forEach(r=>reels.append(reelCard(r)));anyReels=true}else reels.closest("section").hidden=true;
let after=reels.closest("section");(P.moreReels||[]).forEach(g=>{const sec=el("section","project-section");const head=el("div","section-head");const h=el("h2",null,g.title);const dot=el("span","accent",".");h.append(dot);head.append(h,el("span",null,g.label||""));sec.append(head);if(g.intro)sec.append(el("p","section-intro",g.intro));const grid=el("div","reel-grid");g.reels.forEach(r=>grid.append(reelCard(r)));sec.append(grid);after.after(sec);after=sec;anyReels=true});
if(anyReels){const s=document.createElement("script");s.async=true;s.src="https://www.instagram.com/embed.js";document.body.append(s)}
const next=document.querySelector("#p-next");if(P.next){next.href=P.next.link;next.querySelector("strong").textContent=P.next.title}else next.hidden=true;
const si=document.querySelector("#p-social-intro");if(P.socialIntro)si.textContent=P.socialIntro;const li=document.querySelector("#p-longform-intro");if(P.longformIntro)li.textContent=P.longformIntro;
const setHead=(sel,t,l)=>{const sec=document.querySelector(sel).closest("section");if(t)sec.querySelector("h2").firstChild.textContent=t;if(l)sec.querySelector(".section-head>span").textContent=l};setHead("#p-reels",P.socialTitle,P.socialLabel);setHead("#p-episodes",P.longformTitle,P.longformLabel);
if(P.highlight){const h=el(P.highlight.link?"a":"div","project-highlight");if(P.highlight.link){h.href=P.highlight.link;h.target="_blank";h.rel="noopener noreferrer"}h.append(el("span",null,P.highlight.label),el("strong",null,P.highlight.text+(P.highlight.link?" ↗":"")));document.querySelector(".project-intro>div").prepend(h)}
const aw=document.querySelector("#p-award");if(P.award){const A=P.award;setHead("#p-award",A.title,A.label);aw.append(el("p","section-intro",A.intro));const row=el("div","stat-row");A.stats.forEach(([n,l])=>{const d=el("div","stat");d.append(el("strong",null,n),el("span",null,l));row.append(d)});aw.append(row);if(A.quote){const q=el("blockquote","judges-quote");q.append(el("p",null,"“"+A.quote+"”"));const c=el("cite");c.append(A.source);if(A.link){const a=el("a",null," · Official winners ↗");a.href=A.link;a.target="_blank";a.rel="noopener noreferrer";c.append(a)}q.append(c);aw.append(q)}}else aw.closest("section").hidden=true;
document.querySelector("#year").textContent=new Date().getFullYear();
