import Link from "next/link";

const NAV_LINKS = [
  { href: "/jobs", label: "求人一覧" },
  { href: "/members", label: "メンバーの声" },
  { href: "/entry", label: "エントリー" },
] as const;

/**
 * サイトヘッダー。④⑤と同様、複数ページ構成のためナビゲーションを持つ（docs/planning.md IA）。
 */
export default function Header() {
  return (
    <header className="border-b border-ink-600 bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-12 lg:px-20">
        <Link href="/" className="font-space-grotesk text-lg font-bold text-paper">
          Nolan
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans-jp text-sm text-paper-dim">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors duration-300 hover:text-violet-soft">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/entry"
                className="font-sans-jp inline-flex items-center rounded-full bg-violet px-5 py-2 text-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(124,92,255,0.5)]"
              >
                エントリー
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
