"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  Baby,
  BookOpen,
  BrainCircuit,
  FlaskConical,
  Music,
  Palette,
  PhoneCall,
  Shield,
  Users,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const schoolLevels = [
  {
    title: "Crèche",
    text: "A warm, secure, and stimulating start for toddlers through guided play and nurturing care.",
    icon: Baby,
  },
  {
    title: "Nursery",
    text: "Foundational early years education that builds confidence, social skills, and joyful curiosity.",
    icon: Palette,
  },
  {
    title: "Primary",
    text: "Strong academic structure focused on literacy, numeracy, character, and practical life skills.",
    icon: BookOpen,
  },
  {
    title: "Lower Secondary",
    text: "Future-facing learning that deepens critical thinking, collaboration, and leadership readiness.",
    icon: BrainCircuit,
  },
];

const galleryImages = [
  "/gemslandschoold/gallery-1.jpg",
  "/gemslandschoold/gallery-2.jpg",
  "/gemslandschoold/gallery-3.jpg",
  "/gemslandschoold/gallery-4.jpg",
  "/gemslandschoold/gallery-5.jpg",
  "/gemslandschoold/gallery-6.jpg",
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("https://assets7.lottiefiles.com/packages/lf20_kkflmtur.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => setAnimationData(null));
  }, []);

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 border-b border-[#969e8f]/20 bg-[#fbfbf8]/90 backdrop-blur-md">
        <nav className="section-wrap flex h-20 items-center justify-between">
          <a href="#" className="display-font text-lg font-bold tracking-wide text-[#4b5345]">
            Gemsland School Abuja
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4b5345] transition-colors hover:text-[#2a2a24]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#969e8f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7f8679]"
          >
            Enroll Today
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden pb-24 pt-14 md:pb-28 md:pt-20">
          <div className="brand-gradient absolute inset-0 opacity-50" />
          <div className="section-wrap relative grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="space-y-7">
              <p className="inline-flex rounded-full border border-[#969e8f]/35 bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#5e6657]">
                Welcome to Gemsland School Abuja
              </p>
              <h1 className="display-font text-4xl font-bold leading-tight text-[#2a2a24] md:text-6xl">
                Nurturing Future Leaders with Excellence and Care
              </h1>
              <p className="max-w-xl text-lg text-[#3f4039]">
                A serene and child-friendly learning environment in Lokogoma, Abuja where children
                grow in confidence, character, and academic strength.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#969e8f] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#7d8577]"
                >
                  Enroll Now
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[#969e8f] bg-white/80 px-7 py-3 text-sm font-semibold text-[#4b5345] transition hover:-translate-y-0.5 hover:bg-[#eee0af]"
                >
                  Contact Us
                </a>
              </div>
            </Reveal>

            <Reveal className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#eee0af]/80 blur-xl"
              />
              <div className="card-shadow relative overflow-hidden rounded-3xl border border-white/60 bg-white/75 p-3">
                <Image
                  src="/gemslandschoold/hero.jpg"
                  alt="Happy African children learning in classroom"
                  width={900}
                  height={620}
                  priority
                  className="h-[460px] w-full rounded-2xl object-cover"
                />
                {animationData ? (
                  <div className="absolute -bottom-2 -left-4 w-36 rounded-2xl bg-white/85 p-2 shadow-lg">
                    <Lottie animationData={animationData} loop />
                  </div>
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section-wrap py-20">
          <Reveal>
            <h2 className="display-font text-3xl font-bold md:text-4xl">About Gemsland School Abuja</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#44463d]">
              Gemsland School Abuja is a private co-educational institution in Lokogoma, Abuja,
              Nigeria. It provides early childhood, primary, and lower secondary education within a
              serene and child-friendly learning environment.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Academic Excellence", icon: BookOpen },
              { title: "Creativity & Life Skills", icon: Music },
              { title: "Safe, Nurturing Environment", icon: Shield },
            ].map((item) => (
              <Reveal
                key={item.title}
                className="card-shadow rounded-2xl border border-[#969e8f]/15 bg-white p-6 transition hover:-translate-y-1"
              >
                <item.icon className="h-10 w-10 text-[#7d8577]" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="learning" className="brand-gradient py-20">
          <div className="section-wrap">
            <Reveal>
              <h2 className="display-font text-3xl font-bold md:text-4xl">Our Approach to Learning</h2>
              <p className="mt-4 max-w-3xl text-lg text-[#3f4039]">
                We blend balanced academics with creativity through literacy, numeracy, arts,
                science, teamwork, and strong moral development for every learner.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: "Creativity", icon: Palette },
                { title: "Science", icon: FlaskConical },
                { title: "Teamwork", icon: Users },
                { title: "Learning", icon: BookOpen },
              ].map((item) => (
                <Reveal
                  key={item.title}
                  className="rounded-2xl border border-white/60 bg-white/85 p-6 text-center shadow-sm"
                >
                  <item.icon className="mx-auto h-11 w-11 text-[#6a7262]" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="section-wrap py-20">
          <Reveal>
            <h2 className="display-font text-3xl font-bold md:text-4xl">Our Programs</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {schoolLevels.map((level) => (
              <motion.article
                key={level.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="card-shadow rounded-2xl border border-[#969e8f]/20 bg-white p-6"
              >
                <level.icon className="h-9 w-9 text-[#798171]" />
                <h3 className="mt-4 display-font text-xl font-semibold">{level.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4c4f45]">{level.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap pb-20">
          <div className="grid gap-7 md:grid-cols-2">
            <Reveal className="card-shadow rounded-3xl border border-[#969e8f]/20 bg-[#f5f5ee] p-8">
              <h3 className="display-font text-2xl font-bold text-[#4b5345]">Vision</h3>
              <p className="mt-4 text-lg leading-8 text-[#3f4039]">
                To be an incubator of knowledge and positive orientation contributing to national
                development.
              </p>
            </Reveal>
            <Reveal className="card-shadow rounded-3xl border border-[#eee0af]/40 bg-white p-8">
              <h3 className="display-font text-2xl font-bold text-[#4b5345]">Mission</h3>
              <p className="mt-4 text-lg leading-8 text-[#3f4039]">
                To help every child achieve educational success tailored to their individual
                strengths.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="gallery" className="section-wrap pb-20">
          <Reveal>
            <h2 className="display-font text-3xl font-bold md:text-4xl">Gallery</h2>
            <p className="mt-3 text-[#4d5045]">Happy moments, vibrant classes, and daily learning experiences.</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                whileHover={{ scale: 1.03 }}
                className="group card-shadow overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Gemsland School gallery image ${index + 1}`}
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#6a6f63]">
            Place your provided photos inside <span className="font-semibold">public/gemslandschoold</span> using
            these filenames to populate the gallery.
          </p>
        </section>

        <section id="contact" className="brand-gradient py-20">
          <div className="section-wrap grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className="display-font text-3xl font-bold md:text-4xl">Visit Us</h2>
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
            </Reveal>
            <Reveal className="overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-2">
              <iframe
                title="Gemsland School Abuja Location"
                src="https://maps.google.com/maps?q=Lokogoma%20Abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[360px] w-full rounded-2xl"
                loading="lazy"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#2f342d] py-12 text-[#f5f5ef]">
        <div className="section-wrap grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="display-font text-xl font-semibold">Gemsland School Abuja</h3>
            <p className="mt-3 text-sm text-[#d8decf]">
              Raising confident learners with excellence, care, and character.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#d8decf]">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-3 text-sm text-[#d8decf]">Lokogoma, Abuja, Nigeria</p>
            <p className="text-sm text-[#d8decf]">0802 573 9910</p>
            <p className="mt-3 text-sm text-[#c7cfbd]">Facebook | Instagram | X</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[#c7cfbd]">
          © {new Date().getFullYear()} Gemsland School Abuja. All rights reserved.
        </p>
      </footer>

      <a
        href="https://wa.me/2348025739910"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Gemsland School on WhatsApp"
        className="fixed bottom-6 right-6 rounded-full bg-[#25d366] p-4 text-white shadow-lg transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M19.05 4.94A9.94 9.94 0 0 0 12.02 2C6.5 2 2 6.5 2 12.02c0 1.77.46 3.5 1.35 5.02L2 22l5.08-1.33A10.04 10.04 0 0 0 12.02 22C17.54 22 22 17.5 22 11.98a9.9 9.9 0 0 0-2.95-7.04Zm-7.03 15.37a8.24 8.24 0 0 1-4.19-1.14l-.3-.18-3.02.79.81-2.94-.2-.3a8.2 8.2 0 1 1 6.9 3.77Zm4.51-6.14c-.25-.12-1.49-.73-1.72-.82-.23-.08-.4-.12-.56.13-.17.25-.65.82-.8.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.2-.73-.65-1.22-1.45-1.37-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.85-.88 2.07 0 1.22.9 2.39 1.02 2.56.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.43.52.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.7-1.2.21-.58.21-1.08.15-1.2-.06-.12-.23-.19-.48-.31Z" />
        </svg>
      </a>
    </div>
  );
}
