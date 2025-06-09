import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (

    <main className="relative">
      <Header />
      <HeroSection />
      <Footer />
    </main>

  );
}
