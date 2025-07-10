export const NAV_LINKS = [
  { title: "About", id: 1 },
  { title: "Projects", id: 2 },
  { title: "Contact", id: 3 },
];

export const SOCIAL_MEDIA = [
  {
    media: "GitHub",
    iconName: "github",
    url: "https://github.com/viasilalahi",
    id: 1,
  },
  {
    media: "LinkedIn",
    iconName: "linkedin",
    url: "#",
    id: 2,
  },
  {
    media: "CodePen",
    iconName: "codepen",
    url: "#",
    id: 3,
  },
  {
    media: "Twitter",
    iconName: "twitter",
    url: "#",
    id: 4,
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Movie streaming",
    description: `A responsive and modern movie streaming web application built with React and Redux Toolkit. 
    It supports multi-language subtitles, personalized watchlists, search functionality, playback tracking, and detailed movie pages with trailers and ratings. 
    Designed with a clean UI, optimized for SEO, and built as a Progressive Web App to deliver an app-like experience across all devices.`,
    technologies: [
      "React",
      "Sass",
      "Redux/Toolkit",
      "Swiper",
      "I18next",
      "PWA",
    ],
    repoUrl:
      "https://github.com/viasilalahi/pengumpulantugasweb/commit/67447cfb190dbbda7672bb29b01fd744354e7e66",
    liveUrl: "#",
    previewImg: "/images/hoopla_web.webp",
    id: 1,
  },
  {
    title: "Blog",
    description: `A fully responsive educational blog page created as part of a journal-style website project, 
    designed to provide insightful content for students. It features a clean layout, user-friendly reading experience, informative visuals, and a sidebar for related articles — all optimized for readability across devices and browsers.`,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Router DOM",
      "React Helmet Async",
    ],

    repoUrl:
      "https://github.com/viasilalahi/pengumpulantugasweb/commit/67447cfb190dbbda7672bb29b01fd744354e7e66",
    liveUrl: "#",
    previewImg: "/images/personal_branding_web.webp",
    id: 2,
  },
];

export const TECHNOLOGIES = [
  {
    name: "JavaScript (ES6+)",
    description: `A versatile scripting language for web development, enabling dynamic and interactive websites. ES6+ adds modern features like arrow functions, classes, and modules.`,
    id: 1,
  },
  {
    name: "Sass",
    description: `A preprocessor for CSS, combining CSS and SCSS features for enhanced styling and organization.`,
    id: 2,
  },
  {
    name: "React",
    description: `A JavaScript library for building user interfaces using reusable components and a virtual DOM for efficient updates.`,
    id: 3,
  },

  {
    name: "Progressive Web App",
    description: `A web application that uses modern web capabilities to deliver an app-like experience, including offline support and installability.`,
    id: 4,
  },
];
