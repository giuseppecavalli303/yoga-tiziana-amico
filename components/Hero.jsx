import Image from "next/image";
import heroImage from "@/public/hero-yoga.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      {/* alone luminoso di sfondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-sage-200/40 blur-3xl"
      />

      <div className="section relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="animate-rise">
          <p className="eyebrow">Yoga online in diretta · Stile di vita</p>

          <h1 className="mt-6 font-serif text-[2.7rem] font-light leading-[1.08] text-sage-900 sm:text-6xl lg:text-[4.1rem]">
            Riporta la mente
            <span className="block italic text-sage-600">nel corpo,</span>
            un respiro alla volta.
          </h1>

          <p className="mt-8 max-w-prose text-lg leading-relaxed text-sage-700">
            Lo yoga non è un&apos;ora sul tappetino: è un modo di stare al
            mondo. Ci troviamo dal vivo su Zoom, in un gruppo piccolo, e
            costruiamo insieme una pratica che ti accompagna anche lontano dal
            tappetino — nel respiro più lungo, nella postura più aperta, nella
            calma che resta quando la giornata si fa densa.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#inizia-ora" className="btn-primary">
              Inizia il tuo percorso
              <span className="text-sand-50/70">— Prima Lezione Gratuita</span>
            </a>
            <a href="#la-pratica" className="btn-ghost">
              Scopri la pratica
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2.5 text-sm text-sage-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            >
              <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
              <path d="m15.5 11 6-3.5v9l-6-3.5" />
            </svg>
            Lezioni dal vivo su Zoom: concordiamo insieme l'orario e ti mando
            il link, pratichi da casa tua.
          </p>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-sage-200 pt-8">
            {[
              { k: "Max 8", v: "persone per classe" },
              { k: "In diretta", v: "mai lezioni registrate" },
              { k: "Ogni livello", v: "dal primo respiro" },
            ].map((item) => (
              <div key={item.k}>
                <dt className="font-serif text-2xl text-sage-800">{item.k}</dt>
                <dd className="mt-1 text-xs leading-snug text-sage-600">
                  {item.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/*
            Foto reale in /public/hero-yoga.jpg (1066×1600, rapporto 2:3).
            L'import statico permette a next/image di conoscere le dimensioni
            (zero layout shift) e di generare da solo il blur di caricamento.
            Il contenitore mantiene il 2:3 nativo a ogni breakpoint: la figura
            resta intera, dalla testa ai piedi, senza ritagli.
          */}
          <Image
            src={heroImage}
            alt="Insegnante di yoga nella posizione dell'albero (Vrksasana), mani unite al petto, su un tappetino"
            priority
            placeholder="blur"
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="h-auto w-full rounded-[2rem] object-cover shadow-[0_30px_80px_-40px_rgba(46,54,48,0.45)] ring-1 ring-sage-200/70"
          />

          <div className="absolute -bottom-8 -left-4 hidden max-w-xs rounded-2xl border border-sage-200 bg-sand-50/95 p-6 shadow-lg backdrop-blur sm:block">
            <p className="font-serif text-lg italic leading-snug text-sage-800">
              «La pratica inizia nel momento in cui te ne accorgi.»
            </p>
            <p className="mt-3 eyebrow">Tiziana Amico</p>
          </div>
        </div>
      </div>
    </section>
  );
}
