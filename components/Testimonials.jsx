/**
 * Testimonianze degli allievi.
 *
 * Sostituisci i contenuti dell'array con le parole reali degli allievi
 * (con il loro consenso). Il campo `initials` genera l'avatar tipografico:
 * per usare una foto, vedi le istruzioni nel README.
 */
const testimonials = [
  {
    quote:
      "Ero arrivata pensando di iscrivermi a un corso. Dopo un anno mi accorgo che ho imparato un modo di respirare che mi accompagna ovunque, anche nelle giornate in cui il tappetino resta arrotolato.",
    name: "Chiara M.",
    detail: "Pratica da 1 anno",
    initials: "CM",
  },
  {
    quote:
      "Temevo che online significasse essere lasciato a me stesso davanti a un video. Invece Tiziana mi chiama per nome, corregge, propone la variante: mi era successo di sentirmi meno seguito in una palestra vera.",
    name: "Davide R.",
    detail: "Pratica da 8 mesi",
    initials: "DR",
  },
  {
    quote:
      "Mi sono avvicinata allo yoga senza alcuna esperienza e con zero flessibilità. Nessuno mi ha mai chiesto di forzare: ogni posizione è stata costruita sul mio corpo, un passo alla volta.",
    name: "Elena T.",
    detail: "Pratica da 6 mesi",
    initials: "ET",
  },
  {
    quote:
      "La parte che non mi aspettavo sono i minuti di silenzio finali. Chiudo il computer con una lucidità che dura tutta la settimana: è diventata la cosa che proteggo di più nella mia agenda.",
    name: "Marco B.",
    detail: "Pratica da 2 anni",
    initials: "MB",
  },
  {
    quote:
      "Si sente che dietro c'è uno studio serio del movimento. Le correzioni arrivano al momento giusto e con delicatezza, e questo mi ha dato la fiducia per lasciarmi andare davvero nella pratica.",
    name: "Silvia P.",
    detail: "Pratica da 1 anno e mezzo",
    initials: "SP",
  },
];

function QuoteMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 24"
      fill="none"
      className="h-6 w-8 text-clay-400"
    >
      <path
        d="M13 24V13.2C13 5.9 17.4 1.2 25 0l1 3.6c-4.4 1-6.6 3.4-6.9 6.6H25V24H13Zm-13 0V13.2C0 5.9 4.4 1.2 12 0l1 3.6C8.6 4.6 6.4 7 6.1 10.2H12V24H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonianze"
      className="scroll-mt-24 bg-sand-50 py-24 sm:py-32"
    >
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Le voci del gruppo</p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-sage-900 sm:text-5xl">
            Chi pratica racconta
            <span className="block italic text-sage-600">
              il percorso, non la performance.
            </span>
          </h2>
          <p className="mt-7 leading-relaxed text-sage-700">
            Le trasformazioni più profonde raramente si vedono in una fotografia.
            Ecco cosa dicono gli allievi dopo qualche mese di pratica costante,
            un collegamento dopo l'altro.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <li
              key={item.name}
              className={`flex flex-col rounded-3xl border border-sage-200 bg-sand-100/70 p-8 transition duration-500 hover:border-sage-300 hover:bg-sand-100 sm:p-9 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <QuoteMark />

              <blockquote
                className={`mt-6 flex-1 font-serif leading-relaxed text-sage-800 ${
                  i === 0 ? "text-2xl sm:text-[1.7rem]" : "text-xl"
                }`}
              >
                {item.quote}
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-sage-200 pt-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-100 font-serif text-sm text-sage-700"
                >
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium text-sage-900">
                    {item.name}
                  </span>
                  <span className="block text-xs text-sage-600">
                    {item.detail}
                  </span>
                </span>
              </div>
            </li>
          ))}

          <li className="flex flex-col justify-center rounded-3xl bg-sage-800 p-8 text-sand-100 sm:p-9">
            <p className="font-serif text-2xl leading-snug">
              La prossima voce
              <span className="block italic text-clay-200">
                può essere la tua.
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sage-100/80">
              La prima lezione è gratuita: collegati e senti com&apos;è respirare
              insieme, anche a distanza.
            </p>
            <a
              href="#inizia-ora"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-sand-50 px-6 py-3 text-sm font-medium text-sage-800 transition hover:bg-sand-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-200"
            >
              Scrivimi per iniziare
              <span aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
