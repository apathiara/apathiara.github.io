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
if(P.reels&&P.reels.length){P.reels.forEach(r=>{const card=el("figure","reel-card");const bq=document.createElement("blockquote");bq.className="instagram-media";bq.setAttribute("data-instgrm-permalink","https://www.instagram.com/p/"+r.id+"/");bq.setAttribute("data-instgrm-version","14");const a=el("a","reel-fallback","Watch on Instagram ↗");a.href="https://www.instagram.com/p/"+r.id+"/";a.target="_blank";a.rel="noopener noreferrer";bq.append(a);const fc=el("figcaption");fc.append(el("span","reel-title",r.caption));if(r.stats)fc.append(el("span","reel-stats",r.stats));card.append(bq,fc);reels.append(card)});const s=document.createElement("script");s.async=true;s.src="https://www.instagram.com/embed.js";document.body.append(s)}else reels.closest("section").hidden=true;
const next=document.querySelector("#p-next");if(P.next){next.href=P.next.link;next.querySelector("strong").textContent=P.next.title}else next.hidden=true;
const si=document.querySelector("#p-social-intro");if(P.socialIntro)si.textContent=P.socialIntro;const li=document.querySelector("#p-longform-intro");if(P.longformIntro)li.textContent=P.longformIntro;
document.querySelector("#year").textContent=new Date().getFullYear();
