import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-8">
        <h2 className="text-2xl font-bold">Initial Page</h2>
      </main>
    </div>
  );
}
