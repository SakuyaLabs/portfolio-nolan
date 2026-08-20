import type { Metadata } from "next";
import JobsExplorer from "@/components/jobs/JobsExplorer";
import JobsHeading from "@/components/jobs/JobsHeading";
import { getJobs } from "@/lib/jobs/data";

export const metadata: Metadata = {
  title: "求人一覧",
  description: "Nolanの求人一覧。エンジニア・デザイナー・PMの募集職種を、職種別に絞り込んで確認できます。",
};

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="flex flex-1 flex-col bg-ink py-section-mobile lg:py-section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-12 lg:px-20">
        <JobsHeading
          headingLevel="h1"
          title="今、Nolanで募集しているポジション"
          lead="職種で絞り込み、気になるポジションの詳細を確認してください。詳細ページはそのままエントリーへ進めます。"
        />

        <div className="mt-14">
          <JobsExplorer jobs={jobs} headingLevel="h2" />
        </div>
      </div>
    </main>
  );
}
