"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SELECTION_FLOW_STEPS } from "./selectionFlowData";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_PRODUCT } },
};

/**
 * 選考ステップの横並びストッパー（sm以上）。丸マーカーの背後に接続線を1本通し、
 * 「フロー」であることを視覚化する（企画書⑥「選考フロー：ステップの可視化」）。
 * Cultureセクションのスクロール連動ラインとは異なり、whileInViewのstaggerのみで表現し、
 * 演出技法にバリエーションを持たせる。
 */
export default function SelectionFlowSteps() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ol
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : listVariants}
      className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-5 sm:gap-4"
    >
      <div aria-hidden="true" className="absolute top-5 right-0 left-0 hidden h-px bg-ink-600 sm:block" />

      {SELECTION_FLOW_STEPS.map((step) => (
        <motion.li
          key={step.number}
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="relative flex flex-col items-start sm:items-center sm:text-center"
        >
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-soft/50 bg-ink font-space-grotesk text-sm text-violet-soft">
            {step.number}
          </span>
          <h3 className="font-space-grotesk mt-4 text-base font-bold text-paper">{step.title}</h3>
          <p className="font-sans-jp mt-2 text-sm leading-relaxed text-paper-dim sm:max-w-[11rem]">
            {step.description}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}
