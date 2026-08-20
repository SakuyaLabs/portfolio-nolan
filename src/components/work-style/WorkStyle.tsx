import WorkStyleGrid from "./WorkStyleGrid";
import WorkStyleHeading from "./WorkStyleHeading";

/**
 * TOPページ セクション4｜働き方
 * 制度・環境をリスト羅列で終わらせず、運用の実態まで一文で明記する
 * （docs/planning.md IA、企画書⑥サイト構成4.）。
 */
export default function WorkStyle() {
  return (
    <section
      id="work-style"
      aria-label="働き方"
      className="border-t border-ink-600 bg-ink py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <WorkStyleHeading />
        <WorkStyleGrid />
      </div>
    </section>
  );
}
