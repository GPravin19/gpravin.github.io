import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://gpravin.com",
  author: "G Pravin Kumar",
  desc: "Personal website of G Pravin Kumar",
  title: "GPravin",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/iamgpravin",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/iamgpravin",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/iamgpravin",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/iamGPravinKumar",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@gpravin.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];

export const THEME_CONFIG = {
  primaryColor: "#ff6b35", // Orange primary color
  accentColor: "#ff8f65", // Lighter orange accent
  backgroundColor: "#ffffff",
  textColor: "#1a1a1a",
  mutedColor: "#6b7280",
};

export const CATEGORIES = [
  "Pravin's Field Notes",
  "Engineering Notes",
  "Entrepreneurship",
];
