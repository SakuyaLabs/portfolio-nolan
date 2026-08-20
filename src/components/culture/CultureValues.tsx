"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CultureValueMarker from "./CultureValueMarker";
import { VALUES } from "./valuesData";

/**
 * バリュー一覧。左側の縦ラインが、セクションのスクロール進捗に連動して上から下へ伸びる
 * （`scrollYProgress`を`scaleY`に変換）。各バリューの丸マーカーも、ラインがその位置まで
 * 到達したタイミングでヴァイオレットに点灯する（企画書⑥の技術ポイント「スクロールに応じた
 * バリューの視覚化アニメーション」）。
 */
export default function CultureValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative mt-16">
      {/* 縦ライン（トラック＋進捗フィル）。reduced-motion環境では常に全点灯にする。 */}
      <div aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-ink-600">
        <motion.div
          style={{ scaleY: shouldReduceMotion ? 1 : lineScaleY, transformOrigin: "top" }}
          className="h-full w-full bg-violet"
        />
      </div>

      <ol className="space-y-14">
        {VALUES.map((value, index) => {
          const activateAt = VALUES.length > 1 ? index / (VALUES.length - 1) : 0;

          return (
            <li key={value.number} className="flex gap-6 pl-0 sm:gap-10">
              <div className="flex w-3 shrink-0 justify-center pt-1.5">
                {shouldReduceMotion ? (
                  <span aria-hidden="true" className="h-3 w-3 rounded-full bg-violet" />
                ) : (
                  <CultureValueMarker progress={scrollYProgress} activateAt={activateAt} />
                )}
              </div>

              <div>
                <p className="font-space-grotesk text-xs tracking-[0.2em] text-violet-soft">
                  VALUE {value.number}
                </p>
                <h3 className="font-space-grotesk mt-2 text-xl font-bold text-paper sm:text-2xl">
                  {value.title}
                </h3>
                <p className="font-sans-jp mt-3 text-sm text-paper-dim sm:text-base">{value.statement}</p>
                <p className="font-sans-jp mt-4 max-w-2xl rounded-xl border border-ink-600 bg-ink-800 p-5 text-sm leading-loose text-paper-dim">
                  {value.episode}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
