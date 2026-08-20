import SelectionFlowHeading from "./SelectionFlowHeading";
import SelectionFlowSteps from "./SelectionFlowSteps";

/**
 * TOPページ セクション6｜選考フロー
 * エントリーからオファーまでのステップを可視化する（docs/planning.md IA、企画書⑥サイト構成6.）。
 */
export default function SelectionFlow() {
  return (
    <section
      id="selection-flow"
      aria-label="選考フロー"
      className="border-t border-ink-600 bg-ink py-section-mobile lg:py-section"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20">
        <SelectionFlowHeading />
        <SelectionFlowSteps />
      </div>
    </section>
  );
}
