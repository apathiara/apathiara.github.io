const filters=document.querySelector("#archive-filters"),grid=document.querySelector("#archive-grid"),count=document.querySelector("#archive-count");
const categories=ARCHIVE_CATEGORIES;
let active="All";
function draw(){
  filters.innerHTML="";
  categories.forEach(c=>{const b=document.createElement("button");b.type="button";b.textContent=c;b.className="filter"+(active===c?" active":"");b.setAttribute("aria-pressed",String(active===c));b.addEventListener("click",()=>{active=c;draw()});filters.append(b)});
  grid.innerHTML="";const items=ARCHIVE.filter(p=>active==="All"||p.category===active);
  count.textContent=items.length+" project"+(items.length===1?"":"s");
  if(!items.length){const empty=document.createElement("p");empty.className="archive-empty";empty.textContent=ARCHIVE.length?"No projects in this category yet.":"The archive is ready. Add your approved Vimeo projects to the ARCHIVE array in projects.js.";grid.append(empty);return}
  items.forEach(p=>{const card=document.createElement("article");card.className="project-card";const media=document.createElement("div");media.className="project-image";if(p.image){const img=document.createElement("img");img.src=p.image;img.alt=p.title+" thumbnail";img.loading="lazy";media.append(img)}else{const label=document.createElement("span");label.className="project-placeholder";label.textContent=p.title;media.append(label)}const h=document.createElement("h3");h.textContent=p.title;const cat=document.createElement("div");cat.className="category";cat.textContent=[p.category,p.year].filter(Boolean).join(" / ");const d=document.createElement("p");d.textContent=p.description||"";card.append(media,h,cat,d);if(p.vimeoId){const frame=document.createElement("div");frame.className="video-frame";frame.style.marginTop="20px";const url=new URL("https://player.vimeo.com/video/"+encodeURIComponent(p.vimeoId));if(p.vimeoHash)url.searchParams.set("h",p.vimeoHash);const iframe=document.createElement("iframe");iframe.src=url.toString();iframe.title=p.title;iframe.loading="lazy";iframe.allow="autoplay; fullscreen; picture-in-picture";iframe.allowFullscreen=true;frame.append(iframe);card.append(frame)}grid.append(card)});
}
document.querySelector("#year").textContent=new Date().getFullYear();draw();
