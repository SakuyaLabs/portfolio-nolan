import Link from "next/link";
import { getMembers } from "@/lib/members/data";
import MemberCard from "./MemberCard";
import MembersHeading from "./MembersHeading";

const EXCERPT_SLUGS = ["tanaka", "kimura", "nakamura"];

/**
 * TOPページ セクション3｜Member's Voice（抜粋）
 * エンジニア・デザイナー・PMを1名ずつ抜粋し、職種の異なる視点をひと目で見せる。
 * 全件は職種タブ切り替え付きの`/members`へ誘導する（docs/planning.md IA）。
 */
export default async function MembersExcerpt() {
  const members = await getMembers();
  const excerpt = EXCERPT_SLUGS.map((slug) => members.find((member) => member.slug === slug)).filter(
    (member): member is NonNullable<typeof member> => Boolean(member),
  );

  return (
    <section
      id="members"
      aria-label="メンバーの声"
      className="border-t border-ink-600 bg-ink-800 py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <MembersHeading
            title="働く人の言葉で語る、Nolanのカルチャー"
            lead="裁量も透明性も、制度の説明より本人の言葉の方が伝わると考えています。"
          />
          <Link
            href="/members"
            className="font-sans-jp shrink-0 self-start text-sm font-bold text-violet-soft underline decoration-violet-soft/40 underline-offset-4 transition-colors hover:text-paper sm:self-auto"
          >
            メンバーの声をもっと見る →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excerpt.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
