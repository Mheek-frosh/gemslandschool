"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "2347054885172";

function openWhatsAppWithText(text: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [chatText, setChatText] = useState("");

  function sendChat() {
    const content = chatText.trim();
    if (!content) return;
    openWhatsAppWithText(`Hello Greenlands School Abuja,\n\n${content}`);
    setChatText("");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open ? (
        <div className="mb-3 w-[92vw] max-w-sm rounded-2xl border border-[#25d366]/25 bg-white p-4 shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#2f342d]">Chat Assistant</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat widget"
              className="rounded-full p-1 text-[#5c6257] hover:bg-[#f2f3ef]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <textarea
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
            placeholder="Type your message..."
            className="min-h-24 w-full rounded-xl border border-[#d6dbce] px-3 py-2 text-sm outline-none focus:border-[#25d366]"
          />
          <button
            type="button"
            onClick={sendChat}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2 text-sm font-semibold text-white"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open WhatsApp chat assistant"
        className="rounded-full bg-[#25d366] p-4 text-white shadow-lg transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
