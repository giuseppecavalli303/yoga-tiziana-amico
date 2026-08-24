import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contacts";

/**
 * Pulsante WhatsApp fluttuante, sempre raggiungibile.
 * Su schermi larghi si espande al passaggio del mouse mostrando il numero.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Scrivi su WhatsApp al ${PHONE_DISPLAY}`}
      className="group fixed bottom-6 right-6 z-50 flex items-center rounded-full bg-whatsapp-600 px-4 py-4 text-sand-50 shadow-[0_18px_40px_-18px_rgba(46,54,48,0.8)] transition hover:bg-whatsapp-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sand-100 sm:bottom-8 sm:right-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 group-hover:ml-3 group-hover:max-w-[12rem] group-focus-visible:ml-3 group-focus-visible:max-w-[12rem] lg:block">
        Scrivimi su WhatsApp
      </span>
    </a>
  );
}
