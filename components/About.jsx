import Image from "next/image";
import portrait from "@/public/ritratto-tiziana.jpeg";

/**
 * Credenziali: solo fatti, date e nomi propri. Nessun aggettivo —
 * la valutazione la fa il lettore. Posizione volutamente in fondo alla
 * sezione: in alto sarebbe una vanteria, qui è una verifica.
 */
const credentials = [
  "Laurea in danza contemporanea, Accademia Nazionale di Danza di Roma — 108/110",
  "RYT 250, Yoga Alliance Italia",
  "Istruttrice di Ginnastica Posturale, riconoscimento CSEN",
  "Insegnante di yoga dal 2015",
  "Insegnante al festival Wanderlust, Roma e Milano (2017 e 2018)",
];

export default function About() {
  return (
    <section id="chi-sono" className="scroll-mt-24 bg-sage-50 py-24 sm:py-32">
      <div className="section grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          {/*
            Ritratto reale in /public/ritratto-tiziana.jpeg (1080×724,
            orizzontale). Contenitore quadrato: la figura è centrata, quindi il
            taglio tocca solo i bordi del telo e il muro ai lati, e la colonna
            resta alta abbastanza da reggere il confronto con il testo.
          */}
          <Image
            src={portrait}
            alt="Tiziana Amico seduta a gambe incrociate su un telo rotondo decorato, davanti a un muro in pietra"
            placeholder="blur"
            sizes="(max-width: 1023px) 100vw, 35vw"
            className="aspect-square w-full rounded-[2rem] object-cover shadow-[0_30px_80px_-45px_rgba(46,54,48,0.5)] ring-1 ring-sage-200/70"
          />
        </div>

        <div>
          <p className="eyebrow">Chi sono</p>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-sage-900 sm:text-5xl">
            Studio come si muove un corpo
            <span className="block italic text-sage-600">
              da quando avevo tre anni.
            </span>
          </h2>

          <div className="mt-8 space-y-5 leading-relaxed text-sage-700">
            <p>
              Ho iniziato a danzare a tre anni: prima classica e moderna, poi
              contemporanea, fino alla laurea in danza contemporanea
              all&apos;Accademia Nazionale di Danza di Roma. Prima di insegnare
              ho danzato per anni, tra gli altri con Enzo Cosimi e Giorgio
              Rossi.
            </p>
            <p>
              Allo yoga sono arrivata portandomi dietro quell&apos;occhio lì:
              l&apos;abitudine a vedere come si distribuisce un peso, dove un
              movimento si blocca, cosa un corpo sta compensando senza saperlo.
            </p>
            <p>
              Il mio obiettivo è insegnarti ad avere consapevolezza del tuo
              corpo: ad ascoltarlo e a muoverlo nel modo corretto{" "}
              <strong className="font-medium text-sage-900">
                anche fuori dal tappetino
              </strong>
              , con la libertà di movimento che avevamo tutti da bambini. È un
              lavoro lento, e per questo lo faccio con gruppi piccoli.
            </p>
            <p>
              Insegno <strong className="font-medium text-sage-900">Hatha
              Yoga</strong> — con elementi di Ashtanga, Sivananda, Power Yoga e
              Vinyasa Flow — e ginnastica posturale. Se preferisci un percorso
              costruito solo su di te, possiamo lavorare in lezioni individuali
              su misura.
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
