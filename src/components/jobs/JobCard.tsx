import Link from "next/link";
import type { ElementType } from "react";
import type { Job } from "@/lib/jobs/data";

type Props = {
  job: Job;
  headingLevel?: "h2" | "h3";
};

/** 求人一覧カード。名前の見出しレベルは呼び出し元の文脈に応じてpropで切り替える。 */
export default function JobCard({ job, headingLevel = "h3" }: Props) {
  const Heading = headingLevel as ElementType;

  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="group flex flex-col rounded-2xl border border-ink-600 bg-ink-800 p-6 transition-colors hover:border-violet-soft/60 sm:p-7"
    >
      <span className="font-sans-jp inline-flex w-fit items-center rounded-full border border-violet-soft/40 bg-violet/10 px-3 py-1 text-xs text-violet-soft">
        {job.roleLabel}
      </span>
      <Heading className="font-space-grotesk mt-4 text-lg font-bold text-paper transition-colors group-hover:text-violet-soft sm:text-xl">
        {job.title}
      </Heading>
      <p className="font-sans-jp mt-3 text-sm leading-relaxed text-paper-dim">{job.summary}</p>
      {/* dt/ddはdivでラップせず、dlの直下に置く（①NAGI Phase 5の反省点）。ddの右マージンで
          「ラベル: 値」ペア同士の間隔を作る。 */}
      <dl className="font-sans-jp mt-5 flex flex-wrap gap-x-1.5 gap-y-1 text-xs text-paper-dim">
        <dt className="text-ink-400">雇用形態</dt>
        <dd className="mr-6">{job.employmentType}</dd>
        <dt className="text-ink-400">勤務地</dt>
        <dd>{job.location}</dd>
      </dl>
    </Link>
  );
}
