import Image from "next/image";
import { Gamepad2, Heart, Plus, Sparkles, ThumbsDown } from "lucide-react";
import type { FavoriteGame } from "@/data/profile";
import { FriendStack } from "@/components/FriendStack";

function reactionIcon(label: string) {
  if (label.toLowerCase().includes("hate")) return ThumbsDown;
  if (label.includes("+")) return Plus;
  if (label.toLowerCase().includes("special")) return Sparkles;
  return Heart;
}

export function FavoriteGameCard({ game }: { game: FavoriteGame }) {
  return (
    <section className="rounded-[24px] border border-fuchsia-300/20 bg-[#14101c]/85 p-6 shadow-[0_0_50px_rgba(126,34,206,0.13)] backdrop-blur-xl">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-fuchsia-400/12 text-fuchsia-300">
          <Gamepad2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-black text-fuchsia-200">Favorite Game</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-[160px_1fr]">
        <div className="group relative aspect-square overflow-hidden rounded-[20px] border border-white/10 bg-black/30 shadow-2xl">
          <Image
            src={game.image}
            alt={game.imageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="160px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl font-extrabold text-white">{game.title}</h3>
          <p className="mt-2 text-base font-semibold text-zinc-300">
            <span className="text-violet-200">{game.since}</span>
            <span className="px-2 text-zinc-500">|</span>
            {game.platforms.join(" | ")}
          </p>
          <p className="mt-2 text-sm text-zinc-400">{game.role}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {game.reactions.map((reaction) => {
              const Icon = reactionIcon(reaction);

              return (
                <button
                  key={reaction}
                  type="button"
                  className="inline-flex min-h-10 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 text-sm font-bold text-zinc-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/12"
                >
                  <Icon className="h-4 w-4 text-fuchsia-300" aria-hidden="true" />
                  {reaction}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-zinc-300 sm:flex-row sm:items-center">
            <FriendStack friends={game.players} extraCount={game.extraCount} size="md" />
            <span className="max-w-sm">
              {game.extraCount ? game.extraCount + game.players.length : game.players.length} people you know also play
              this game
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
