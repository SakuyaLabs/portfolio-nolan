"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

/**
 * TOPページ セクション7｜最終CTA
 * Heroの「裁量は、与えられるものじゃない」を受け、エントリーへの最後の一押しをする
 * （docs/planning.md IA、企画書⑥サイト構成7.）。
 */
export default function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="entry-cta"
      aria-label="エントリー"
      className="relative overflow-hidden border-t border-ink-600 bg-ink py-section-mobile lg:py-section"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/15 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_PRODUCT }}
        className="relative mx-auto max-w-2xl px-6 text-center sm:px-12 lg:px-20"
      >
        <p className="font-space-grotesk text-sm tracking-[0.2em] text-violet-soft uppercase">Entry</p>
        <h2 className="font-space-grotesk mt-4 text-3xl leading-[1.3] font-bold text-paper sm:text-4xl">
          その裁量を、次はあなたが使う番
        </h2>
        <p className="font-sans-jp mt-6 text-sm leading-loose text-paper-dim sm:text-base">
          求人を読んでから、メンバーの声を読んでから。順番はどちらでも構いません。まずはエントリーしてください。
        </p>
        <Link
          href="/entry"
          className="font-sans-jp mt-10 inline-flex items-center rounded-full bg-violet px-8 py-4 text-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(124,92,255,0.55)]"
        >
          エントリーする
        </Link>
      </motion.div>
    </section>
  );
}
