import type { FriendPreview } from "@/data/profile";

type FriendStackProps = {
  friends: FriendPreview[];
  extraCount?: number;
  size?: "sm" | "md";
};

export function FriendStack({ friends, extraCount, size = "sm" }: FriendStackProps) {
  const dimensions = size === "md" ? "h-9 w-9 text-[11px]" : "h-7 w-7 text-[9px]";

  return (
    <div className="flex items-center">
      {friends.map((friend, index) => (
        <span
          key={`${friend.initials}-${index}`}
          className={`-ml-2 first:ml-0 grid ${dimensions} place-items-center rounded-full border-2 border-[#17111f] bg-gradient-to-br ${friend.color} font-bold text-[#150a1f] shadow-lg`}
          title={friend.initials}
        >
          {friend.initials}
        </span>
      ))}
      {extraCount ? (
        <span
          className={`-ml-2 grid ${dimensions} place-items-center rounded-full border-2 border-[#17111f] bg-black/55 font-bold text-white shadow-lg backdrop-blur`}
        >
          +{extraCount}
        </span>
      ) : null}
    </div>
  );
}
