import type { Metadata } from "next";
import MembersHeading from "@/components/members/MembersHeading";
import MembersTabs from "@/components/members/MembersTabs";
import { getMembers } from "@/lib/members/data";

export const metadata: Metadata = {
  title: "メンバーの声",
  description:
    "Nolanで働くエンジニア・デザイナー・PMのインタビュー。裁量、透明性、学び続ける文化を、本人の言葉とエピソードで紹介します。",
};

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <main className="flex flex-1 flex-col bg-ink py-section-mobile lg:py-section">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-12 lg:px-20">
        <MembersHeading
          headingLevel="h1"
          title="働く人の言葉で語る、Nolan"
          lead="役職や制度の説明では伝わらないことを、実際に働くメンバー自身の言葉で紹介します。気になる職種のタブを選んで、興味のある人から読んでみてください。"
        />

        <div className="mt-14">
          <MembersTabs members={members} headingLevel="h2" />
        </div>
      </div>
    </main>
  );
}
