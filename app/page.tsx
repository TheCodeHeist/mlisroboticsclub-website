import { About } from "@/components/blocks/About";
import { Events } from "@/components/blocks/Events";
import { Footer } from "@/components/blocks/Footer";
import { Hero } from "@/components/blocks/Hero";
import { Members } from "@/components/blocks/Members";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      <Members />
      <Events />
      <Footer />
    </main>
  );
}
