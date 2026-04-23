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

const promoSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1600&q=80",
    title: "2026/2027 Admission Is Ongoing",
    text: "Secure your child's place at Gemsland School Abuja today and enjoy a warm, excellence-driven learning journey in a safe, premium environment.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80",
    title: "Limited Spaces in Crèche and Nursery",
    text: "Give your child a strong head start with structured early years learning, care, and social development.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1600&q=80",
    title: "Join a School Built on Values and Excellence",
    text: "Our team partners with families to raise confident learners with character, creativity, and leadership skills.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [promoSlide, setPromoSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const promoTimer = setInterval(() => {
      setPromoSlide((prev) => (prev + 1) % promoSlides.length);
    }, 4500);
    return () => clearInterval(promoTimer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/60 to-black/50" />
          {heroSlides.map((item, index) => (
            <motion.div
              key={item.image}
              initial={false}
              animate={{ opacity: slide === index ? 1 : 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority
                className="object-cover brightness-[0.68] contrast-75 saturate-90"
              />
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

        <section className="section-wrap pb-20">
          <div className="grid gap-8 rounded-3xl bg-white p-8 card-shadow md:grid-cols-[260px_1fr]">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
              alt="CEO portrait"
              width={500}
              height={650}
              className="h-full min-h-72 w-full rounded-2xl object-cover"
            />
            <div>
              <h2 className="display-font text-3xl font-bold text-[#2f342d]">A Note from the CEO</h2>
              <p className="mt-4 leading-8 text-[#4d5448]">
                Welcome to Gemsland School Abuja. We are dedicated to building an environment where
                children learn with confidence, discover their talents, and develop the character
                needed to thrive in the future. We look forward to partnering with you on your
                child&apos;s success journey.
              </p>
              <p className="mt-5 font-semibold text-[#2f342d]">- Dr. Samuel Adeyemi, CEO</p>
              <Link
                href="/about"
                className="mt-5 inline-flex rounded-full bg-[#969e8f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7f8679]"
              >
                Learn More About Our Leadership
              </Link>
            </div>
          </div>
        </section>

        <section className="section-wrap pb-20">
          <div className="relative overflow-hidden rounded-3xl">
            {promoSlides.map((item, index) => (
              <motion.div
                key={item.image}
                initial={false}
                animate={{ opacity: promoSlide === index ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1600}
                  height={720}
                  className="h-[330px] w-full object-cover md:h-[380px]"
                />
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2f342d]/85 via-[#2f342d]/70 to-[#969e8f]/55" />
            <div className="absolute inset-0 flex items-center">
              <div className="section-wrap">
                <div className="max-w-2xl text-white">
                  <p className="inline-flex rounded-full border border-white/55 bg-white/15 px-4 py-1 text-xs font-semibold tracking-wide">
                    PROMOTIONAL OFFER
                  </p>
                  <h2 className="display-font mt-4 text-3xl font-bold md:text-4xl">
                    {promoSlides[promoSlide].title}
                  </h2>
                  <p className="mt-3 text-white/90">
                    {promoSlides[promoSlide].text}
                  </p>
                  <Link
                    href="/enroll"
                    className="mt-6 inline-flex rounded-full bg-[#eee0af] px-7 py-3 text-sm font-semibold text-[#2f342d] transition hover:bg-[#f6ebc8]"
                  >
                    Apply for Admission Now
                  </Link>
                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() =>
                        setPromoSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length)
                      }
                      className="rounded-full border border-white/70 p-2 transition hover:bg-white/20"
                      aria-label="Previous promotional slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setPromoSlide((prev) => (prev + 1) % promoSlides.length)}
                      className="rounded-full border border-white/70 p-2 transition hover:bg-white/20"
                      aria-label="Next promotional slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[330px] md:h-[380px]" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
