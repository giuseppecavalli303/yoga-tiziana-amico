import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { EMAIL, MAILTO_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contacts";

const steps = [
  {
    title: "Mi scrivi",
    body: "Due righe su WhatsApp o una email: basta il tuo nome.",
  },
  {
    title: "Ti rispondo io",
    body: "Ti racconto gli orari, il livello e come si svolge una lezione.",
  },
  {
    title: "Pratichi con noi",
    body: "Ti mando il link Zoom. La prima lezione è gratuita.",
  },
];

const hints = [
  "Se hai già praticato yoga, anche solo qualche volta",
  "In quali giorni o fasce orarie saresti libero/a",
  "Se hai domande o dubbi: rispondo a tutti, sempre",
];

export default function Booking() {
  return (
    <section
      id="inizia-ora"
      className="scroll-mt-24 bg-sage-800 py-24 text-sand-100 sm:py-32"
    >
      <div className="section">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-sage-300">
              Inizia Ora
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Il primo passo
              <span className="block italic text-clay-200">
                è già la pratica.
              </span>
            </h2>
            <p className="mt-7 max-w-prose leading-relaxed text-sage-100/85">
              Non c&apos;è un modulo da compilare né un calendario da
              consultare: mi scrivi, ti richiamo io e troviamo insieme il
              momento giusto per la tua prima lezione.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sage-500 font-serif text-sm text-clay-200">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl">{step.title}</h3>
                    <p className="mt-1 text-sm text-sage-100/75">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Pannello di contatto diretto, al posto del calendario */}
          <div className="rounded-[2rem] border border-sage-600 bg-sand-50 p-8 text-ink shadow-2xl sm:p-10">
            <p className="eyebrow">Scrivimi</p>
            <p className="mt-4 font-serif text-3xl leading-snug text-sage-900">
              Ti ricontatto io,
              <span className="block italic text-sage-600">
                di solito in giornata.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp-600 px-6 py-4 text-sm font-medium text-sand-50 transition hover:bg-whatsapp-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-400 focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Scrivi su WhatsApp — {PHONE_DISPLAY}
              </a>

              <a
                href={MAILTO_URL}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-sage-300 px-6 py-4 text-sm font-medium text-sage-800 transition hover:border-sage-500 hover:text-sage-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
                {EMAIL}
              </a>
            </div>

            <div className="mt-9 border-t border-sage-200 pt-7">
              <p className="text-sm font-medium text-sage-900">
                Se vuoi, raccontami già:
              </p>
              <ul className="mt-4 space-y-3">
                {hints.map((hint) => (
                  <li
                    key={hint}
                    className="flex gap-3 text-sm leading-relaxed text-sage-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay-400"
                    />
                    {hint}
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xs leading-relaxed text-sage-600">
                Nessun impegno e nessuna iscrizione: la prima lezione di yoga su
                Zoom è gratuita, e decidi dopo averla provata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
