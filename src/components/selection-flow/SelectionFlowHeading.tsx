"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

/** 選考フローセクションの見出し・リード文。 */
export default function SelectionFlowHeading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_PRODUCT }}
      className="max-w-xl"
    >
      <p className="font-space-grotesk text-sm tracking-[0.2em] text-violet-soft uppercase">Selection Flow</p>
      <h2 className="font-space-grotesk mt-4 text-3xl leading-[1.3] font-bold text-paper sm:text-4xl">
        選考は、5ステップで完結する
      </h2>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-paper-dim sm:text-base">
        エントリーからオファーまで、平均2〜3週間です。各ステップで何が行われるかを、あらかじめ明記します。
      </p>
    </motion.div>
  );
}
