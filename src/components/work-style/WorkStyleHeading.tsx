"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

/** 働き方セクションの見出し・リード文。 */
export default function WorkStyleHeading() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_PRODUCT }}
      className="max-w-xl"
    >
      <p className="font-space-grotesk text-sm tracking-[0.2em] text-violet-soft uppercase">Work Style</p>
      <h2 className="font-space-grotesk mt-4 text-3xl leading-[1.3] font-bold text-paper sm:text-4xl">
        制度は、建前で終わらせない
      </h2>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-paper-dim sm:text-base">
        「福利厚生が充実しています」だけでは判断できないと思うので、実際の運用まで含めて明記しています。
      </p>
    </motion.div>
  );
}
