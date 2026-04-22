"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/app/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#969e8f]/20 bg-[#fbfbf8]/90 backdrop-blur-md">
      <nav className="section-wrap flex h-20 items-center justify-between">
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
        <Link
          href="/enroll"
          className="rounded-full bg-[#969e8f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7f8679]"
        >
          Enroll Today
        </Link>
      </nav>
    </header>
  );
}
