import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";

export default function Home() {
  return (

    <main className="relative">
      <Header />
      <HeroSection />
      <Testimonials/>
      <FAQ/>
      <Footer />
    </main>

  );
}
