import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-night min-h-screen pb-4">
      <Hero />
      <div className="max-w-md mx-auto">
        <Bio />
      </div>
      <div className="max-w-md mx-auto">
        <Experience />
      </div>
    </main>
  );
}
