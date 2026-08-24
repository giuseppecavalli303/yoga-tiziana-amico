import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { MAILTO_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contacts";

/**
 * Prenotazione — Calendly.
 *
 * Sostituisci CALENDLY_URL con il tuo link reale
 * (es. "https://calendly.com/tiziana-amico/prima-lezione").
 * Il parametro embed_domain/embed_type e i colori sono già impostati
 * per integrarsi con la palette della pagina.
 */
const CALENDLY_URL =
  "https://calendly.com/tiziana-amico/prima-lezione-gratuita" +
  "?hide_gdpr_banner=1&background_color=fdfbf8&text_color=2e3630&primary_color=5b6f5e";

const steps = [
  {
    title: "Scegli il momento",
    body: "Un orario in cui puoi collegarti senza fretta.",
  },
  {
    title: "Ricevi il link Zoom",
    body: "Arriva via email subito dopo la prenotazione.",
  },
  {
    title: "Pratichi con noi",
    body: "Da casa tua, in diretta. Gratis e senza impegno.",
  },
];

export default function Booking() {
  return (
    <section
      id="inizia-ora"
      className="scroll-mt-24 bg-sage-800 py-24 text-sand-100 sm:py-32"
    >
      <div className="section">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
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
              Scegli direttamente dal calendario il giorno della tua prima
              lezione di yoga online. Nessun modulo da compilare, nessuna
              attesa: la conferma con il link Zoom arriva via email in pochi
              secondi.
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

            <div className="mt-10 border-t border-sage-600 pt-8">
              <p className="text-sm text-sage-100/70">
                Preferisci parlarne prima? Scrivimi: rispondo personalmente.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp-600 px-6 py-3.5 text-sm font-medium text-sand-50 transition hover:bg-whatsapp-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-800"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp {PHONE_DISPLAY}
                </a>

                <a
                  href={MAILTO_URL}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-sage-500 px-6 py-3.5 text-sm text-sand-100 transition hover:border-sand-200 hover:text-sand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-200"
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
                  Scrivi una email
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-sage-600 bg-sand-50 p-3 shadow-2xl sm:p-4">
            {/* --- Calendly inline widget (placeholder) --- */}
            <iframe
              src={CALENDLY_URL}
              title="Prenota la tua prima lezione gratuita di yoga con Tiziana Amico"
              loading="lazy"
              className="h-[680px] w-full rounded-3xl border-0 bg-sand-50"
            />
            <p className="px-4 py-3 text-center text-xs text-sage-600">
              Se il calendario non compare, sostituisci{" "}
              <code className="rounded bg-sage-100 px-1.5 py-0.5 text-sage-800">
                CALENDLY_URL
              </code>{" "}
              in <code>components/Booking.jsx</code> con il tuo link Calendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
