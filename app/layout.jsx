import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Tiziana Amico — Yoga online su Zoom | Riconnetti mente e corpo",
  description:
    "Yoga online in diretta su Zoom, lunedì e mercoledì alle 19: respiro, flessibilità ed equilibrio mentale. Classi a numero chiuso, correzione posturale in tempo reale, anche lezioni individuali su misura. Prima lezione gratuita.",
  keywords: [
    "yoga",
    "yoga online",
    "lezioni di yoga su Zoom",
    "Hatha Yoga",
    "insegnante di yoga",
    "Tiziana Amico",
    "respiro",
    "equilibrio mentale",
    "classi a numero chiuso",
  ],
  openGraph: {
    title: "Tiziana Amico — Yoga online su Zoom",
    description:
      "Un percorso di yoga in diretta su Zoom per riconnettere mente e corpo. Prima lezione gratuita.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
