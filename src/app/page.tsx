import Culture from "@/components/culture/Culture";
import FinalCta from "@/components/final-cta/FinalCta";
import Hero from "@/components/hero/Hero";
import JobsExcerpt from "@/components/jobs/JobsExcerpt";
import MembersExcerpt from "@/components/members/MembersExcerpt";
import SelectionFlow from "@/components/selection-flow/SelectionFlow";
import WorkStyle from "@/components/work-style/WorkStyle";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Culture />
      <MembersExcerpt />
      <WorkStyle />
      <JobsExcerpt />
      <SelectionFlow />
      <FinalCta />
    </main>
  );
}
