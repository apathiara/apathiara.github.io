// Edit this file to update your site. Vimeo IDs are the numeric part of a video URL.
// For unlisted Vimeo videos, add the privacy hash as vimeoHash: "...".
// Replace placeholder links, text and images with approved material.
const SITE = {
  showreelId: "", // e.g. "123456789"
  showreelHash: "",
  email: "apathiara@gmail.com",
  vimeoUrl: "https://vimeo.com/user197682004",
  linkedinUrl: "https://www.linkedin.com/in/aman-pathiara"
};
const PROJECTS = [
  {title:"Dish",category:"Lead social editor / Long-form",description:"Lead social editor on the British Podcast Awards 2026 Gold winner, cutting the reels behind its Instagram, plus full-episode long-form edits.",vimeoId:"",vimeoHash:"",image:"images/dish-tile.jpg?v=2",imageAlt:"Dish hosts Nick Grimshaw and Angela Hartnett with the Dish from Waitrose logo",link:"dish.html"},
  {title:"BBC",category:"Radio 1 & Radio 2 / Festival socials",description:"Social video for Radio 1 and Radio 2’s 2025 festival season, from Big Weekend and Glastonbury to Reading & Leeds and Radio 2 in the Park.",vimeoId:"",vimeoHash:"",image:"",strip:["https://i.vimeocdn.com/video/2163439675-97eaf1964a440a5001a22f7a4932685c830ee0dc79a5fc38512b85282fb57e56-d_640", "https://i.vimeocdn.com/video/2163440198-adee663502165f76fc638ef92b42e5de8d30bc22525debd9e6b7d655e2eee294-d_640", "https://i.vimeocdn.com/video/2163438359-c204ab060c8d83c8fd484b331a4ccfe75bdfa0ad5ad25fdf1f415e613a7d6f29-d_640", "https://i.vimeocdn.com/video/2163439521-2052ab244e9e533448d155b473f55cbc289112bb41e602cab834561b16658b4b-d_640", "https://i.vimeocdn.com/video/2163440418-28cdd198da8c40a2b3369ac5084233e5c7b5948c974d67d264b76ddb70adff86-d_640"],imageAlt:"Stills from BBC Radio 1 and Radio 2 festival social videos",link:"bbc.html"},
  {title:"SOAS",category:"Video lead / Social video",description:"An award-winning video series I made end to end, from idea and script to shoot, edit and social, plus long-form podcast production.",vimeoId:"",vimeoHash:"",image:"images/soas-tile.jpg?v=2",imageAlt:"Five SOAS academics from the Meet the Academics series",link:"soas.html"},
  {title:"Royal College of Art",category:"Freelance editor / Showreels",description:"Yearly showreels and trailers for the MA Interior Design’s superFUTURES and superMATTER studios, crafted from student-submitted films.",vimeoId:"",vimeoHash:"",image:"https://i.vimeocdn.com/video/2163434321-71fa1db0e9292322230020bc87413249694510016a0b05518e2003392d773f4a-d_1280",imageAlt:"Still from the superFUTURES Nature’s Depot showreel",link:"rca.html"},
  {title:"ITN Productions",category:"Editor / Archive series",description:"Editor of This Week in History, a 52-episode series for the Now 80s TV channel, cut from ITN’s 1980s news archive.",vimeoId:"",vimeoHash:"",image:"images/itn-tile.jpg",imageAlt:"Now 80s This Week in History title card over a New Year crowd",link:"itn.html"},
  {title:"Independent Projects",category:"Spec advert / Event film",description:"A spec advert for breaking’s Olympic debut that won me a place on BBC Creative’s advertising masterclass, plus an awards-night film for Food and Travel magazine.",vimeoId:"",vimeoHash:"",image:"",strip:["https://i.vimeocdn.com/video/2214161776-8186fbbb210eea6ea86306dfaf2aec442f34ac78f642c287f6f330e128069464-d_960", "https://i.vimeocdn.com/video/2163448617-20d294387067836f0e8edee312273e773b9733a0852f6a4e6379e5c2658f3818-d_960"],imageAlt:"Stills from the Breaking spec advert and the Food and Travel Awards 2025 film",link:"indie.html"}
];

// Archive items appear on archive.html. Only add videos you have permission to publish.
// Vimeo URL: https://vimeo.com/123456789 (ID 123456789).
// For unlisted links: https://vimeo.com/123456789/abcdef (hash abcdef).
const ARCHIVE = [
  // Example (uncomment and replace with a real video):
  // {title:"Project title",category:"Social",year:"2026",description:"Your role and the brief.",vimeoId:"123456789",vimeoHash:"",image:"images/project.jpg"}
];
const ARCHIVE_CATEGORIES = ["All","Long-form","Social","Production","Events","Other"];

// Homepage Podcasts section (hidden automatically when empty). Episodes now live on each project page.
const PODCASTS = [];

// Project pages (e.g. dish.html). Each page reads its entry by the data-project name on <main>.
// episodes: YouTube IDs (the part after watch?v=). reels: Instagram post IDs (the part after /p/).
const PAGES = {
  dish: {
    kicker: "WAITROSE / LEAD SOCIAL EDITOR",
    title: "Dish",
    intro: "I’m the lead social editor on Dish from Waitrose, the food-and-chat podcast where Nick Grimshaw and Angela Hartnett cook for a famous guest each week. I cut the reels you see on the show’s Instagram: finding the moment in an hour of conversation and shaping it into something people stop for, share and follow back to the full episode. When the show needs it, I take on long-form too.",
    tags: ["Lead social editor","Instagram Reels","Short-form storytelling","Long-form episodes","Multicamera"],
    highlight: {label:"★ GOLD / BRITISH PODCAST AWARDS 2026", text:"Spotlight Award, plus Silver for Video Innovation", link:"https://www.britishpodcastawards.com/winners-2026"},
    award: {
      title: "Awards",
      label: "01 / BRITISH PODCAST AWARDS 2026",
      intro: "In 2026, Dish from Waitrose won three British Podcast Awards, including Silver for Video Innovation, the category closest to the social and video work I lead. Since launching in 2022, the show has passed one billion combined downloads, views and listens.",
      stats: [["Gold","Spotlight Award"],["Silver","Video Innovation"],["Silver","Interview"]],
      link: "https://www.britishpodcastawards.com/winners-2026",
      source: "British Podcast Awards 2026"
    },
    socialLabel: "02 / INSTAGRAM REELS",
    longformLabel: "03 / FULL EPISODES",
    socialIntro: "Character-led, recipe-driven moments cut for the feed. These seven reels alone have drawn more than 176,000 likes.",
    reels: [
      {id:"DePNOdDJC1f", caption:"The smash cheeseburger that left Andrew Garfield reeling", stats:"110K likes · 746 comments"},
      {id:"DdrKCJVIDm3", caption:"A Bake Off-worthy recipe for Alison Hammond and Noel Fielding", stats:"9.1K likes · 55 comments"},
      {id:"DZuNCcbttkf", caption:"Our tribute to Kevin McCloud and Grand Designs", stats:"5.8K likes · 105 comments"},
      {id:"DcQY_8hIClK", caption:"Ray Winstone picks his favourite posh nosh", stats:"17K likes · 165 comments"},
      {id:"DbaUaGyBVlW", caption:"Tom Holland makes meringues", stats:"19K likes · 32 comments"},
      {id:"DZhMHiOI256", caption:"Marcus Mumford plays UK vs USA", stats:"9.2K likes · 44 comments"},
      {id:"DZSfc-0I6JJ", caption:"Emilia Clarke’s love letter to tahini", stats:"6K likes · 24 comments"}
    ],
    longformIntro: "Alongside the socials, I step in to cut full multicamera episodes for YouTube and podcast platforms, covering for the show’s lead long-form editor.",
    episodes: [
      {title:"Angela Scanlon’s “Filthy” Air Fryer Habit", youtubeId:"hFobYZPAJ6U", note:"Full episode edit."},
      {title:"Jesse Burgess Talks Michelin Stars Over Lemon Chicken", youtubeId:"81fr6vwHXIA", note:"Full episode edit."}
    ],
    next: {title:"BBC", link:"bbc.html"}
  },
  soas: {
    kicker: "SOAS UNIVERSITY OF LONDON / VIDEO LEAD",
    title: "SOAS",
    intro: "As Senior Digital Marketing Officer and Video Lead at SOAS University of London, I made SOAS Explains and Meet the Academics from start to finish: approaching academics and shaping each idea with them, scripting, filming, editing and publishing to social. The series puts a SOAS expert on whatever the internet is talking about, from The White Lotus to Labubus, and won Gold for Most Effective Use of Social Media at the HEIST Awards 2026.",
    tags: ["Concept & ideation","Talent liaison","Scripting","Filming","Editing","Social publishing"],
    highlight: {label:"★ GOLD / HEIST AWARDS 2026", text:"Most Effective Use of Social Media", link:"https://www.heistawards.com/2026winners.html"},
    award: {
      title: "The campaign",
      label: "01 / HEIST AWARDS 2026",
      intro: "With no paid media and a £10k budget, SOAS Explains and Meet the Academics repositioned SOAS as ‘The World’s University’ through short-form social video, raising traffic to study pages and strengthening its reputation with prospective students.",
      stats: [["1M+","organic views"],["£10k","total budget"],["£0","paid media"]],
      quote: "An outstanding example of social media done exceptionally well… creating genuine thumb-stopping content while delivering impressive results.",
      source: "HEIST Awards 2026 judges",
      link: "https://www.heistawards.com/2026winners.html"
    },
    socialTitle: "SOAS Explains",
    socialLabel: "02 / INSTAGRAM REELS",
    socialIntro: "Short explainers that pair a SOAS expert with a trending story. These six reels have drawn more than 80,000 likes.",
    reels: [
      {id:"DRwjbjFDFo4", caption:"Why Paris Paloma’s “Labour” became a feminist anthem", stats:"47K likes · 33 comments"},
      {id:"DH8OAMXNLOP", caption:"The White Lotus and its South East Asian setting", stats:"24K likes · 21 comments"},
      {id:"DU-exipDENv", caption:"The racist history of the word ‘voodoo’", stats:"5K likes · 29 comments"},
      {id:"DOa3RtQDIyg", caption:"Why Ed Sheeran’s “Azizam” resonated with Iranians", stats:"2.6K likes · 19 comments"},
      {id:"DQ7FXnsDC1h", caption:"Is Minecraft a colonial fantasy?", stats:"935 likes · 39 comments"},
      {id:"DMsfs-4oG6c", caption:"Squid Game as a mirror to capitalism", stats:"870 likes · 11 comments"},
    ],
    moreReels: [{
      title: "Meet the Academics",
      label: "03 / INSTAGRAM REELS",
      intro: "Relaxed, personality-led conversations that introduce the people behind the research: their passions, favourite films and books, and the quotes they live by. These three reels have drawn more than 42,000 likes.",
      reels: [
        {id:"DPogkGIDBMu", caption:"Lindiwe Dovey: “You are what you watch”", stats:"41K likes · 29 comments"},
        {id:"C71swNviCrP", caption:"Satona Suzuki on Studio Ghibli, anime and East Asian novels", stats:"635 likes · 8 comments"},
        {id:"DAqmbg8K_xZ", caption:"Naresh Sharma on Bollywood and learning languages", stats:"456 likes · 7 comments"},
      ]
    }],
    longformTitle: "Global Developments",
    longformLabel: "04 / PODCAST",
    longformIntro: "Long-form conversations from the SOAS Global Developments podcast, with end-to-end production and post-production.",
    episodes: [
      {title:"Work in the Age of Digital Capitalism", youtubeId:"lCvfH1fsnVU", note:"End-to-end production and post-production."},
      {title:"Oil Frontiers: A Conversation with Adam Hanieh", youtubeId:"tZ2FFXrvwXY", note:"End-to-end production and post-production."}
    ],
    next: {title:"Royal College of Art", link:"rca.html"}
  },
  rca: {
    kicker: "ROYAL COLLEGE OF ART / FREELANCE EDITOR",
    title: "RCA",
    intro: "Since 2023, I’ve edited the yearly showreels and trailers for the Royal College of Art’s MA Interior Design, working with Gem Barton and Tania López Winkler, who lead its superFUTURES and superMATTER studios. I don’t shoot these: I take the films students submit and craft them into one story, finding the narrative across a whole cohort’s work and shaping it so it moves people.",
    tags: ["Freelance editor","Narrative editing","Showreels & trailers","Student-submitted footage","Every year since 2023"],
    highlight: {label:"SCREENED / SAATCHI GALLERY 2026", text:"DIGITALISM at the British Art Fair", link:"https://www.britishartfair.co.uk/exhibitors-digitalism"},
    videoSections: [
      {title:"superFUTURES", label:"01 / SPECULATIVE DESIGN",
       intro:"A studio that uses film to rehearse possible futures for how we live. Each year, a cohort’s worth of near-future worlds becomes a single film.",
       videos:[
        {title:"superFUTURES 2026", vimeoId:"1237392290", note:"Annual showreel · 5:04"},
        {title:"superFUTURES 2024–25: Nature’s Depot", vimeoId:"1197154313", note:"Annual showreel · 3:05"},
        {title:"superFUTURES 2023–24", vimeoId:"1197154445", note:"Annual showreel · 2:30"},
        {title:"superFUTURES at the Saatchi Gallery", vimeoId:"1237392325", ratio:"426/130", wide:true, note:"Ultra-wide exhibition cut, screened at DIGITALISM, British Art Fair, Saatchi Gallery, 24–27 September 2026 · 1:09"}
       ]},
      {title:"superMATTER", label:"02 / MATERIAL & MAKING",
       intro:"A hands-on studio exploring how materials, craft and making shape space. These films slow down to texture, process and the made thing.",
       videos:[
        {title:"superMATTER 2026", vimeoId:"1237392255", note:"Annual showreel · 4:21"},
        {title:"superMATTER 2025", vimeoId:"1197153847", note:"Annual showreel · 4:13"}
       ]}
    ],
    next: {title:"ITN Productions", link:"itn.html"}
  },
  itn: {
    kicker: "ITN PRODUCTIONS / EDITOR",
    title: "ITN",
    intro: "In December 2021, I edited This Week in History for ITN Productions: a 52-episode series made for the Now 80s TV channel’s 2022 schedule. Each episode dives into ITN’s news archive to revisit what happened that week in the 1980s, from New Year in Trafalgar Square to the first ‘pocket’ mobile phones, cut into a quick, nostalgic burst of under a minute, designed to sit between the music videos.",
    tags: ["Editor","Archive footage","Short-form series","Broadcast","Channel branding"],
    award: {
      title: "The series",
      label: "01 / NOW 80s",
      stats: [["52","episodes"],["1980s","ITN news archive"],["<1 min","per episode"]]
    },
    videoSections: [
      {title:"Episodes", label:"02 / JANUARY–FEBRUARY 2022", cols:3,
       intro:"The first nine weeks of the series.",
       videos:[
        {title:"Episode 1", vimeoId:"1237400400", ratio:"5/4", note:"Week of 3 January · 0:53"},
        {title:"Episode 2", vimeoId:"1237400402", ratio:"5/4", note:"Week of 10 January · 0:48"},
        {title:"Episode 3", vimeoId:"1237400403", ratio:"5/4", note:"Week of 17 January · 0:52"},
        {title:"Episode 4", vimeoId:"1237400401", ratio:"5/4", note:"Week of 24 January · 0:50"},
        {title:"Episode 5", vimeoId:"1237400857", ratio:"5/4", note:"Week of 31 January · 0:49"},
        {title:"Episode 6", vimeoId:"1237400889", ratio:"5/4", note:"Week of 7 February · 0:49"},
        {title:"Episode 7", vimeoId:"1237400888", ratio:"5/4", note:"Week of 14 February · 0:42"},
        {title:"Episode 8", vimeoId:"1237400892", ratio:"5/4", note:"Week of 21 February · 0:55"},
        {title:"Episode 9", vimeoId:"1237401417", ratio:"5/4", note:"Week of 28 February · 0:51"}
       ]}
    ],
    next: {title:"Independent Projects", link:"indie.html"}
  },
  bbc: {
    kicker: "BBC RADIO 1 & RADIO 2 / FESTIVAL SOCIALS",
    title: "BBC",
    intro: "In 2025, I worked across BBC Radio 1 and Radio 2’s festival coverage, cutting social video for both stations at Radio 1’s Big Weekend in Liverpool, Glastonbury, Reading & Leeds and Radio 2 in the Park, plus Crossed Wires, the live podcast festival in Sheffield. The work ranged from fast-turnaround daily round-ups to best-of reels, backstage moments built for the feed, and a bespoke edit requested by Lola Young’s team.",
    tags: ["Social video","Fast turnaround","Live events","Instagram & YouTube","Artist & talent content"],
    award: {
      title: "The season",
      label: "01 / SUMMER 2025",
      stats: [["5","festivals"],["2","national stations"],["Daily","round-ups"]]
    },
    videoSections: [
      {title:"Festival socials", label:"02 / RADIO 1 & RADIO 2", cols:4,
       intro:"Cut for Radio 1 and Radio 2’s Instagram and YouTube, in festival order.",
       videos:[
        {title:"Big Weekend 2025: Highlights", vimeoId:"1197165684", ratio:"9/16", note:"Radio 1’s Big Weekend · 1:17"},
        {title:"Greg James and Ed Sheeran", vimeoId:"1197165756", ratio:"9/16", note:"Backstage at Big Weekend · 1:03"},
        {title:"Lola Young: One Thing", vimeoId:"1197165687", ratio:"9/16", note:"Bespoke edit for Lola Young’s team · 0:27"},
        {title:"Glastonbury 2025: Best Bits", vimeoId:"1197165875", ratio:"9/16", note:"Radio 1 at Glastonbury · 1:14"},
        {title:"Reading & Leeds: Friday", vimeoId:"1197165471", ratio:"9/16", note:"Daily round-up · 0:56"},
        {title:"Reading & Leeds: Saturday", vimeoId:"1197165441", ratio:"9/16", note:"Daily round-up · 0:59"},
        {title:"Reading & Leeds: Sunday", vimeoId:"1197165454", ratio:"9/16", note:"Daily round-up · 0:51"},
        {title:"Radio 2 in the Park 2025", vimeoId:"1197167303", ratio:"9/16", note:"Highlights reel · 0:57"}
       ]},
      {title:"Crossed Wires", label:"03 / BBC SOUNDS", 
       intro:"A sizzle reel for the live podcast festival BBC Sounds partners with, featuring some of the best talent from the BBC’s podcasts.",
       videos:[
        {title:"Crossed Wires Festival: Sizzle Reel", vimeoId:"1197167738", wide:true, note:"Sizzle reel · 1:02"}
       ]}
    ],
    next: {title:"SOAS", link:"soas.html"}
  },
  indie: {
    kicker: "INDEPENDENT / SPEC & EVENT WORK",
    title: "Independent",
    intro: "Work outside my regular clients: a spec advert that won me a place on BBC Creative’s advertising masterclass, and an awards-night film for Food and Travel magazine.",
    tags: ["Concept","Advertising","Editing","Event films"],
    highlight: {label:"BBC CREATIVE / 2024", text:"Place on the advertising masterclass"},
    videoSections: [
      {title:"Breaking", label:"01 / SPEC ADVERT, 2024",
       intro:"A 34-second spec advert celebrating breaking’s debut as an Olympic sport at Paris 2024. It won me a place on BBC Creative’s 12-week advertising masterclass, run by the BBC’s in-house creative agency.",
       videos:[{title:"Breaking: For a New Generation", vimeoId:"1237407373", wide:true, note:"Spec advert · 0:34"}]},
      {title:"Food and Travel Awards", label:"02 / EVENT FILM, 2025",
       intro:"A film of the 2025 Food and Travel Reader Awards, Food and Travel magazine’s gala dinner at the Royal Automobile Club on Pall Mall.",
       videos:[{title:"Food and Travel Awards 2025", vimeoId:"1197173997", wide:true, note:"Event film · 2:49"}]}
    ],
    next: {title:"Dish", link:"dish.html"}
  }
};