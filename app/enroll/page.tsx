"use client";

import { useState } from "react";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { WhatsAppFloat } from "@/app/components/whatsapp-float";

export default function EnrollPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const whatsappNumber = "2347054885172";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const parentName = String(formData.get("parentName") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const childName = String(formData.get("childName") || "");
    const program = String(formData.get("program") || "");
    const preferredStartDate = String(formData.get("preferredStartDate") || "");
    const notes = String(formData.get("notes") || "");

    const whatsappText = [
      "New Enrollment Request - Greenlands School Abuja",
      `Parent Name: ${parentName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Child Name: ${childName}`,
      `Program: ${program}`,
      `Preferred Start Date: ${preferredStartDate}`,
      `Additional Notes: ${notes}`,
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setLoading(false);
    form.reset();
    setMessage("Redirected to WhatsApp. Please tap send in WhatsApp to submit this enrollment.");
  }

  return (
    <div>
      <SiteHeader />
      <main className="section-wrap py-16">
        <h1 className="display-font text-4xl font-bold">Enroll Today</h1>
        <p className="mt-4 text-[#4d5348]">
          Fill this form and our admissions team will get in touch with you quickly.
        </p>

        <form onSubmit={handleSubmit} className="card-shadow mt-8 grid gap-5 rounded-3xl bg-white p-8 md:grid-cols-2">
          <input name="parentName" required placeholder="Parent Full Name" className="rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f]" />
          <input name="phone" required placeholder="Phone Number" className="rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f]" />
          <input name="email" type="email" placeholder="Email Address" className="rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f]" />
          <input name="childName" required placeholder="Child Full Name" className="rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f]" />
          <select name="program" required className="rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f]">
            <option value="">Select Program</option>
            <option>Crèche</option>
            <option>Nursery</option>
            <option>Primary</option>
            <option>Lower Secondary</option>
          </select>
          <input name="preferredStartDate" type="date" className="rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f]" />
          <textarea
            name="notes"
            placeholder="Additional information"
            className="min-h-32 rounded-xl border border-[#d8dccf] px-4 py-3 outline-none focus:border-[#969e8f] md:col-span-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#969e8f] px-7 py-3 font-semibold text-white transition hover:bg-[#7f8679] disabled:opacity-70"
          >
            {loading ? "Preparing..." : "Send Application"}
          </button>
        </form>

        {message ? <p className="mt-4 text-sm font-medium text-[#4b5345]">{message}</p> : null}
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
