// the data from HamNavigation.jsx
// const NavLinksInfo = [
//     {link : "/allStories" , text : "STORIES"} ,
//     {link : "/films" , text : "FILMS"} ,
//     {link : "/shopall" , text : "SHOP"} ,
//     {link : "/blog" , text : "BLOG"} ,
//     {link : "/contactus" , text : "CONTACT US"}
// ]


// close function for all navigation section
const closeFunc = (display:any, animation:any) => {
  if (display !== undefined && animation !== undefined) {
    animation("slideUp");

    setTimeout(() => {
      display("d-none");
    }, 370)
  }

  else if (animation === undefined) {
    display("d-none ");
  }
}


const BlogPostSummaryData = [
  {
    images: "images/stories/stories1.jpg",
    heading: "Making Art in the Middle of Nowhere",
    para: " Exploring a West Texas must-see, firmly planted at the crossroads of Art and Myth."
  },

  {
    images: "images/stories/stories2.jpg",
    heading: "Closer to Home",
    para: "Bryce Ehrecke & Kelly Brown share how natural building could empower both a more beautiful and a more sustainable future."
  },

  {
    images: "images/stories/stories3.jpg",
    heading: "Faculty Department",
    para: "Photographer Justin Chung’s project Faculty Department is an ode to the inspiration found in his subjects."
  },

  {
    images: "images/stories/stories4.jpg",
    heading: "Antelope Canyon",
    para: "Worn by wind and sand, these centuries old slot canyons are a sculpted masterpiece, such that only nature could reveal."
  }
]



const StoriesData = [
  {
    image: "images/stories/stories1.jpg",
    storiesLink: "/storiesDetail",
    title: "SHANTELL MARTIN ",
    titleSpan: "| ART",
    linkText: "Well, ARE YOU?",
    para: "Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?",
    date: "10.05.19"
  },

  {
    image: "images/stories/stories2.jpg",
    storiesLink: "/storiesDetail",
    title: "CRÉ NATURAL BUILDING",
    titleSpan: "| ARCHITECTURE",
    linkText: "Closer to Home",
    para: "Bryce Ehrecke & Kelly Brown share how natural building could empower both a more beautiful and a more sustainable future.",
    date: "11.11.19"
  },

  {
    image: "images/stories/stories3.jpg",
    storiesLink: "/storiesDetail",
    title: "ALISON CARROLL",
    titleSpan: "| ENTREPRENEUR",
    linkText: "Wonder Valley",
    para: "Wonder Valley is a built around the essentials for cultivating a rich existence, with good food and good health for a good life.",
    date: "10.05.19"
  },

  {
    image: "images/stories/stories4.jpg",
    storiesLink: "/storiesDetail",
    title: "JUSTIN CHUNG",
    titleSpan: "| PHOTOGRAPHER",
    linkText: "Faculty Department",
    para: "Photographer Justin Chung’s project Faculty Department is an ode to the inspiration found in his subjects.",
    date: "10.05.19"
  },

  {
    image: "images/stories/stories5.jpg",
    storiesLink: "/storiesDetail",
    title: "JOEKENNETH MUSEAU",
    titleSpan: "| CERAMICS",
    linkText: "The Journey of Departure",
    para: "Artist and educator Shantell Martin uses her work to ask the ultimate question of identity: Are you, YOU?",
    date: "10.05.19"
  },

  {
    image: "images/stories/stories6.jpg",
    storiesLink: "/storiesDetail",
    title: "PAGE, AZ",
    titleSpan: "| LANDSCAPE",
    linkText: "Antelope Canyon",
    para: "Worn by wind and sand, these centuries old slot canyons are a sculpted masterpiece, such that only nature could reveal.",
    date: "10.05.19"
  },


  {
    image: "images/stories/stories7.jpg",
    storiesLink: "/storiesDetail",
    title: "CODY COBB",
    titleSpan: "| PHOTOGRAPHER",
    linkText: "Eons of Earth",
    para: "As a photographer and solo traveler, Cody Cobb elevates the grandeur of the natural world beyond the boundary of civilization.",
    date: "10.05.19"
  },

  {
    image: "images/stories/stories8.jpg",
    storiesLink: "/storiesDetail",
    title: "JULIANNE AHN ",
    titleSpan: "| CERAMICS",
    linkText: "Object & Totem",
    para: "Ceramicist Julianne Ahn reflects on the meditative process of her work and how it taught her balance between seasons of life.",
    date: "10.05.19"
  }
]






export {
  closeFunc,
  BlogPostSummaryData,
  StoriesData
};