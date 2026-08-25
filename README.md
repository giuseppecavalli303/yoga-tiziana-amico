# Tiziana Amico — Yoga · Landing Page

Landing page one-page costruita con **Next.js 14 (App Router)**, **React 18** e **TailwindCSS 3**.

Direttiva editoriale: la pagina presenta **un solo servizio**, lo **Yoga online in diretta su
Zoom** — disciplina olistica, stile di vita, benessere fisico e mentale. La **ginnastica
posturale in presenza** (due incontri a settimana) è un servizio reale ma volutamente defilato:
compare come accenno nel footer e, dentro il Metodo, solo come garanzia di attenzione alla
biomeccanica. Nessun riferimento a dolori o patologie: il registro è quello della **crescita
personale**.

La **prima lezione gratuita** si riferisce alla lezione di yoga su Zoom.

---

## Avvio rapido

Requisito: **Node.js 18.17 o superiore** (al momento non risulta installato su questa macchina —
scaricalo da [nodejs.org](https://nodejs.org) e riapri il terminale).

```bash
npm install
```

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

### Build di produzione

```bash
npm run build
```

```bash
npm run start
```

---

## Struttura del progetto

```
yoga/
├─ app/
│  ├─ layout.jsx        # <html lang="it">, font Google, metadata SEO/OpenGraph
│  ├─ page.jsx          # composizione delle sezioni
│  └─ globals.css       # direttive Tailwind + classi .btn-primary / .eyebrow / .section
├─ lib/
│  ├─ contacts.js       # WhatsApp, email e messaggio precompilato (punto unico di verità)
│  └─ schedule.js       # orari fissi delle lezioni (punto unico di verità)
├─ components/
│  ├─ Navbar.jsx        # header fisso, si compatta allo scroll (client component)
│  ├─ Hero.jsx          # 1. Hero — titolo mente-corpo + CTA prima lezione gratuita
│  ├─ Practice.jsx      # 2. La Pratica — respiro, flessibilità, equilibrio mentale
│  ├─ Method.jsx        # 3. La Sicurezza (Il Metodo) — 3 blocchi
│  ├─ About.jsx         # 4. Chi sono — profilo, formazione, credenziali
│  ├─ Testimonials.jsx  # 5. Testimonianze degli allievi
│  ├─ Booking.jsx       # 6. Inizia Ora — contatto diretto WhatsApp/email
│  ├─ Footer.jsx
│  ├─ WhatsAppFloat.jsx # pulsante WhatsApp fluttuante
│  ├─ icons/WhatsAppIcon.jsx
│  └─ ImagePlaceholder.jsx  # segnaposto immagine riutilizzabile
├─ public/
│  ├─ hero-yoga.jpg     # foto della sezione Hero (2:3 verticale)
│  └─ la-pratica-yoga.jpg # foto della sezione La Pratica (lezione su Zoom)
├─ tailwind.config.js   # palette, font, animazioni
├─ postcss.config.js
├─ next.config.mjs
└─ jsconfig.json        # alias "@/..."
```

### Le sei sezioni

| # | Sezione | Ancora | Contenuto |
|---|---------|--------|-----------|
| 1 | Hero | `#top` | Foto verticale `hero-yoga.jpg`, titolo sulla riconnessione mente-corpo, orario «lunedì e mercoledì alle 19», CTA **«Inizia il tuo percorso — Prima Lezione Gratuita»** |
| 2 | La Pratica | `#la-pratica` | Lo yoga come stile di vita: **01 Il respiro**, **02 La flessibilità**, **03 L'equilibrio mentale** |
| 3 | Il Metodo | `#il-metodo` | **Classi a numero chiuso** (max 8 riquadri in una schermata) · **Correzione posturale in tempo reale** (via telecamera) · **Rispetto della biomeccanica** |
| 4 | Chi sono | `#chi-sono` | Profilo in prima persona: danza dal 1994, Accademia Nazionale di Danza, stile praticato, riga credenziali |
| 5 | Testimonianze | `#testimonianze` | Le voci degli allievi: cinque citazioni + invito alla prima lezione |
| 6 | Inizia Ora | `#inizia-ora` | Orari fissi della settimana + contatto diretto (WhatsApp / email) + i tre passi (mi scrivi → ti rispondo → pratichi) e le lezioni individuali |

---

## Personalizzazione

### 1. Immagini

**Hero — foto reale.** `public/hero-yoga.jpg` (1066×1600, rapporto 2:3) è già collegata in
[`components/Hero.jsx`](components/Hero.jsx) tramite import statico:

```jsx
import Image from "next/image";
import heroImage from "@/public/hero-yoga.jpg";

<Image
  src={heroImage}
  alt="…"
  priority                                   // è l'elemento LCP della pagina
  placeholder="blur"                         // blur generato in automatico
  sizes="(max-width: 1023px) 100vw, 45vw"    // 1 colonna sotto lg, ~45% sopra
  className="h-auto w-full rounded-[2rem] object-cover …"
/>
```

L'import statico (invece della stringa `"/hero-yoga.jpg"`) fa conoscere a Next larghezza e
altezza in fase di build: niente layout shift e blur placeholder senza configurazione.

Per sostituire la foto mantenendo la resa, usa un **ritratto verticale in rapporto 2:3** e
aggiorna il nome nell'import. Se il nuovo scatto ha un rapporto diverso, cambia anche il
contenitore: il codice non ritaglia nulla, quindi la pagina si adatta al file.

**La Pratica — foto reale.** `public/la-pratica-yoga.jpg` (1460×1586, quasi quadrata) è collegata
in [`components/Practice.jsx`](components/Practice.jsx) con lo stesso schema della Hero. Anche qui
nessun ritaglio: `h-auto w-full` lascia il rapporto nativo, così restano visibili sia lo schermo
con la griglia Zoom sia chi pratica sul tappetino.

**Chi sono — ritratto mancante.** La sezione [`components/About.jsx`](components/About.jsx) usa
ancora `ImagePlaceholder`: serve una **foto di Tiziana**, non di repertorio. Il riquadro è
`aspect-[4/5]`, quindi va bene un ritratto verticale. Sostituiscilo con lo stesso schema delle
altre due foto (import statico + `next/image`).

### 2. Testimonianze

Le citazioni in [`components/Testimonials.jsx`](components/Testimonials.jsx) sono di esempio:
sostituiscile con le parole reali degli allievi, raccolte con il loro consenso. Ogni voce è un
oggetto dell'array `testimonials`:

```js
{
  quote: "Testo della testimonianza…",
  name: "Nome C.",
  detail: "Pratica da 1 anno",
  initials: "NC", // avatar tipografico
}
```

La prima voce dell'array occupa due colonne su desktop: mettici la testimonianza più forte.
Per usare le foto al posto delle iniziali, sostituisci lo `<span>` dell'avatar con un
`next/image` da 44×44 px e `className="rounded-full object-cover"`.

### 3. Orari delle lezioni

Gli orari sono fissi e vivono in [`lib/schedule.js`](lib/schedule.js). Modifica lì: si aggiornano
insieme la Hero, il pannello di *Inizia Ora* e la nota nel footer.

```js
export const SCHEDULE = [
  { id: "yoga",       days: "Lunedì e mercoledì", time: "19:00", title: "Yoga",                mode: "Online, in diretta su Zoom", primary: true  },
  { id: "posturale",  days: "Martedì e giovedì",  time: "19:00", title: "Ginnastica posturale", mode: "In presenza",                primary: false },
];
```

`primary: true` colora il riquadro con lo sfondo salvia: serve a tenere lo yoga in primo piano
rispetto alla posturale. `YOGA_SCHEDULE_SHORT` è la versione discorsiva usata nella Hero.

**Manca la sede** delle lezioni in presenza: il footer rimanda a un messaggio. Quando la sai,
aggiungila in `schedule.js` e mostrala nel riquadro della posturale.

### 4. Contatti (WhatsApp ed email)

Tutti i contatti vivono in un solo file: [`lib/contacts.js`](lib/contacts.js). Modifica lì e
l'aggiornamento si propaga a navbar, sezione *Inizia Ora*, footer e pulsante fluttuante.

```js
export const EMAIL = "yogacontiziana@gmail.com";
export const PHONE_DISPLAY = "333 765 9014";   // come lo legge l'utente
export const WHATSAPP_NUMBER = "393337659014"; // formato internazionale, senza "+" né spazi
export const WHATSAPP_MESSAGE =
  "Ciao Tiziana! Vorrei informazioni sulla prima lezione di yoga gratuita.";
```

`WHATSAPP_URL` viene costruito come `https://wa.me/<numero>?text=<messaggio>`: il testo è già
precompilato nella chat, così chi scrive non deve inventare l'incipit. `MAILTO_URL` apre il client
di posta con oggetto «Prima lezione di yoga».

Dove compare WhatsApp:

| Punto | File | Comportamento |
|-------|------|---------------|
| Navbar | [`components/Navbar.jsx`](components/Navbar.jsx) | Icona + numero da `xl`, solo icona su mobile |
| Sezione *Inizia Ora* | [`components/Booking.jsx`](components/Booking.jsx) | Pulsante principale del pannello di contatto |
| Footer | [`components/Footer.jsx`](components/Footer.jsx) | Numero ed email per esteso |
| Pulsante fluttuante | [`components/WhatsAppFloat.jsx`](components/WhatsAppFloat.jsx) | Fisso in basso a destra, si espande al passaggio del mouse su desktop |

Per rimuovere il pulsante fluttuante, togli `<WhatsAppFloat />` da [`app/page.jsx`](app/page.jsx).

### 5. Palette

Definita in [`tailwind.config.js`](tailwind.config.js):

| Token | Ruolo | Esempio |
|-------|-------|---------|
| `sand-50 → 400` | sfondi caldi, luce | `#FDFBF8` … `#D3C4AF` |
| `sage-50 → 900` | colore identitario, calma vegetale | `#F2F5F2` … `#2B362D` |
| `clay-200 → 600` | accento caldo, usato con parsimonia | `#EBD7C8` … `#96694A` |
| `whatsapp-400 → 600` | verde WhatsApp smorzato, solo per i contatti | `#6E9E80` … `#4C7359` |
| `ink` | testo profondo | `#2E3630` |

Tipografia: **Cormorant Garamond** (titoli, serif elegante) + **Inter** (testo), caricati con
`next/font/google` — la prima build richiede connessione a internet per scaricare i font.

---

## Note tecniche

- Solo `Navbar.jsx` è un client component (`"use client"`): tutto il resto è renderizzato lato server.
- Nessuna dipendenza esterna oltre a Next, React e Tailwind: le icone sono SVG inline e la
  pagina non carica script o iframe di terze parti (niente cookie banner da gestire).
- Accessibilità: `lang="it"`, gerarchia `h1 → h3` corretta, `focus-visible` su tutti i CTA,
  link solo-icona con `aria-label`, animazioni disattivate con `prefers-reduced-motion`.
- Responsive: layout a colonna singola sotto `md`, griglie a 2/3 colonne da `md` in su.

---

## Nota sul tono

La sezione *Chi sono* è scritta **in prima persona** e le credenziali sono elencate senza
aggettivi: solo nomi propri, date e voti. È una scelta, non una svista — «insegnante di altissimo
livello» si legge come vanteria anche quando è vero, mentre «Accademia Nazionale di Danza,
108/110» lascia la conclusione a chi legge. Per lo stesso motivo la riga delle credenziali sta
in fondo alla sezione e non nella Hero: in alto sarebbe un'esibizione, lì è una verifica per chi
si è appena chiesto «ma chi me lo insegna?».

Il gruppo a numero chiuso è l'argomento che regge il valore della lezione: otto persone invece di
trenta significa che ogni allievo riceve attenzione reale, e questo ha un costo. La pagina lo dice
descrivendo il metodo, mai difendendo il prezzo, e non nomina mai la concorrenza.
