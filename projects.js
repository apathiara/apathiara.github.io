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
  {title:"Dish",category:"Long-form / Social / Editing",description:"Long-form episodes, trailers and social-first edits for the Waitrose entertainment podcast.",vimeoId:"",vimeoHash:"",image:"https://i.ytimg.com/vi/hFobYZPAJ6U/maxresdefault.jpg",imageAlt:"Angela Scanlon laughing on the set of the Dish podcast",link:"dish.html"},
  {title:"SOAS",category:"Creative strategy / Social",description:"Making academic expertise accessible through entertaining, audience-led digital storytelling.",vimeoId:"",vimeoHash:"",image:"",imageAlt:"SOAS project thumbnail",link:""},
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
    kicker: "WAITROSE / ENTERTAINMENT PODCAST",
    title: "Dish",
    intro: "Dish from Waitrose is the food-and-chat podcast where Nick Grimshaw and Angela Hartnett cook for a different guest each week. I edit across the show, from full multicamera episodes for YouTube to the short, social-first cuts that carry it on Instagram.",
    tags: ["Long-form editing","Multicamera","Social-first cutdowns","Instagram Reels"],
    episodes: [
      {title:"Angela Scanlon’s “Filthy” Air Fryer Habit", youtubeId:"hFobYZPAJ6U", note:"Full episode edit."},
      {title:"Jesse Burgess Talks Michelin Stars Over Lemon Chicken", youtubeId:"81fr6vwHXIA", note:"Full episode edit."}
    ],
    reels: [
      {id:"DePNOdDJC1f", caption:"Andrew Garfield’s smashburger"},
      {id:"DdrKCJVIDm3", caption:"One-tin butter chicken"},
      {id:"DcQY_8hIClK", caption:"Ray Winstone on caviar"},
      {id:"DbaUaGyBVlW", caption:"Tom Holland’s pavlova"},
      {id:"DZuNCcbttkf", caption:"Kevin McCloud: architecture and food"},
      {id:"DZhMHiOI256", caption:"Dual citizen, dual taste"},
      {id:"DZSfc-0I6JJ", caption:"Emilia Clarke loves tahini"}
    ],
    next: {title:"SOAS", link:"index.html#work"}
  }
};
