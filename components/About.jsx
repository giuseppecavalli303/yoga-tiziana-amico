import ImagePlaceholder from "@/components/ImagePlaceholder";

/**
 * Credenziali: solo fatti, date e nomi propri. Nessun aggettivo —
 * la valutazione la fa il lettore. Posizione volutamente in fondo alla
 * sezione: in alto sarebbe una vanteria, qui è una verifica.
 */
const credentials = [
  "Diploma di I livello, Accademia Nazionale di Danza di Roma — 108/110",
  "RYT 250, Yoga Alliance Italia",
  "Istruttrice di Ginnastica Posturale, riconoscimento CSEN",
  "Insegnante di yoga dal 2015",
  "Insegnante al festival Wanderlust, Roma e Milano (2017 e 2018)",
];

export default function About() {
  return (
    <section id="chi-sono" className="scroll-mt-24 bg-sage-50 py-24 sm:py-32">
      <div className="section grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <ImagePlaceholder
            label="Ritratto di Tiziana"
            caption="Qui va una foto sua, non di repertorio"
            className="aspect-[4/5] w-full rounded-[2rem] shadow-[0_30px_80px_-45px_rgba(46,54,48,0.5)]"
          />
        </div>

        <div>
          <p className="eyebrow">Chi sono</p>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-sage-900 sm:text-5xl">
            Studio come si muove un corpo
            <span className="block italic text-sage-600">
              da quando ne avevo sei.
            </span>
          </h2>

          <div className="mt-8 space-y-5 leading-relaxed text-sage-700">
            <p>
              Ho iniziato con la danza classica a sei anni e non ho più smesso:
              vent&apos;anni dopo mi sono diplomata all&apos;Accademia Nazionale
              di Danza di Roma. Prima di insegnare ho danzato per anni, tra gli
              altri con Enzo Cosimi e Giorgio Rossi.
            </p>
            <p>
              Allo yoga sono arrivata portandomi dietro quell&apos;occhio lì:
              l&apos;abitudine a vedere come si distribuisce un peso, dove un
              movimento si blocca, cosa un corpo sta compensando senza saperlo.
            </p>
            <p>
              Non insegno posizioni. Insegno a riconoscere il proprio corpo
              dall&apos;interno e a muoverlo con la libertà che avevamo tutti da
              bambini, prima che le scrivanie e le abitudini ce la togliessero.
              È un lavoro lento, e per questo lo faccio con gruppi piccoli.
            </p>
            <p>
              Pratichiamo <strong className="font-medium text-sage-900">Hatha
              Yoga</strong> con elementi di Ashtanga, Sivananda, Power Yoga e
              Vinyasa Flow: la scelta cambia con il gruppo e con la giornata.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-2 border-t border-sage-200 pt-7 text-xs leading-relaxed text-sage-600">
            {credentials.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 ? (
                  <span aria-hidden="true" className="text-clay-400">
                    ·
                  </span>
                ) : null}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
