import type { Metadata } from "next";
import EntryForm from "@/components/entry/EntryForm";
import { getJobs } from "@/lib/jobs/data";

export const metadata: Metadata = {
  title: "エントリー",
  description: "Nolanへのエントリーフォーム。必要事項を入力の上、ご応募ください。",
};

type Props = {
  searchParams: Promise<{ position?: string }>;
};

export default async function EntryPage({ searchParams }: Props) {
  const [jobs, { position }] = await Promise.all([getJobs(), searchParams]);

  const positionOptions = jobs.map((job) => ({ value: job.slug, label: job.title }));
  const defaultPosition = jobs.some((job) => job.slug === position) ? position : undefined;

  return (
    <main className="flex flex-1 flex-col bg-ink py-section-mobile lg:py-section">
      <div className="mx-auto w-full max-w-2xl px-6 sm:px-12 lg:px-20">
        <p className="font-space-grotesk text-sm tracking-[0.2em] text-violet-soft uppercase">Entry</p>
        <h1 className="font-space-grotesk mt-4 text-3xl leading-[1.3] font-bold text-paper sm:text-4xl">
          エントリー
        </h1>
        <p className="font-sans-jp mt-6 text-sm leading-loose text-paper-dim sm:text-base">
          必要事項をご入力ください。本サイトはSakuyaLabsによるポートフォリオ用のConcept
          Project（架空案件）のため、送信内容が実際に処理されることはありません。
        </p>

        <div className="mt-12">
          <EntryForm positionOptions={positionOptions} defaultPosition={defaultPosition} />
        </div>
      </div>
    </main>
  );
}
