import { PhoneCall } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";

export default function ContactPage() {
  return (
    <div>
      <SiteHeader />
      <main className="brand-gradient py-16">
        <div className="section-wrap grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="display-font text-4xl font-bold">Contact Us</h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#3d4036]">
              Peace Court Estate, Plot 10 Ahmadu Bello Close, Lokogoma, Abuja 900109, Federal
              Capital Territory, Nigeria
            </p>
            <a
              href="tel:+2348025739910"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#969e8f] px-5 py-3 font-semibold text-white transition hover:bg-[#7f8679]"
            >
              <PhoneCall className="h-4 w-4" /> 0802 573 9910
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Peace+Court+Estate+Plot+10+Ahmadu+Bello+Close+Lokogoma+Abuja"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#969e8f] bg-white px-5 py-2.5 text-sm font-semibold text-[#4e5548] transition hover:bg-[#eee0af]"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-2">
            <iframe
              title="Gemsland School Abuja Location"
              src="https://maps.google.com/maps?q=Lokogoma%20Abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
