"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

/**
 * バリュー番号の丸マーカー。セクション全体のスクロール進捗（0〜1）のうち、自分の位置に
 * スクロールが到達すると、淡いグレーからヴァイオレットの実点灯へ切り替わる
 * （企画書⑥「スクロールに応じたバリューの視覚化アニメーション」に対応）。
 */
export default function CultureValueMarker({
  progress,
  activateAt,
}: {
  progress: MotionValue<number>;
  activateAt: number;
}) {
  const scale = useTransform(progress, [activateAt - 0.06, activateAt], [0.6, 1]);
  const backgroundColor = useTransform(
    progress,
    [activateAt - 0.06, activateAt],
    ["var(--color-ink-600)", "var(--color-violet)"],
  );

  return (
    <motion.span
      aria-hidden="true"
      style={{ scale, backgroundColor }}
      className="flex h-3 w-3 shrink-0 rounded-full"
    />
  );
}
