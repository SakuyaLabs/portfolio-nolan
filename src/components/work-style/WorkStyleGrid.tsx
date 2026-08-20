"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WORK_STYLE_ITEMS } from "./workStyleData";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_PRODUCT } },
};

/**
 * 制度カードのグリッド。`motion.ul`のvariantsが直下の`motion.li`へ伝播するstagger演出
 * （LES-002で確立・screenshotで再検証済みのパターン）。
 */
export default function WorkStyleGrid() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : listVariants}
      className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {WORK_STYLE_ITEMS.map((item) => (
        <motion.li
          key={item.number}
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="rounded-2xl border border-ink-600 bg-ink-800 p-6 transition-colors hover:border-ink-400 sm:p-7"
        >
          <p className="font-space-grotesk text-sm text-violet-soft">{item.number}</p>
          <h3 className="font-space-grotesk mt-3 text-lg font-bold text-paper">{item.title}</h3>
          <p className="font-sans-jp mt-3 text-sm leading-relaxed text-paper-dim">{item.description}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
