import { Fragment, type ElementType } from "react";
import { MEMBER_ROLES, type Member } from "@/lib/members/data";

type Props = {
  member: Member;
  headingLevel?: "h2" | "h3";
};

/**
 * インタビューカード。名前の見出しレベルは呼び出し元の文脈（TOPページ抜粋 or `/members`単独
 * ページ）に応じてpropで切り替える。dt/ddは`<dl>`直下にFragmentでグループ化し、divで
 * ラップしない（①NAGI Phase 5の反省点）。
 */
export default function MemberCard({ member, headingLevel = "h3" }: Props) {
  const Heading = headingLevel as ElementType;
  const roleCategoryLabel = MEMBER_ROLES.find((role) => role.value === member.role)?.label ?? member.roleLabel;

  return (
    <article className="flex flex-col rounded-2xl border border-ink-600 bg-ink-800 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Heading className="font-space-grotesk text-lg font-bold text-paper sm:text-xl">{member.name}</Heading>
          <p className="font-sans-jp mt-1 text-sm text-paper-dim">
            {member.roleLabel}・{member.tenure}
          </p>
        </div>
        <span className="font-sans-jp shrink-0 rounded-full border border-violet-soft/40 bg-violet/10 px-3 py-1 text-xs whitespace-nowrap text-violet-soft">
          {roleCategoryLabel}
        </span>
      </div>

      <blockquote className="font-sans-jp mt-6 border-l-2 border-violet pl-4 text-sm leading-relaxed text-paper italic sm:text-base">
        {member.quote}
      </blockquote>

      <dl className="mt-6 space-y-5">
        {member.qa.map((item) => (
          <Fragment key={item.question}>
            <dt className="font-sans-jp text-xs font-bold tracking-wide text-violet-soft">{item.question}</dt>
            <dd className="font-sans-jp mt-1.5 text-sm leading-relaxed text-paper-dim">{item.answer}</dd>
          </Fragment>
        ))}
      </dl>
    </article>
  );
}
