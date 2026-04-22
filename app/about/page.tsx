import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";

export default function AboutPage() {
  return (
    <div>
      <SiteHeader />
      <main className="section-wrap py-16">
        <h1 className="display-font text-4xl font-bold">About Gemsland School Abuja</h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-[#44463d]">
          Gemsland School Abuja is a private co-educational institution in Lokogoma, Abuja,
          Nigeria. It provides early childhood, primary, and lower secondary education within a
          serene and child-friendly learning environment.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-[#f1f2ec] p-8">
            <h2 className="display-font text-2xl font-semibold">Vision</h2>
            <p className="mt-4 leading-8">
              To be an incubator of knowledge and positive orientation contributing to national
              development.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 card-shadow">
            <h2 className="display-font text-2xl font-semibold">Mission</h2>
            <p className="mt-4 leading-8">
              To help every child achieve educational success tailored to their individual
              strengths.
            </p>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80"
          alt="African school children learning together"
          width={1400}
          height={680}
          className="mt-10 h-[430px] w-full rounded-3xl object-cover"
        />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
