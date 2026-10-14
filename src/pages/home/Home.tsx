import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-night min-h-screen space-y-6 pb-8">
      <Hero />
      <div className="max-w-lg lg:max-w-xl mx-auto px-4">
        <Bio />
      </div>
      <div className="max-w-lg lg:max-w-xl mx-auto px-4">
        <Experience />
      </div>
    </main>
  );
}
