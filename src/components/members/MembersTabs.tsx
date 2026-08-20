"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { MEMBER_ROLES, type Member, type MemberRole } from "@/lib/members/data";
import MemberCard from "./MemberCard";

type TabValue = MemberRole | "all";

const TABS: { value: TabValue; label: string }[] = [
  { value: "all", label: "すべて" },
  ...MEMBER_ROLES.map((role) => ({ value: role.value, label: role.label })),
];

type Props = {
  members: Member[];
  headingLevel?: "h2" | "h3";
};

/**
 * 職種タブによる絞り込み。企画書⑥の技術ポイント「カード型UIでタブ/フィルタ切り替え」に対応し、
 * ⑤`WorksExplorer`の`role="group"`＋`aria-pressed`パターンより一段厳密な、正式なARIA Tabs
 * パターン（`tablist`/`tab`/`tabpanel`、矢印キーでのロービングフォーカス）で実装する。
 */
export default function MembersTabs({ members, headingLevel = "h3" }: Props) {
  const [active, setActive] = useState<TabValue>("all");
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const visible = active === "all" ? members : members.filter((member) => member.role === active);

  const focusTab = (index: number) => {
    const nextIndex = (index + TABS.length) % TABS.length;
    setActive(TABS[nextIndex].value);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(TABS.length - 1);
    }
  };

  return (
    <div>
      <div role="tablist" aria-label="職種で絞り込む" className="flex flex-wrap gap-2">
        {TABS.map((tab, index) => {
          const selected = tab.value === active;
          const tabId = `${baseId}-tab-${tab.value}`;

          return (
            <button
              key={tab.value}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`font-sans-jp rounded-full border px-5 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet ${
                selected
                  ? "border-violet bg-violet/10 text-paper"
                  : "border-ink-600 text-paper-dim hover:border-ink-400 hover:text-paper"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {visible.map((member) => (
          <MemberCard key={member.slug} member={member} headingLevel={headingLevel} />
        ))}
      </div>
    </div>
  );
}
