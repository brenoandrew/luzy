import Image from "next/image";
import {
  BadgeCheck,
  Disc3,
  Gem,
  Hash,
  Leaf,
  Moon,
  MoreHorizontal,
  Pencil,
  Settings,
  Shield,
  Sparkles,
  Triangle,
  Users,
} from "lucide-react";
import type { Interest, ProfileInfo } from "@/data/profile";
import { BadgePill } from "@/components/BadgePill";

const interestIcons = {
  moon: Moon,
  disc: Disc3,
  gem: Gem,
  triangle: Triangle,
  hash: Hash,
  settings: Settings,
  leaf: Leaf,
  badge: Shield,
};

function InterestOrb({ interest }: { interest: Interest }) {
  const Icon = interestIcons[interest.icon];

  return (
    <span
      className={`grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-gradient-to-br ${interest.color} text-[#170621] shadow-[0_0_20px_rgba(217,70,239,0.22)] transition hover:-translate-y-1 hover:scale-105`}
      title={interest.label}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

export function ProfileHero({ profile }: { profile: ProfileInfo }) {
  return (
    <section id="home" className="relative">
      <div className="relative h-[230px] overflow-hidden border-x border-fuchsia-300/10 bg-[#0d0614] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:h-[300px] lg:h-[350px]">
        <Image
          src={profile.coverImage}
          alt={profile.coverAlt}
          fill
          priority
          className="object-cover"
          sizes="1180px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050309] via-[#07030b]/50 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(217,70,239,0.32),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.18),transparent_28%)]" />
      </div>

      <div className="relative z-10 -mt-12 rounded-t-[28px] border border-fuchsia-300/20 bg-[#14101c]/85 px-4 pb-6 pt-24 shadow-[0_0_80px_rgba(126,34,206,0.18)] backdrop-blur-xl sm:-mt-20 sm:px-8 sm:pt-24 lg:px-10">
        <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 sm:left-10 sm:h-56 sm:w-56 sm:translate-x-0">
          <div className="relative h-full w-full rounded-full border-4 border-fuchsia-400 bg-[#0f0717] p-1 shadow-[0_0_34px_rgba(217,70,239,0.65)]">
            <Image
              src={profile.avatar}
              alt={profile.avatarAlt}
              fill
              priority
              className="rounded-full object-cover p-1"
              sizes="224px"
            />
            <span className="absolute bottom-5 right-3 grid h-10 w-10 place-items-center rounded-full border-4 border-[#14101c] bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]">
              <span className="sr-only">{profile.status}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:pl-64 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <h1 className="bg-gradient-to-r from-fuchsia-400 via-pink-300 to-orange-300 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl">
                {profile.displayName}
              </h1>
              <BadgeCheck className="h-6 w-6 fill-cyan-300/20 text-cyan-200" aria-hidden="true" />
            </div>
            <p className="mt-1 text-xl font-semibold text-zinc-300">{profile.username}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
              {profile.badges.map((badge) => (
                <BadgePill key={badge.label} badge={badge} />
              ))}
            </div>
            <div id="interests" className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              {profile.interests.map((interest) => (
                <InterestOrb key={interest.label} interest={interest} />
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 lg:justify-end">
            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-2xl border border-fuchsia-200/30 bg-gradient-to-r from-white/15 to-white/[0.06] px-5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:-translate-y-0.5 hover:border-fuchsia-200/60 hover:bg-fuchsia-400/20"
            >
              <Pencil className="h-4 w-4" aria-hidden="true" />
              Edit profile
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-zinc-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:text-fuchsia-100"
              aria-label="Friends"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-zinc-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:text-fuchsia-100"
              aria-label="More profile actions"
            >
              <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-8 hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100 lg:block">
          <Sparkles className="mr-2 inline h-3.5 w-3.5" aria-hidden="true" />
          live profile
        </div>
      </div>
    </section>
  );
}
