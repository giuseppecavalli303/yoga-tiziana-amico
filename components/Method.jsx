const blocks = [
  {
    title: "Classi a numero chiuso",
    lead: "Massimo otto persone, tutte visibili.",
    body: "Il gruppo resta piccolo perché su Zoom vi tengo tutti in un'unica schermata, senza mai perdere di vista nessuno. Conosco il tuo respiro, il tuo ritmo e il punto esatto in cui la tua pratica sta crescendo.",
    icon: (
      <>
        <rect x="3" y="4" width="7.5" height="7" rx="1.6" />
        <rect x="13.5" y="4" width="7.5" height="7" rx="1.6" />
        <rect x="3" y="13" width="7.5" height="7" rx="1.6" />
        <rect x="13.5" y="13" width="7.5" height="7" rx="1.6" />
      </>
    ),
  },
  {
    title: "Correzione posturale in tempo reale",
    lead: "Adattamento dinamico, dal vivo.",
    body: "Ti guardo attraverso la telecamera per tutta la lezione: ti chiamo per nome, indico dove spostare il peso, propongo la variante nell'istante in cui serve. Nessuna lezione registrata, nessun video da seguire da soli.",
    icon: (
      <>
        <path d="M4 18c3.5 0 4.5-6 8-6s4.5 6 8 6" />
        <path d="M12 4v4" />
      </>
    ),
  },
  {
    title: "Rispetto della biomeccanica",
    lead: "Principi posturali dentro la pratica.",
    body: "La mia formazione in ginnastica posturale entra nello yoga come criterio di sicurezza: allineamenti spiegati con precisione, articolazioni protette, progressioni costruite sulla struttura reale del tuo corpo.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M7 7.5h10" />
        <path d="M7 16.5h10" />
      </>
    ),
  },
];

export default function Method() {
  return (
    <section id="il-metodo" className="scroll-mt-24 py-24 sm:py-32">
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Il Metodo — La Sicurezza</p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-sage-900 sm:text-5xl">
            Ci si abbandona alla pratica
            <span className="block italic text-sage-600">
              solo dove ci si sente al sicuro.
            </span>
          </h2>
          <p className="mt-7 leading-relaxed text-sage-700">
            La libertà nello yoga nasce da una cornice solida — e praticare da
            casa la richiede ancora più precisa. Tre scelte precise rendono ogni
            lezione uno spazio in cui puoi lasciare andare il controllo, sapendo
            che la tecnica è custodita.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {blocks.map((block, i) => (
            <article
              key={block.title}
              className="flex flex-col rounded-3xl border border-sage-200 bg-sand-50 p-8 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-40px_rgba(46,54,48,0.55)] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    {block.icon}
                  </svg>
                </span>
                <span className="font-serif text-sm text-clay-400">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-7 font-serif text-2xl leading-snug text-sage-900">
                {block.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-sage-600">
                {block.lead}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-sage-700">
                {block.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-sage-600">
          Ti serve pochissimo per iniziare: un tappetino, due metri di spazio
          libero e un dispositivo appoggiato di lato, così che io possa vederti
          per intero. Nessuna fretta di arrivare a una forma perfetta: la
          sicurezza è la condizione che permette alla pratica di durare negli
          anni.
        </p>
      </div>
    </section>
  );
}
