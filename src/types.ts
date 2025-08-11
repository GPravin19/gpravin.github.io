export interface Site {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  scheduledPostMargin: number;
}

export interface SocialMediaObjects {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}

export type SocialObjects = SocialMediaObjects[];

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";

export interface BlogFrontmatter {
  title: string;
  description?: string;
  pubDatetime: Date;
  modDatetime?: Date;
  author?: string;
  slug: string;
  featured?: boolean;
  draft?: boolean;
  tags?: string[];
  ogImage?: string;
  canonicalURL?: string;
}
