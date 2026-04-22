"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/app/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#969e8f]/20 bg-[#fbfbf8]/90 backdrop-blur-md">
      <nav className="section-wrap flex h-20 items-center justify-between gap-3">
        <Link href="/" className="display-font text-lg font-bold tracking-wide text-[#4b5345]">
          Gemsland School Abuja
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-[#2a2a24]" : "text-[#4b5345] hover:text-[#2a2a24]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          className="inline-flex rounded-lg border border-[#969e8f]/30 p-2 text-[#4b5345] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link
          href="/enroll"
          className="hidden rounded-full bg-[#969e8f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7f8679] md:inline-flex"
        >
          Enroll Today
        </Link>
      </nav>
      {menuOpen ? (
        <div className="section-wrap pb-4 md:hidden">
          <div className="rounded-2xl border border-[#969e8f]/25 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-[#f1f2ec] text-[#2a2a24]" : "text-[#4b5345]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/enroll"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex justify-center rounded-full bg-[#969e8f] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Enroll Today
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
