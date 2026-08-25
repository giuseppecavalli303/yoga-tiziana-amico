/**
 * Orari fissi delle lezioni — punto unico di verità.
 * Usati nella Hero, nella sezione Inizia Ora e nel footer.
 */

/** Sede delle lezioni in presenza. */
export const VENUE = {
  name: "REC — Realtà Coreutiche",
  address: "Via Portuense 543, Roma",
  note: "Scuola di danza e spazio per eventi, zona Portuense",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("REC Realtà Coreutiche, Via Portuense 543, Roma"),
};

/**
 * `primary: true` mette il corso in evidenza (sfondo salvia):
 * lo yoga resta il servizio principale della pagina.
 */
export const SCHEDULE = [
  {
    id: "yoga",
    title: "Yoga",
    format: "Online, in diretta su Zoom",
    slots: [{ days: "Lunedì e mercoledì", time: "19:00" }],
    primary: true,
  },
  {
    id: "posturale-online",
    title: "Ginnastica posturale",
    format: "Online, in diretta su Zoom",
    slots: [{ days: "Martedì e giovedì", time: "19:00" }],
    primary: false,
  },
  {
    id: "posturale-presenza",
    title: "Ginnastica posturale",
    format: "In presenza · 60 minuti",
    slots: [
      { days: "Martedì", time: "10:00" },
      { days: "Giovedì", time: "11:00" },
    ],
    venue: VENUE,
    primary: false,
  },
];

/** Riga breve per la Hero. */
export const YOGA_SCHEDULE_SHORT = "lunedì e mercoledì alle 19";
