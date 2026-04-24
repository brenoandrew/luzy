import { Cat, Languages, Link2, MapPin, Music2, Users } from "lucide-react";
import type { ProfileInfo } from "@/data/profile";

const detailIcons = {
  music: Music2,
  map: MapPin,
  cat: Cat,
  users: Users,
  link: Link2,
  languages: Languages,
};

export function ProfileCard({ profile }: { profile: ProfileInfo }) {
  return (
    <aside
      id="about"
      className="rounded-[24px] border border-fuchsia-300/20 bg-[#14101c]/85 p-6 shadow-[0_0_50px_rgba(126,34,206,0.13)] backdrop-blur-xl"
    >
      <h2 className="text-lg font-bold text-fuchsia-200">{profile.bioTitle}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-100">{profile.bio}</p>

      <div className="mt-6 grid gap-4">
        {profile.details.map((detail) => {
          const Icon = detailIcons[detail.icon];

          return (
            <div key={detail.label} className="flex items-start gap-3 text-sm font-semibold text-zinc-100">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-fuchsia-400/10 text-fuchsia-300">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              {detail.icon === "link" ? (
                <a
                  href={detail.label}
                  className="min-w-0 break-all text-violet-300 transition hover:text-fuchsia-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  {detail.label}
                </a>
              ) : (
                <span className="min-w-0">{detail.label}</span>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
