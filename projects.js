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
  {title:"SOAS",category:"Creative strategy / Social",description:"Making academic expertise accessible through entertaining, audience-led digital storytelling.",vimeoId:"",vimeoHash:"",image:"images/soas-tile.jpg",imageAlt:"Five SOAS academics from the Meet the Academics series",link:""},
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

// Four supplied YouTube podcast links. Descriptive titles/roles can be added after review.
const PODCASTS = [
 {title:"SOAS Global Developments — Work in the Age of Digital Capitalism",category:"SOAS Global Developments",description:"End-to-end production and post-production.",youtubeId:"lCvfH1fsnVU",image:""},
 {title:"SOAS Global Developments — Oil Frontiers: A Conversation with Adam Hanieh",category:"SOAS Global Developments",description:"End-to-end production and post-production.",youtubeId:"tZ2FFXrvwXY",image:""}
];

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
    next: {title:"SOAS", link:"index.html#work"}
  }
};
