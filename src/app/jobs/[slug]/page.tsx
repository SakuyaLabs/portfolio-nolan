import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/jobs/Breadcrumb";
import { getJob, getJobs } from "@/lib/jobs/data";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * SNS等での個別共有を想定し、求人詳細のみ独立したURLを持つ。`generateStaticParams`は
 * データ取得関数から動的にslugを導出する（⑤`/news/[slug]`で確立した更新漏れ防止の方針）。
 */
export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    return { title: "求人が見つかりません" };
  }

  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col bg-ink py-section-mobile lg:py-section">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-12 lg:px-20">
        <Breadcrumb
          items={[
            { label: "TOP", href: "/" },
            { label: "求人一覧", href: "/jobs" },
            { label: job.title },
          ]}
        />

        <div className="mt-6">
          <span className="font-sans-jp inline-flex w-fit items-center rounded-full border border-violet-soft/40 bg-violet/10 px-3 py-1 text-xs text-violet-soft">
            {job.roleLabel}
          </span>
          <h1 className="font-space-grotesk mt-4 text-3xl leading-[1.3] font-bold text-paper sm:text-4xl">
            {job.title}
          </h1>

          {/* dt/ddはdivでラップせずdl直下に置く（①NAGI Phase 5の反省点）。2列グリッドで
              ラベルと値を揃える（⑤ミライ工務店`CompanyHistory`で確立したdlパターン）。 */}
          <dl className="font-sans-jp mt-6 grid grid-cols-[6rem_1fr] gap-y-3 border-t border-ink-600 pt-6 text-sm">
            <dt className="text-ink-300">雇用形態</dt>
            <dd className="text-paper">{job.employmentType}</dd>
            <dt className="text-ink-300">勤務地</dt>
            <dd className="text-paper">{job.location}</dd>
            <dt className="text-ink-300">給与</dt>
            <dd className="text-paper">{job.salary}</dd>
          </dl>
        </div>

        <section className="mt-12">
          <h2 className="font-space-grotesk text-xl font-bold text-paper">このポジションのミッション</h2>
          <p className="font-sans-jp mt-4 text-sm leading-loose text-paper-dim sm:text-base">{job.mission}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-space-grotesk text-xl font-bold text-paper">業務内容</h2>
          <ul className="mt-4 space-y-2">
            {job.responsibilities.map((item) => (
              <li key={item} className="font-sans-jp flex gap-3 text-sm leading-relaxed text-paper-dim sm:text-base">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-space-grotesk text-xl font-bold text-paper">必須要件</h2>
          <ul className="mt-4 space-y-2">
            {job.requirements.must.map((item) => (
              <li key={item} className="font-sans-jp flex gap-3 text-sm leading-relaxed text-paper-dim sm:text-base">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-space-grotesk text-xl font-bold text-paper">歓迎要件</h2>
          <ul className="mt-4 space-y-2">
            {job.requirements.nice.map((item) => (
              <li key={item} className="font-sans-jp flex gap-3 text-sm leading-relaxed text-paper-dim sm:text-base">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-400" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-600 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans-jp text-sm text-paper-dim">このポジションに興味を持った方は、エントリーへ進んでください。</p>
          <Link
            href={`/entry?position=${job.slug}`}
            className="font-sans-jp inline-flex w-fit items-center rounded-full bg-violet px-6 py-3 text-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(124,92,255,0.5)]"
          >
            エントリーする
          </Link>
        </div>
      </div>
    </main>
  );
}
