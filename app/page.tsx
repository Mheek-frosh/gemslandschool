"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";
import { heroSlides } from "@/app/lib/site-data";

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30" />
          {heroSlides.map((item, index) => (
            <motion.div
              key={item.image}
              initial={false}
              animate={{ opacity: slide === index ? 1 : 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <Image src={item.image} alt={item.title} fill priority className="object-cover" />
            </motion.div>
          ))}
          <div className="section-wrap relative z-10 flex min-h-[75vh] items-center py-20">
            <div className="max-w-3xl text-white">
              <p className="mb-4 inline-flex rounded-full border border-white/60 bg-white/20 px-4 py-1.5 text-sm font-medium">
                Welcome to Gemsland School Abuja
              </p>
              <h1 className="display-font text-4xl font-bold leading-tight md:text-6xl">
                {heroSlides[slide].title}
              </h1>
              <p className="mt-5 text-lg text-white/90">{heroSlides[slide].subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/enroll"
                  className="rounded-full bg-[#eee0af] px-7 py-3 text-sm font-semibold text-[#2f342d] transition hover:bg-[#f6ebc8]"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white bg-white/10 px-7 py-3 text-sm font-semibold transition hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={() => setSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="rounded-full border border-white/70 p-2 transition hover:bg-white/20"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="rounded-full border border-white/70 p-2 transition hover:bg-white/20"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap py-20">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "About Us", href: "/about", image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80" },
              { title: "Programs", href: "/programs", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80" },
              { title: "Gallery", href: "/gallery", image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80" },
              { title: "Contact Us", href: "/contact", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80" },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <motion.article whileHover={{ y: -6 }} className="card-shadow overflow-hidden rounded-2xl bg-white">
                <Image
                    src={card.image}
                    alt={card.title}
                    width={700}
                    height={450}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-5">
                    <h2 className="display-font text-2xl font-semibold text-[#2a2a24]">{card.title}</h2>
                    <p className="mt-2 text-sm text-[#4e5449]">Open dedicated screen</p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-[#f1f2ec] p-8 text-center">
            <h2 className="display-font text-3xl font-bold text-[#2f342d]">Admissions Open</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#4d5448]">
              Visit the enrollment screen and submit your child&apos;s details directly from the form.
            </p>
            <Link
              href="/enroll"
              className="mt-6 inline-flex rounded-full bg-[#969e8f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#7f8679]"
            >
              Go to Enrollment Form
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
