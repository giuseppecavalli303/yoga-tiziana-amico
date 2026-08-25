import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { EMAIL, MAILTO_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contacts";
import { VENUE } from "@/lib/schedule";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sand-50 py-16">
      <div className="section">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-sage-200 pb-12 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-3xl text-sage-900">Tiziana Amico</p>
            <p className="eyebrow mt-2">Insegnante di Yoga</p>
            <p className="mt-6 max-w-md leading-relaxed text-sage-700">
              Yoga online in diretta su Zoom: pratica olistica, gruppi piccoli,
              attenzione alla biomeccanica. Per chi vuole coltivare benessere
              fisico e mentale nel tempo.
            </p>

            {/* Accenno al secondo servizio, volutamente defilato:
                la pagina resta dedicata allo yoga online. */}
            <p className="mt-5 max-w-md rounded-2xl border border-sage-200 bg-sand-100/70 p-5 text-sm leading-relaxed text-sage-700">
              <span className="font-medium text-sage-900">
                Anche ginnastica posturale.
              </span>{" "}
              Online su Zoom il martedì e il giovedì alle 19. In presenza a Roma
              presso {VENUE.name}, {VENUE.address}: martedì alle 10 e giovedì
              alle 11, 60 minuti.
            </p>

            <div className="mt-7 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sage-800 transition hover:text-sage-900"
              >
                <WhatsAppIcon className="h-5 w-5 text-whatsapp-600" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={MAILTO_URL}
                className="inline-flex items-center gap-2.5 text-sage-800 transition hover:text-sage-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5 text-sage-600"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-sage-700">
            <a href="#la-pratica" className="transition hover:text-sage-900">
              La Pratica
            </a>
            <a href="#il-metodo" className="transition hover:text-sage-900">
              Il Metodo
            </a>
            <a href="#chi-sono" className="transition hover:text-sage-900">
              Chi sono
            </a>
            <a href="#testimonianze" className="transition hover:text-sage-900">
              Testimonianze
            </a>
            <a href="#inizia-ora" className="transition hover:text-sage-900">
              Inizia Ora
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-sage-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tiziana Amico. Tutti i diritti riservati.</p>
          <p>Prima lezione gratuita, sempre senza impegno.</p>
        </div>
      </div>
    </footer>
  );
}
