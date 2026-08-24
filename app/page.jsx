import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Practice from "@/components/Practice";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Practice />
        <Method />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
