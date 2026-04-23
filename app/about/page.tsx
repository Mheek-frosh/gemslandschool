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
        <section className="mt-12 space-y-4">
          <h2 className="display-font text-3xl font-semibold">Why Parents Choose Us</h2>
          <details className="rounded-2xl border border-[#cfd4c6] bg-white p-5 card-shadow">
            <summary className="cursor-pointer text-lg font-semibold text-[#2f342d]">
              Academic Excellence and Personal Support
            </summary>
            <p className="mt-3 leading-8 text-[#4d5348]">
              Our learners receive strong classroom support, continuous assessment, and mentoring
              tailored to their individual strengths.
            </p>
          </details>
          <details className="rounded-2xl border border-[#cfd4c6] bg-white p-5 card-shadow">
            <summary className="cursor-pointer text-lg font-semibold text-[#2f342d]">
              Creativity, Leadership, and Character
            </summary>
            <p className="mt-3 leading-8 text-[#4d5348]">
              We combine academics with arts, teamwork, and moral formation to develop confident
              learners who can lead positively.
            </p>
          </details>
          <details className="rounded-2xl border border-[#cfd4c6] bg-white p-5 card-shadow">
            <summary className="cursor-pointer text-lg font-semibold text-[#2f342d]">
              Safe and Child-Friendly Environment
            </summary>
            <p className="mt-3 leading-8 text-[#4d5348]">
              We maintain a secure, warm, and structured learning environment where each child
              feels seen, valued, and protected.
            </p>
          </details>
        </section>

        <section className="mt-12 rounded-3xl bg-[#f7f7f2] p-7">
          <h2 className="display-font text-3xl font-semibold">About Us Dropdown</h2>
          <p className="mt-2 text-[#586052]">
            Click each dropdown to learn key information about Gemsland School Abuja.
          </p>
          <div className="mt-5 space-y-4">
            <details className="rounded-2xl border border-[#cfd4c6] bg-white p-5">
              <summary className="cursor-pointer text-lg font-semibold text-[#2f342d]">
                Our Educational Philosophy
              </summary>
              <p className="mt-3 leading-8 text-[#4d5348]">
                We believe every child can excel when learning is structured, engaging, and
                connected to real-life values. Our teaching balances academics, creativity, and
                character building.
              </p>
            </details>
            <details className="rounded-2xl border border-[#cfd4c6] bg-white p-5">
              <summary className="cursor-pointer text-lg font-semibold text-[#2f342d]">
                Facilities and Learning Spaces
              </summary>
              <p className="mt-3 leading-8 text-[#4d5348]">
                Our classrooms are designed to be safe, child-friendly, and interactive, with spaces
                that support reading, group projects, science activities, and creative expression.
              </p>
            </details>
            <details className="rounded-2xl border border-[#cfd4c6] bg-white p-5">
              <summary className="cursor-pointer text-lg font-semibold text-[#2f342d]">
                Parent Partnership and Communication
              </summary>
              <p className="mt-3 leading-8 text-[#4d5348]">
                We maintain close communication with parents through regular feedback, progress
                updates, and collaborative support so every child receives consistent guidance at
                school and at home.
              </p>
            </details>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="display-font text-3xl font-semibold">Meet the Staff</h2>
          <p className="mt-3 max-w-3xl text-[#4d5348]">
            Our caring team of educators and support staff are committed to helping every child
            succeed academically and socially.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Mrs. Adaobi Eze",
                role: "Head of Early Years",
                image:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=900&q=80",
              },
              {
                name: "Mr. Ibrahim Musa",
                role: "Primary Academic Lead",
                image:
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80",
              },
              {
                name: "Ms. Ifeoma Okafor",
                role: "Student Development Coordinator",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
              },
            ].map((staff) => (
              <article key={staff.name} className="overflow-hidden rounded-2xl bg-white card-shadow">
                <Image
                  src={staff.image}
                  alt={staff.name}
                  width={800}
                  height={700}
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="display-font text-xl font-semibold">{staff.name}</h3>
                  <p className="mt-1 text-sm text-[#5a6155]">{staff.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-7 rounded-3xl bg-[#f1f2ec] p-8 md:grid-cols-[280px_1fr]">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
            alt="School CEO portrait"
            width={700}
            height={900}
            className="h-full min-h-72 w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="display-font text-3xl font-semibold">Meet the CEO</h2>
            <p className="mt-4 leading-8 text-[#4d5348]">
              At Gemsland School Abuja, we believe every child deserves a strong educational
              foundation in a secure, inspiring, and values-driven environment. Our commitment is to
              partner with families to raise future-ready leaders.
            </p>
            <p className="mt-4 font-semibold text-[#2f342d]">- Dr. Samuel Adeyemi, CEO</p>
          </div>
        </section>
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
