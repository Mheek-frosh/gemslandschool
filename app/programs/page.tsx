import { programs } from "@/app/lib/site-data";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";

export default function ProgramsPage() {
  return (
    <div>
      <SiteHeader />
      <main className="section-wrap py-16">
        <h1 className="display-font text-4xl font-bold">Our Programs</h1>
        <p className="mt-4 max-w-3xl text-[#4c4f45]">
          Every level at Gemsland is intentionally designed to support growth, confidence, and
          academic excellence in a safe environment.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((level) => (
            <article key={level.title} className="card-shadow rounded-2xl border border-[#969e8f]/20 bg-white p-6">
              <level.icon className="h-9 w-9 text-[#798171]" />
              <h2 className="mt-4 display-font text-xl font-semibold">{level.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#4c4f45]">{level.text}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
