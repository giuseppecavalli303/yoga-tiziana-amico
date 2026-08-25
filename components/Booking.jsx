import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { EMAIL, MAILTO_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contacts";
import { SCHEDULE } from "@/lib/schedule";

const steps = [
  {
    title: "Mi scrivi",
    body: "Due righe su WhatsApp o una email, con il giorno che preferisci.",
  },
  {
    title: "Ti rispondo io",
    body: "Ti confermo il posto e ti racconto come si svolge una lezione.",
  },
  {
    title: "Pratichi con noi",
    body: "Ti mando il link Zoom. La prima lezione di yoga è gratuita.",
  },
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
              Gli orari sono fissi e le lezioni si ripetono ogni settimana: non
              devi concordare nulla, scegli il giorno e mi scrivi. Ti rispondo
              io con la conferma del posto.
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

            <p className="mt-10 border-t border-sage-600 pt-7 text-sm leading-relaxed text-sage-100/75">
              <span className="font-medium text-sand-50">
                Preferisci un percorso solo tuo?
              </span>{" "}
              Le lezioni individuali si costruiscono sulle tue esigenze, con
              orari concordati insieme. Scrivimi e ne parliamo.
            </p>
          </div>

          {/* Orari fissi + contatto diretto */}
          <div className="rounded-[2rem] border border-sage-600 bg-sand-50 p-8 text-ink shadow-2xl sm:p-10">
            <p className="eyebrow">Gli orari della settimana</p>

            <ul className="mt-6 space-y-4">
              {SCHEDULE.map((course) => (
                <li
                  key={course.id}
                  className={`rounded-2xl border p-6 ${
                    course.primary
                      ? "border-sage-300 bg-sage-50"
                      : "border-sage-200 bg-sand-100/60"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-serif text-2xl text-sage-900">
                      {course.title}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-widest text-sage-500">
                      {course.format}
                    </span>
                  </div>

                  <dl className="mt-4 space-y-1.5">
                    {course.slots.map((slot) => (
                      <div
                        key={slot.days}
                        className="flex items-baseline justify-between gap-4 border-b border-sage-200/70 pb-1.5 last:border-0 last:pb-0"
                      >
                        <dt className="text-sm text-sage-700">{slot.days}</dt>
                        <dd className="font-serif text-xl text-clay-500">
                          {slot.time}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {course.venue ? (
                    <a
                      href={course.venue.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex gap-3 rounded-xl bg-sand-50 p-4 transition hover:bg-sand-200/60"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-sage-600"
                      >
                        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      <span>
                        <span className="block text-sm font-medium text-sage-900">
                          {course.venue.name}
                        </span>
                        <span className="block text-sm text-sage-700">
                          {course.venue.address}
                        </span>
                        <span className="mt-1 block text-xs text-sage-600">
                          {course.venue.note}
                        </span>
                      </span>
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 border-t border-sage-200 pt-8">
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

              <p className="mt-3 text-xs leading-relaxed text-sage-600">
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
