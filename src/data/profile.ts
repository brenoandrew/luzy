export type Badge = {
  label: string;
  icon: "cross" | "heart" | "map" | "sparkles" | "calendar" | "star";
};

export type Interest = {
  label: string;
  icon:
    | "moon"
    | "disc"
    | "gem"
    | "triangle"
    | "hash"
    | "settings"
    | "leaf"
    | "badge";
  color: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "discord" | "instagram" | "twitter" | "youtube";
};

export type ProfileDetail = {
  icon: "music" | "map" | "cat" | "users" | "link" | "languages";
  label: string;
};

export type FriendPreview = {
  initials: string;
  color: string;
};

export type Game = {
  title: string;
  image: string;
  imageAlt: string;
  players: FriendPreview[];
  extraCount?: number;
  tags?: string[];
};

export type FavoriteGame = Game & {
  since: string;
  platforms: string[];
  reactions: string[];
  role: string;
};

export type ProfileInfo = {
  displayName: string;
  username: string;
  logoName: string;
  status: string;
  avatar: string;
  avatarAlt: string;
  coverImage: string;
  coverAlt: string;
  bioTitle: string;
  bio: string;
  ctaLabel: string;
  navLinks: { label: string; href: string }[];
  badges: Badge[];
  interests: Interest[];
  details: ProfileDetail[];
  socialLinks: SocialLink[];
  favoriteGame: FavoriteGame;
  games: Game[];
};

// Replace image paths below with your own files in /public/images when ready.
// Adding a game only requires adding one object to the games array.
export const profile: ProfileInfo = {
  displayName: "Luzy Cooper",
  username: "@babyluzy",
  logoName: "Luzy Cooper",
  status: "Online and vibing",
  avatar: "/images/avatar.svg",
  avatarAlt: "Stylized purple gamer avatar placeholder",
  coverImage: "/images/cover-banner.svg",
  coverAlt: "Cyber-purple anime gaming cover placeholder",
  bioTitle: "Welcome to my profile!",
  bio: "A cozy little corner for games I love, playlists I repeat, and the people who make online worlds feel like home.",
  ctaLabel: "Contact",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Interests", href: "#interests" },
    { label: "Games", href: "#games" },
    { label: "Contact", href: "#contact" },
  ],
  badges: [
    { label: "Catholic", icon: "cross" },
    { label: "20 years", icon: "calendar" },
    { label: "Single", icon: "heart" },
    { label: "Brazil / Portugal", icon: "map" },
  ],
  interests: [
    { label: "Night raids", icon: "moon", color: "from-violet-400 to-indigo-300" },
    { label: "Orange soda", icon: "disc", color: "from-orange-400 to-amber-300" },
    { label: "Collectibles", icon: "gem", color: "from-cyan-300 to-teal-300" },
    { label: "Anime edits", icon: "triangle", color: "from-fuchsia-400 to-pink-300" },
    { label: "Hashtags", icon: "hash", color: "from-emerald-300 to-cyan-300" },
    { label: "Settings", icon: "settings", color: "from-blue-300 to-violet-400" },
    { label: "Nature maps", icon: "leaf", color: "from-lime-300 to-emerald-300" },
    { label: "Rare badge", icon: "badge", color: "from-purple-300 to-sky-300" },
  ],
  details: [
    { icon: "music", label: "Sucker for Pain - Lil Wayne" },
    { icon: "map", label: "Brazil and Portugal" },
    { icon: "languages", label: "Portuguese, English, and tiny bits of Spanish" },
    { icon: "cat", label: "Erika Cooper" },
    { icon: "users", label: "Ashley | Eternality" },
    { icon: "link", label: "https://rebrand.ly/babyluzy" },
  ],
  socialLinks: [
    { label: "Discord", href: "https://discord.com", icon: "discord" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "Twitter/X", href: "https://x.com", icon: "twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  ],
  favoriteGame: {
    title: "VRChat",
    image: "/images/game-vrchat.svg",
    imageAlt: "VRChat inspired neon placeholder",
    since: "Since 2018",
    platforms: ["HTC Vive", "Rift CV1", "Desktop"],
    reactions: ["Love this", "Sometimes hate this", "Specialist", "+ tags"],
    role: "World hopper and late-night hangout expert",
    players: [
      { initials: "LC", color: "from-cyan-300 to-fuchsia-400" },
      { initials: "AK", color: "from-pink-300 to-orange-300" },
      { initials: "EC", color: "from-violet-300 to-indigo-400" },
    ],
    extraCount: 13,
    tags: ["Social", "Avatar worlds", "Chaos"],
  },
  games: [
    {
      title: "Minecraft",
      image: "/images/game-minecraft.svg",
      imageAlt: "Minecraft inspired blocky landscape placeholder",
      players: [
        { initials: "AS", color: "from-green-300 to-cyan-300" },
        { initials: "LC", color: "from-pink-300 to-violet-400" },
      ],
      tags: ["Sandbox", "Cozy"],
    },
    {
      title: "Fortnite",
      image: "/images/game-fortnite.svg",
      imageAlt: "Fortnite inspired blue battle pass placeholder",
      players: [
        { initials: "JJ", color: "from-amber-300 to-pink-400" },
        { initials: "EC", color: "from-sky-300 to-indigo-400" },
      ],
      tags: ["Squads"],
    },
    {
      title: "Roblox",
      image: "/images/game-roblox.svg",
      imageAlt: "Roblox inspired city playground placeholder",
      players: [
        { initials: "RB", color: "from-blue-300 to-cyan-300" },
        { initials: "MV", color: "from-fuchsia-300 to-purple-400" },
        { initials: "KO", color: "from-lime-300 to-emerald-400" },
      ],
      extraCount: 14,
      tags: ["Party"],
    },
    {
      title: "Grand Theft Auto V",
      image: "/images/game-gta.svg",
      imageAlt: "Grand Theft Auto V inspired neon city placeholder",
      players: [
        { initials: "GT", color: "from-orange-300 to-red-400" },
        { initials: "LK", color: "from-cyan-300 to-blue-400" },
      ],
      tags: ["Open world"],
    },
    {
      title: "Final Fantasy XV",
      image: "/images/game-ffxv.svg",
      imageAlt: "Final Fantasy XV inspired moonlit fantasy placeholder",
      players: [{ initials: "NO", color: "from-slate-200 to-violet-300" }],
      tags: ["RPG"],
    },
    {
      title: "osu!",
      image: "/images/game-osu.svg",
      imageAlt: "osu inspired rhythm circle placeholder",
      players: [
        { initials: "OS", color: "from-pink-300 to-rose-400" },
        { initials: "BE", color: "from-cyan-300 to-blue-400" },
      ],
      tags: ["Rhythm"],
    },
    {
      title: "Genshin Impact",
      image: "/images/game-genshin.svg",
      imageAlt: "Genshin Impact inspired anime fantasy placeholder",
      players: [
        { initials: "GI", color: "from-violet-300 to-fuchsia-400" },
        { initials: "AN", color: "from-pink-200 to-purple-400" },
      ],
      tags: ["Adventure"],
    },
    {
      title: "The Sims 4",
      image: "/images/game-sims.svg",
      imageAlt: "The Sims 4 inspired colorful home placeholder",
      players: [
        { initials: "SM", color: "from-emerald-300 to-lime-300" },
        { initials: "BB", color: "from-orange-200 to-pink-300" },
      ],
      tags: ["Life sim"],
    },
    {
      title: "Dead by Daylight",
      image: "/images/game-dbd.svg",
      imageAlt: "Dead by Daylight inspired dark horror placeholder",
      players: [{ initials: "DB", color: "from-red-300 to-fuchsia-500" }],
      tags: ["Horror"],
    },
    {
      title: "Stardew Valley",
      image: "/images/game-stardew.svg",
      imageAlt: "Stardew Valley inspired farm placeholder",
      players: [
        { initials: "SV", color: "from-yellow-200 to-green-300" },
        { initials: "FM", color: "from-pink-300 to-red-300" },
      ],
      tags: ["Farming"],
    },
  ],
};
