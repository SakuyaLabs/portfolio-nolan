"use client";

import { useState } from "react";
import { JOB_ROLES, type Job, type JobRole } from "@/lib/jobs/data";
import JobCard from "./JobCard";

type FilterValue = JobRole | "all";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "すべて" },
  ...JOB_ROLES.map((role) => ({ value: role.value, label: role.label })),
];

type Props = {
  jobs: Job[];
  headingLevel?: "h2" | "h3";
};

/**
 * 求人一覧の職種フィルタ。⑤ミライ工務店`/works`の`WorksExplorer`と同じ
 * `role="group"`＋`aria-pressed`パターンで実装する（Member's Voiceの正式なARIA Tabsとは
 * あえて技術を変え、案件ごとの技術的な引き出しの幅を見せる）。
 */
export default function JobsExplorer({ jobs, headingLevel = "h3" }: Props) {
  const [active, setActive] = useState<FilterValue>("all");

  const visible = active === "all" ? jobs : jobs.filter((job) => job.role === active);

  return (
    <div>
      <div role="group" aria-label="職種で絞り込む" className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => {
          const pressed = filter.value === active;

          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(filter.value)}
              className={`font-sans-jp rounded-full border px-5 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet ${
                pressed
                  ? "border-violet bg-violet/10 text-paper"
                  : "border-ink-600 text-paper-dim hover:border-ink-400 hover:text-paper"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="font-sans-jp mt-4 text-xs text-ink-400">
        {visible.length}件の求人
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {visible.map((job) => (
          <JobCard key={job.slug} job={job} headingLevel={headingLevel} />
        ))}
      </div>
    </div>
  );
}
