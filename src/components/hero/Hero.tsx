import HeroStatement from "./HeroStatement";
import HeroVisual from "./HeroVisual";

/**
 * TOPページ セクション1｜Hero
 * ミッション・ビジョンを一枚で伝える（docs/planning.md IA、企画書⑥サイト構成1.）。
 */
export default function Hero() {
  return (
    <section id="hero" aria-label="Nolan ブランドステートメント" className="relative overflow-hidden">
      <HeroVisual />
      <HeroStatement />
    </section>
  );
}
