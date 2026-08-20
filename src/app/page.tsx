import Culture from "@/components/culture/Culture";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Culture />
    </main>
  );
}
