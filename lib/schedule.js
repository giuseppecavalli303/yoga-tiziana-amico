/**
 * Orari fissi delle lezioni — punto unico di verità.
 * Usati nella Hero, nella sezione Inizia Ora e nel footer.
 */
export const SCHEDULE = [
  {
    id: "yoga",
    days: "Lunedì e mercoledì",
    time: "19:00",
    title: "Yoga",
    mode: "Online, in diretta su Zoom",
    primary: true,
  },
  {
    id: "posturale",
    days: "Martedì e giovedì",
    time: "19:00",
    title: "Ginnastica posturale",
    mode: "In presenza",
    primary: false,
  },
];

/** Riga breve per la Hero. */
export const YOGA_SCHEDULE_SHORT = "lunedì e mercoledì alle 19";
