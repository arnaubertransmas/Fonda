import Header from "../components/header";
import Hero from "@/components/heroSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
