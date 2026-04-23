import Image from "next/image";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";
import { galleryImages } from "@/app/lib/site-data";

export default function GalleryPage() {
  return (
    <div>
      <SiteHeader />
      <main className="section-wrap py-16">
        <h1 className="display-font text-4xl font-bold">Gallery</h1>
        <p className="mt-4 text-[#4c4f45]">A glimpse into school life at Gemsland School Abuja.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <div key={src} className="group card-shadow overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={700}
                height={500}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
