import { ArrowUp, AtSign, Camera, Heart, MessageCircle, PlayCircle } from "lucide-react";
import type { ProfileInfo, SocialLink } from "@/data/profile";

const socialIcons = {
  discord: MessageCircle,
  instagram: Camera,
  twitter: AtSign,
  youtube: PlayCircle,
};

function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = socialIcons[link.icon];

  return (
    <a
      href={link.href}
      aria-label={link.label}
      target="_blank"
      rel="noreferrer"
      className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-fuchsia-200 transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/12 hover:text-white"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

export function Footer({ profile }: { profile: ProfileInfo }) {
  return (
    <footer
      id="contact"
      className="mt-8 rounded-b-[24px] border border-fuchsia-300/20 bg-[#08050d]/90 px-5 py-6 backdrop-blur-xl sm:px-8"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm font-semibold text-violet-200">
          Made with <Heart className="h-4 w-4 fill-fuchsia-400 text-fuchsia-400" aria-hidden="true" /> by{" "}
          {profile.displayName}
        </p>

        <div className="flex items-center gap-3">
          {profile.socialLinks.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
          <a
            href="#home"
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-fuchsia-200 transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/12 hover:text-white"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
