import Culture from "@/components/culture/Culture";
import Hero from "@/components/hero/Hero";
import MembersExcerpt from "@/components/members/MembersExcerpt";
import WorkStyle from "@/components/work-style/WorkStyle";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Culture />
      <MembersExcerpt />
      <WorkStyle />
    </main>
  );
}
