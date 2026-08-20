import CultureHeading from "./CultureHeading";
import CultureValues from "./CultureValues";

/**
 * TOPページ セクション2｜Culture
 * バリューを抽象論で終わらせず、社員の行動エピソードで具体化する
 * （docs/planning.md IA、企画書⑥サイト構成2.）。
 */
export default function Culture() {
  return (
    <section id="culture" aria-label="カルチャー" className="border-t border-ink-600 bg-ink py-section-mobile lg:py-section">
      <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-20">
        <CultureHeading />
        <CultureValues />
      </div>
    </section>
  );
}
