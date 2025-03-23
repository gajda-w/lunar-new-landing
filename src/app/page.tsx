import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Equipment } from "@/components/equipment";
import { Realizations } from "@/components/realizations";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Equipment />
      <Services />
      <Realizations />
      <Contact />
      <Footer />
    </div>
  );
}
