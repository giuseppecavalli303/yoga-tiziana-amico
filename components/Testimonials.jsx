/**
 * Testimonianze reali degli allievi, riportate integralmente.
 * Corretti solo due refusi evidenti nel testo di Luca
 * («un'altro» → «un altro», «postura le» → «posturale»).
 *
 * La prima voce occupa due colonne su desktop: è quella di Luca perché
 * risponde all'obiezione decisiva — perché una lezione dal vivo e non
 * un video su YouTube.
 */
const testimonials = [
  {
    quote:
      "Dopo diverse prove di esercizio dello yoga online ho conosciuto Tiziana: davvero un altro tipo di esperienza, soprattutto perché grazie a Zoom lei mi ha guidato (e mi guida) con estrema attenzione nelle varie posizioni, esercizi, correggendo ogni minimo errore. Questa è una enorme differenza rispetto all'esecuzione di una lezione online seguita su YouTube o altri canali, perché si apprende e si migliora concretamente grazie alla guida di una vera insegnante che interagisce direttamente. Pratico da tempo sia yoga che ginnastica posturale, consiglio vivamente!",
    name: "Luca",
    detail: "Yoga e ginnastica posturale",
    initials: "L",
  },
  {
    quote:
      "Ho iniziato yoga con Tiziana in una palestra di Brescia e mi sono subito innamorata del suo metodo di insegnamento, per questo ho continuato a seguire i suoi corsi anche da remoto durante il lockdown. Tiziana è un'insegnante molto attenta, sempre precisa nelle spiegazioni e disponibile a soddisfare i bisogni di tutti con esercizi sempre diversi. Il tutto viene poi coronato dalla sua gentilezza, dalla sua positività e dalla sua voce rilassante che ti libera veramente da ogni stress e ti permette di concludere la lezione con un'energia nuova.",
    name: "Lara",
    detail: "Dalla palestra di Brescia, poi online",
    initials: "LA",
  },
  {
    quote:
      "Ho iniziato a fare yoga e ginnastica posturale online con Tiziana due anni fa. Tiziana, oltre ad essere estremamente professionale, è molto attenta, paziente e precisa. Ho acquisito una buona tonicità muscolare e un benessere fisico che, sicuramente, continuerò a migliorare negli anni a venire grazie alle sue indicazioni. Ho apprezzato che Tiziana non abbia trascurato l'aspetto meditativo, che ha curato e trasmesso in modo naturale e diretto.",
    name: "Gabriella",
    detail: "Yoga e posturale online da due anni",
    initials: "G",
  },
  {
    quote:
      "Ho incominciato a fare yoga online con Tiziana due anni fa. Dopo il covid non mi andava di tornare in palestra. Grazie a delle amicizie che già seguivano le sue lezioni ho sperimentato lo yoga online. Cosa dire? Comodo, pratico ed anche economico! Devo ringraziare i miei amici ma anche e soprattutto l'insegnante Tiziana per la sua pazienza (molta) nello spiegare con estrema semplicità ma altrettanta precisione tutte le posizioni ed i loro benefici. Sono contenta soprattutto della consapevolezza fisica e mentale cresciuta in me.",
    name: "Elena",
    detail: "Yoga online da due anni",
    initials: "E",
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
            Le trasformazioni più profonde raramente si vedono in una
            fotografia. Ecco le parole di chi pratica con me: qualcuno da
            qualche mese, qualcuno da anni.
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
                  i === 0 ? "text-xl sm:text-2xl" : "text-lg"
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
