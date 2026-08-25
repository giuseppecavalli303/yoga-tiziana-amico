import Image from "next/image";
import practiceImage from "@/public/la-pratica-yoga.jpg";

const pillars = [
  {
    number: "01",
    title: "Il respiro",
    body: "Il pranayama è la porta d'ingresso. Impari a rallentare il respiro, e con esso il pensiero: uno strumento che resta con te in ufficio, nel traffico, prima di dormire.",
  },
  {
    number: "02",
    title: "La flessibilità",
    body: "Non l'acrobazia, ma la libertà di movimento. Gli asana aprono spazio dove il corpo si era abituato a chiudersi, restituendo leggerezza ai gesti quotidiani.",
  },
  {
    number: "03",
    title: "L'equilibrio mentale",
    body: "Ogni pratica termina con qualche minuto di silenzio. È lì che la disciplina diventa stile di vita: attenzione, chiarezza, capacità di scegliere invece di reagire.",
  },
];

export default function Practice() {
  return (
    <section id="la-pratica" className="scroll-mt-24 bg-sand-50 py-24 sm:py-32">
      <div className="section">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">La Pratica</p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-sage-900 sm:text-5xl">
              Un benessere che continua
              <span className="block italic text-sage-600">
                anche al di fuori del tappetino.
              </span>
            </h2>
            <p className="mt-7 max-w-prose leading-relaxed text-sage-700">
              Insegno yoga come pratica olistica: corpo, respiro e attenzione
              lavorano insieme, mai separati. Le lezioni seguono un ritmo lento
              e costruttivo — si parte dall&apos;ascolto, si attraversa il
              movimento, si torna al silenzio.
            </p>
            <p className="mt-5 max-w-prose leading-relaxed text-sage-700">
              Non è una gara con il corpo di ieri né con quello di nessun altro.
              È un percorso di crescita personale, in cui ogni sessione aggiunge
              un dettaglio di consapevolezza a quello precedente. E il fatto di
              praticare da casa lo rende sostenibile: niente spostamenti, nessun
              orario da rincorrere, solo il tempo che dedichi davvero a te.
            </p>

            {/*
              Foto reale in /public/la-pratica-yoga.jpg (1460×1586, quasi
              quadrata). Nessun ritaglio: il rapporto nativo tiene dentro sia
              lo schermo con la griglia Zoom sia chi pratica sul tappetino.
            */}
            <div className="relative mx-auto mt-10 w-full max-w-md lg:max-w-none">
              <Image
                src={practiceImage}
                alt="Lezione di yoga online: l'insegnante seduta sul tappetino guida il gruppo collegato su Zoom, visibile sullo schermo davanti a lei"
                placeholder="blur"
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="h-auto w-full rounded-3xl object-cover ring-1 ring-sage-200/70"
              />
            </div>
          </div>

          <ol className="space-y-4">
            {pillars.map((pillar) => (
              <li
                key={pillar.number}
                className="group rounded-3xl border border-sage-200/80 bg-sand-100/60 p-8 transition duration-500 hover:border-sage-300 hover:bg-sand-100 sm:p-10"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-2xl text-clay-400">
                    {pillar.number}
                  </span>
                  <h3 className="font-serif text-2xl text-sage-900 sm:text-3xl">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-5 max-w-prose leading-relaxed text-sage-700">
                  {pillar.body}
                </p>
              </li>
            ))}

            <li className="rounded-3xl bg-sage-800 p-8 text-sand-100 sm:p-10">
              <p className="font-serif text-2xl leading-snug sm:text-3xl">
                «Lo yoga non ti cambia la vita. Ti restituisce l&apos;attenzione
                necessaria per cambiarla tu.»
              </p>
              <p className="mt-6 text-xs uppercase tracking-widest text-sage-300">
                Tiziana Amico — Insegnante di Yoga
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
