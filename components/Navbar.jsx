"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contacts";

const links = [
  { href: "#la-pratica", label: "La Pratica" },
  { href: "#il-metodo", label: "Il Metodo" },
  { href: "#chi-sono", label: "Chi sono" },
  { href: "#testimonianze", label: "Testimonianze" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-100/85 backdrop-blur-md border-b border-sage-200/60 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="section flex items-center justify-between">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-serif text-xl text-sage-900 sm:text-2xl">
            Tiziana Amico
          </span>
          <span className="eyebrow mt-1 text-[0.65rem]">Yoga</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-sage-700 transition hover:text-sage-900"
            >
              {link.label}
            </a>
          ))}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={`WhatsApp ${PHONE_DISPLAY}`}
            className="inline-flex items-center gap-2 text-sm text-sage-700 transition hover:text-sage-900"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp-600" />
            <span className="hidden xl:inline">{PHONE_DISPLAY}</span>
          </a>

          <a
            href="#inizia-ora"
            className="rounded-full bg-sage-700 px-6 py-2.5 text-sm text-sand-50 transition hover:bg-sage-800"
          >
            Prima lezione gratuita
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Scrivi su WhatsApp al ${PHONE_DISPLAY}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sage-300 text-sage-700 transition hover:border-sage-500"
          >
            <WhatsAppIcon className="h-5 w-5 text-whatsapp-600" />
          </a>
          <a
            href="#inizia-ora"
            className="rounded-full border border-sage-300 px-5 py-2 text-xs text-sage-700"
          >
            Prenota
          </a>
        </div>
      </nav>
    </header>
  );
}
