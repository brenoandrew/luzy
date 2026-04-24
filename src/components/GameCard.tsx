import Image from "next/image";
import type { Game } from "@/data/profile";
import { FriendStack } from "@/components/FriendStack";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="group/card relative overflow-hidden rounded-[18px] border border-white/10 bg-[#0c0911] shadow-[0_18px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300/45 hover:shadow-[0_0_32px_rgba(217,70,239,0.28)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={game.image}
          alt={game.imageAlt}
          fill
          loading="eager"
          className="object-cover transition duration-500 group-hover/card:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 210px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <FriendStack friends={game.players} extraCount={game.extraCount} />
        </div>
      </div>
      <div className="flex min-h-[64px] items-center justify-between gap-3 px-4 py-3">
        <h3 className="min-w-0 truncate text-sm font-bold text-white">{game.title}</h3>
        {game.tags?.[0] ? (
          <span className="shrink-0 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-2.5 py-1 text-[11px] font-bold text-fuchsia-100">
            {game.tags[0]}
          </span>
        ) : null}
      </div>
    </article>
  );
}
