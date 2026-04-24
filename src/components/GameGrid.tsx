import { Gamepad2, Plus } from "lucide-react";
import type { Game } from "@/data/profile";
import { GameCard } from "@/components/GameCard";

export function GameGrid({ games }: { games: Game[] }) {
  return (
    <section
      id="games"
      className="rounded-[24px] border border-fuchsia-300/20 bg-[#14101c]/85 p-5 shadow-[0_0_60px_rgba(126,34,206,0.16)] backdrop-blur-xl sm:p-6"
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-fuchsia-400/12 text-fuchsia-300">
            <Gamepad2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-black text-fuchsia-200">Games I Like</h2>
        </div>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm font-bold text-zinc-100 transition hover:-translate-y-0.5 hover:border-fuchsia-300/50 hover:bg-fuchsia-400/12 sm:justify-start"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          Add Game
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {games.map((game) => (
          <GameCard key={game.title} game={game} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-2xl border border-fuchsia-300/25 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 px-5 text-sm font-bold text-fuchsia-100 transition hover:-translate-y-0.5 hover:border-fuchsia-200/60 hover:shadow-[0_0_24px_rgba(217,70,239,0.24)]"
        >
          <Gamepad2 className="h-4 w-4" aria-hidden="true" />
          View all games
        </button>
      </div>
    </section>
  );
}
