import Link from "next/link";

const NAV_LINKS = [
  { href: "/jobs", label: "求人一覧" },
  { href: "/members", label: "メンバーの声" },
  { href: "/entry", label: "エントリー" },
] as const;

/**
 * サイトフッター。ナビゲーションに加え、実在企業との誤認を避けるための
 * 「Concept Project by SakuyaLabs」表記を常時表示する（企画書4-2、docs/planning.md）。
 */
export default function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink-800">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-space-grotesk text-xl font-bold text-paper">Nolan</p>
            <p className="font-sans-jp mt-2 text-xs tracking-[0.1em] text-violet-soft">
              裁量とカルチャーフィットを大切にするエンジニア組織
            </p>
          </div>

          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-sans-jp text-xs tracking-wide text-paper-dim">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-300 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-600 pt-8 text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans-jp leading-relaxed">
            本サイトは
            <a
              href="https://sakuyalabs.com"
              className="mx-1 text-violet-soft underline decoration-paper-dim/30 underline-offset-4 transition-colors hover:text-paper"
            >
              SakuyaLabs
            </a>
            によるポートフォリオ用のConcept Project（架空案件）です。実在の企業ではありません。
          </p>
          <p className="font-space-grotesk tracking-wide">
            © {new Date().getFullYear()} Nolan — Concept Project
          </p>
        </div>
      </div>
    </footer>
  );
}
