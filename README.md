# Tiziana Amico — Yoga · Landing Page

Landing page one-page costruita con **Next.js 14 (App Router)**, **React 18** e **TailwindCSS 3**.

Direttiva editoriale: lo **Yoga** è il centro della pagina — disciplina olistica, stile di vita,
benessere fisico e mentale. La **ginnastica posturale** compare solo come garanzia di attenzione
alla biomeccanica e alla sicurezza. Nessun riferimento a dolori o patologie: il registro è quello
della **crescita personale**.

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
│  └─ contacts.js       # WhatsApp, email e messaggio precompilato (punto unico di verità)
├─ components/
│  ├─ Navbar.jsx        # header fisso, si compatta allo scroll (client component)
│  ├─ Hero.jsx          # 1. Hero — titolo mente-corpo + CTA prima lezione gratuita
│  ├─ Practice.jsx      # 2. La Pratica — respiro, flessibilità, equilibrio mentale
│  ├─ Method.jsx        # 3. La Sicurezza (Il Metodo) — 3 blocchi
│  ├─ Testimonials.jsx  # 4. Testimonianze degli allievi
│  ├─ Booking.jsx       # 5. Inizia Ora — iframe Calendly (placeholder)
│  ├─ Footer.jsx
│  ├─ WhatsAppFloat.jsx # pulsante WhatsApp fluttuante
│  ├─ icons/WhatsAppIcon.jsx
│  └─ ImagePlaceholder.jsx  # segnaposto immagine riutilizzabile
├─ public/              # qui vanno le foto reali
├─ tailwind.config.js   # palette, font, animazioni
├─ postcss.config.js
├─ next.config.mjs
└─ jsconfig.json        # alias "@/..."
```

### Le cinque sezioni

| # | Sezione | Ancora | Contenuto |
|---|---------|--------|-----------|
| 1 | Hero | `#top` | Immagine suggestiva (placeholder), titolo sulla riconnessione mente-corpo, CTA **«Inizia il tuo percorso — Prima Lezione Gratuita»** |
| 2 | La Pratica | `#la-pratica` | Lo yoga come stile di vita: **01 Il respiro**, **02 La flessibilità**, **03 L'equilibrio mentale** |
| 3 | Il Metodo | `#il-metodo` | **Classi a numero chiuso** · **Correzione posturale in tempo reale** · **Rispetto della biomeccanica** |
| 4 | Testimonianze | `#testimonianze` | Le voci degli allievi: cinque citazioni + invito alla prima lezione |
| 5 | Inizia Ora | `#inizia-ora` | Prenotazione diretta via iframe Calendly + i tre passi del primo incontro |

---

## Personalizzazione

### 1. Link Calendly

In [`components/Booking.jsx`](components/Booking.jsx) sostituisci la costante `CALENDLY_URL`
con il link reale, ad esempio:

```js
const CALENDLY_URL =
  "https://calendly.com/tuo-utente/prima-lezione?hide_gdpr_banner=1&background_color=fdfbf8&text_color=2e3630&primary_color=5b6f5e";
```

I parametri di colore sono già allineati alla palette della pagina: cambiali solo se cambi il tema.

### 2. Immagini

I riquadri `ImagePlaceholder` sono segnaposto animati. Per usare una foto:

1. copia il file in `public/` (es. `public/hero.jpg`);
2. sostituisci il componente con `next/image`:

```jsx
import Image from "next/image";

<div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
  <Image src="/hero.jpg" alt="Tiziana durante la pratica" fill className="object-cover" priority />
</div>
```

### 3. Testimonianze

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
| Sezione *Inizia Ora* | [`components/Booking.jsx`](components/Booking.jsx) | Pulsante pieno accanto a «Scrivi una email» |
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
- Nessuna dipendenza esterna oltre a Next, React e Tailwind: le icone sono SVG inline.
- Accessibilità: `lang="it"`, gerarchia `h1 → h3` corretta, `focus-visible` su tutti i CTA,
  iframe con `title` descrittivo, animazioni disattivate con `prefers-reduced-motion`.
- Responsive: layout a colonna singola sotto `md`, griglie a 2/3 colonne da `md` in su.
