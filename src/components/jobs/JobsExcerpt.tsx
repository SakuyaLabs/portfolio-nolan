import Link from "next/link";
import { getJobs } from "@/lib/jobs/data";
import JobCard from "./JobCard";
import JobsHeading from "./JobsHeading";

const EXCERPT_SLUGS = ["backend-engineer", "ui-designer", "product-manager"];

/**
 * TOPページ セクション5｜仕事内容（求人抜粋）
 * エンジニア・デザイナー・PMを1件ずつ抜粋し、全件は職種フィルタ付きの`/jobs`へ誘導する
 * （docs/planning.md IA、企画書⑥サイト構成5.）。
 */
export default async function JobsExcerpt() {
  const jobs = await getJobs();
  const excerpt = EXCERPT_SLUGS.map((slug) => jobs.find((job) => job.slug === slug)).filter(
    (job): job is NonNullable<typeof job> => Boolean(job),
  );

  return (
    <section
      id="jobs"
      aria-label="仕事内容"
      className="border-t border-ink-600 bg-ink-800 py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <JobsHeading
            title="今、Nolanで募集しているポジション"
            lead="職種によってミッションも求める経験も異なります。まずは気になる職種から見てください。"
          />
          <Link
            href="/jobs"
            className="font-sans-jp shrink-0 self-start text-sm font-bold text-violet-soft underline decoration-violet-soft/40 underline-offset-4 transition-colors hover:text-paper sm:self-auto"
          >
            求人一覧をもっと見る →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excerpt.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
