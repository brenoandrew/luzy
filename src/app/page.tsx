import { FavoriteGameCard } from "@/components/FavoriteGameCard";
import { Footer } from "@/components/Footer";
import { GameGrid } from "@/components/GameGrid";
import { Navbar } from "@/components/Navbar";
import { ProfileCard } from "@/components/ProfileCard";
import { ProfileHero } from "@/components/ProfileHero";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050309] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_8%,rgba(168,85,247,0.22),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(236,72,153,0.18),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.10),transparent_32%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <Navbar profile={profile} />

      <div className="mx-auto max-w-[1180px] px-4 pb-10 sm:px-6 lg:px-0">
        <ProfileHero profile={profile} />

        <div className="grid gap-6 border-x border-fuchsia-300/10 bg-black/10 px-0 py-6 lg:grid-cols-[0.9fr_1.8fr]">
          <ProfileCard profile={profile} />
          <FavoriteGameCard game={profile.favoriteGame} />
        </div>

        <GameGrid games={profile.games} />
        <Footer profile={profile} />
      </div>
    </main>
  );
}
