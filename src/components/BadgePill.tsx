import { Calendar, Cross, Heart, MapPin, Sparkles, Star } from "lucide-react";
import type { Badge } from "@/data/profile";

const badgeIcons = {
  cross: Cross,
  heart: Heart,
  map: MapPin,
  sparkles: Sparkles,
  calendar: Calendar,
  star: Star,
};

export function BadgePill({ badge }: { badge: Badge }) {
  const Icon = badgeIcons[badge.icon];

  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 text-sm font-semibold text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-fuchsia-300/40 hover:bg-fuchsia-400/10">
      <Icon className="h-4 w-4 text-fuchsia-300" aria-hidden="true" />
      {badge.label}
    </span>
  );
}
