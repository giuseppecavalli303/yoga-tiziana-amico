/**
 * Segnaposto immagine.
 *
 * Per usare una foto reale:
 *   1. metti il file in /public (es. /public/hero.jpg)
 *   2. sostituisci questo componente con:
 *        import Image from "next/image";
 *        <Image src="/hero.jpg" alt="..." fill className="object-cover" priority />
 */
export default function ImagePlaceholder({
  label = "Immagine",
  caption,
  className = "",
}) {
  return (
    <div
      role="img"
      aria-label={`Segnaposto: ${label}`}
      className={`relative overflow-hidden bg-sage-100 ${className}`}
    >
      {/* trama morbida di sfondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-sand-200 to-clay-200" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.65),transparent_60%)]" />

      {/* cerchio che "respira" */}
      <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full border border-sand-50/70 bg-sand-50/20 blur-[1px]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <span className="eyebrow text-sage-600">{label}</span>
        {caption ? (
          <span className="max-w-[22ch] font-serif text-lg text-sage-800/80">
            {caption}
          </span>
        ) : null}
      </div>
    </div>
  );
}
