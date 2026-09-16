export interface UserHandles {
  all: string;
  discordId: string;
  linkedin?: string;
  [key: string]: string | undefined;
}

export const USER_HANDLES: UserHandles = {
  all: 'uddhav05-cyber',
  discordId: '1195303714777468988',
  linkedin: 'uddhav-bhople',
};

export interface SocialLink {
  name: string;
  urlTemplate: string;
  handleKey: keyof UserHandles;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'X',
    urlTemplate: 'https://x.com/{handle}',
    handleKey: 'all',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    urlTemplate: 'https://instagram.com/uddhav__v',
    handleKey: 'all',
    icon: 'instagram',
  },
  /*{
    name: 'Twitter',
    urlTemplate: 'https://twitter.com/{handle}',
    handleKey: 'all',
    icon: 'twitter',
  },*/
  // {
  //   name: 'Discord',
  //   //urlTemplate: 'https://discord.com/users/{handle}',
  //   urlTemplate: 'https://discord.com/invites/{handle}', // Updated to invite or user link if known, but keeping generic for now or user ID. Actually, let's keep it 'users' if that was the intent, or just simple.
  //   handleKey: 'discordId',
  //   icon: 'discord',
  // },
  {
    name: 'GitHub',
    urlTemplate: 'https://github.com/{handle}',
    handleKey: 'all',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    urlTemplate: 'https://www.linkedin.com/in/{handle}',
    handleKey: 'linkedin',
    icon: 'linkedin',
  },
];

export interface ConnectLink {
  name: string;
  handle: string;
  urlTemplate: string;
  handleKey: keyof UserHandles;
}

export const CONNECT_LINKS: ConnectLink[] = [
  {
    name: 'GitHub',
    handle: 'uddhav05-cyber',
    urlTemplate: 'https://github.com/{handle}',
    handleKey: 'all',
  },
  /*{
    name: 'Discord',
    handle: 'trahoangdev',
    urlTemplate: 'https://discord.com/users/{handle}',
    handleKey: 'discordId',
  },*/
  {
    name: 'Dev.to',
    handle: 'uddhav05-cyber',
    urlTemplate: 'https://dev.to/{handle}',
    handleKey: 'all',
  },
  {
    name: 'Instagram',
    handle: 'uddhav__v',
    urlTemplate: 'https://instagram.com/{handle}',
    handleKey: 'all',
  },
  {
    name: 'HuggingFace',
    handle: 'uddhav05-cyber',
    urlTemplate: 'https://huggingface.co/{handle}',
    handleKey: 'all',
  },
  {
    name: 'X',
    handle: 'uddhavbhople',
    urlTemplate: 'https://x.com/{handle}',
    handleKey: 'all',
  },
  {
    name: 'LinkedIn',
    handle: 'uddhav-bhople',
    urlTemplate: 'https://www.linkedin.com/in/{handle}',
    handleKey: 'linkedin',
  },
];

export const generateSocialUrl = (urlTemplate: string, handle: string): string =>
  urlTemplate.replace('{handle}', handle);

export const generateConnectUrl = (urlTemplate: string, handle: string): string =>
  urlTemplate.replace('{handle}', handle);
