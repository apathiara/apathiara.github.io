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
  {title:"Dish",category:"Lead social editor / Long-form",description:"Lead social editor on the Waitrose podcast, cutting the reels behind its Instagram, plus full-episode long-form edits.",vimeoId:"",vimeoHash:"",image:"images/dish-tile.jpg",imageAlt:"Dish hosts Nick Grimshaw and Angela Hartnett with the Dish from Waitrose logo",link:"dish.html"},
  {title:"SOAS",category:"Video lead / Social video",description:"An award-winning video series I made end to end, from idea and script to shoot, edit and social, plus long-form podcast production.",vimeoId:"",vimeoHash:"",image:"images/soas-tile.jpg",imageAlt:"Five SOAS academics from the Meet the Academics series",link:"soas.html"},
  {title:"Events & Highlights",category:"Production / Editing",description:"Capturing the atmosphere and stories of live events in energetic highlight films.",vimeoId:"",vimeoHash:"",image:"",imageAlt:"Event project thumbnail",link:""},
  {title:"Independent Projects",category:"Production / Post-production",description:"Selected podcast, commercial and independent production work.",vimeoId:"",vimeoHash:"",image:"",imageAlt:"Independent project thumbnail",link:""}
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
    next: {title:"SOAS", link:"soas.html"}
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
    socialIntro: "Short explainers that pair a SOAS expert with a trending story. These nine reels have drawn more than 81,000 likes.",
    reels: [
      {id:"DRwjbjFDFo4", caption:"Why Paris Paloma’s “Labour” became a feminist anthem", stats:"47K likes · 33 comments"},
      {id:"DH8OAMXNLOP", caption:"The White Lotus and its South East Asian setting", stats:"24K likes · 21 comments"},
      {id:"DU-exipDENv", caption:"The racist history of the word ‘voodoo’", stats:"5K likes · 29 comments"},
      {id:"DOa3RtQDIyg", caption:"Why Ed Sheeran’s “Azizam” resonated with Iranians", stats:"2.6K likes · 19 comments"},
      {id:"DQ7FXnsDC1h", caption:"Is Minecraft a colonial fantasy?", stats:"935 likes · 39 comments"},
      {id:"DMsfs-4oG6c", caption:"Squid Game as a mirror to capitalism", stats:"870 likes · 11 comments"},
      {id:"DTP1Y5TDBto", caption:"What was behind the Labubu hype?", stats:"399 likes · 4 comments"},
      {id:"DWCD2iqDPFu", caption:"AI warfare and the Global South", stats:"272 likes · 6 comments"},
      {id:"DPT7txTjPuy", caption:"Ghost of Yōtei: history meets fiction", stats:"265 likes · 6 comments"}
    ],
    longformTitle: "Global Developments",
    longformLabel: "03 / PODCAST",
    longformIntro: "Long-form conversations from the SOAS Global Developments podcast, with end-to-end production and post-production.",
    episodes: [
      {title:"Work in the Age of Digital Capitalism", youtubeId:"lCvfH1fsnVU", note:"End-to-end production and post-production."},
      {title:"Oil Frontiers: A Conversation with Adam Hanieh", youtubeId:"tZ2FFXrvwXY", note:"End-to-end production and post-production."}
    ],
    next: {title:"Dish", link:"dish.html"}
  }
};