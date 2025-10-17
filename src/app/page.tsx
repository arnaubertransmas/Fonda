import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/heroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
