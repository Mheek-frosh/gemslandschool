import Link from "next/link";
import { navLinks } from "@/app/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#2f342d] py-12 text-[#f5f5ef]">
      <div className="section-wrap grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="display-font text-xl font-semibold">Greenlands School Abuja</h3>
          <p className="mt-3 text-sm text-[#d8decf]">
            Raising confident learners with excellence, care, and character.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-[#d8decf]">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-[#d8decf]">Peace Court Estate, Lokogoma, Abuja</p>
          <p className="text-sm text-[#d8decf]">0802 573 9910</p>
          <p className="mt-3 text-sm text-[#c7cfbd]">Facebook | Instagram | X</p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-[#c7cfbd]">
        © {new Date().getFullYear()} Greenlands School Abuja. All rights reserved.
      </p>
    </footer>
  );
}
