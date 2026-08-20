/**
 * Heroセクションの背景ビジュアル。写真は使わず、プロダクトのUIを思わせるグリッドと
 * ノード状の線でテック感を表現する（docs/planning.md ビジュアル素材の方針）。
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-ink">
      {/* ヴァイオレットのグロー */}
      <div className="absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-violet/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet/10 blur-3xl" />

      {/* 極小タイルの格子パターン。ビューポート全面へのフィルタ適用を避け、パフォーマンスに配慮する
          （①NAGI Phase 5の反省点：feTurbulenceの直接適用によるLCP悪化を踏まえた設計判断）。 */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none">
        <defs>
          <pattern id="nolan-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0 L0 0 0 48" fill="none" stroke="var(--color-paper)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nolan-grid)" />
      </svg>

      {/* ノードとそれをつなぐ線。プロダクトのシステム図を思わせる抽象表現。 */}
      <svg className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-40" viewBox="0 0 800 300" preserveAspectRatio="xMidYMax slice">
        <line x1="120" y1="240" x2="340" y2="120" stroke="var(--color-violet)" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="340" y1="120" x2="560" y2="180" stroke="var(--color-violet)" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="560" y1="180" x2="700" y2="80" stroke="var(--color-violet)" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="120" cy="240" r="4" fill="var(--color-violet-soft)" />
        <circle cx="340" cy="120" r="4" fill="var(--color-violet-soft)" />
        <circle cx="560" cy="180" r="4" fill="var(--color-violet-soft)" />
        <circle cx="700" cy="80" r="4" fill="var(--color-violet-soft)" />
      </svg>
    </div>
  );
}
