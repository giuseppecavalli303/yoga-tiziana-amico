/**
 * Contatti — punto unico di verità.
 * Modifica qui: numero, email e testo precompilato si aggiornano in tutta la pagina.
 */
export const EMAIL = "yogacontiziana@gmail.com";

/** Numero in formato leggibile, mostrato all'utente. */
export const PHONE_DISPLAY = "333 765 9014";

/** Numero in formato internazionale senza "+" né spazi, richiesto da wa.me. */
export const WHATSAPP_NUMBER = "393337659014";

/** Messaggio precompilato nella chat WhatsApp. */
export const WHATSAPP_MESSAGE =
  "Ciao Tiziana! Vorrei informazioni sulla prima lezione di yoga gratuita.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const MAILTO_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Prima lezione di yoga"
)}`;
