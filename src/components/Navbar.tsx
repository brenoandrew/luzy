"use client";

import { Gamepad2, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import type { ProfileInfo } from "@/data/profile";

export function Navbar({ profile }: { profile: ProfileInfo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-fuchsia-300/10 bg-[#050309]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-0">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200 shadow-[0_0_24px_rgba(217,70,239,0.25)] transition group-hover:scale-105 group-hover:border-fuchsia-200/60">
            <Gamepad2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="bg-gradient-to-r from-violet-200 via-fuchsia-300 to-orange-200 bg-clip-text text-xl font-bold text-transparent">
            {profile.logoName}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {profile.navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold transition hover:text-fuchsia-200 ${
                index === 0 ? "text-fuchsia-200" : "text-zinc-200"
              }`}
            >
              {link.label}
              {index === 0 ? (
                <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-300" />
              ) : null}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-fuchsia-300/30 bg-white/[0.04] px-5 text-sm font-bold text-fuchsia-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:border-fuchsia-200/70 hover:bg-fuchsia-400/15 hover:shadow-[0_0_28px_rgba(217,70,239,0.25)]"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {profile.ctaLabel}
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-fuchsia-300/25 bg-white/[0.05] text-fuchsia-100 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#08050e]/95 px-4 pb-5 pt-2 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-[1180px] gap-2">
            {profile.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-fuchsia-400/10 hover:text-fuchsia-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-4 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(217,70,239,0.3)]"
              onClick={() => setIsOpen(false)}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {profile.ctaLabel}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
