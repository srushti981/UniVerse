import Navbar from "../../components/Layout/Navbar";
import Hero from "../../components/Landing/Hero";
import Stats from "../../components/Landing/Stats";
import Features from "../../components/Landing/Features";
import Footer from "../../components/Layout/Footer";
import Testimonials from "../../components/Landing/Testimonials";
import CTA from "../../components/Landing/CTA";

export default function Landing() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}