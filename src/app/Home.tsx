import { Hero } from "./components/Hero";
import { ScrollSection } from "./components/ScrollSection";
import { AdditionalSection } from "./components/AdditionalSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Hero />
      <ScrollSection />
      <AdditionalSection />
      <Footer />
    </main>
  );
}
