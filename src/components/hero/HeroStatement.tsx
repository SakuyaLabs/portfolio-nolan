"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

/**
 * ミッション・ビジョンを一枚で伝えるブランドステートメント（docs/planning.md IA 1.、企画書⑥サイト構成1.）。
 * 見出しの末尾に句読点を付けない（sakuyalabs_web_portfolio_project全案件共通ルール）。
 */
export default function HeroStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 sm:px-12 sm:py-32 lg:px-20">
      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_PRODUCT }}
        className="font-space-grotesk text-sm tracking-[0.2em] text-violet-soft uppercase"
      >
        Nolan / Engineering
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.7, delay: shouldReduceMotion ? 0 : 0.1, ease: EASE_PRODUCT }}
        className="font-space-grotesk mt-6 text-4xl leading-[1.2] font-bold text-paper sm:text-5xl lg:text-6xl"
      >
        裁量は、
        <br />
        与えられるものじゃない
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.25, ease: EASE_PRODUCT }}
        className="font-sans-jp mt-8 max-w-xl text-sm leading-loose text-paper-dim sm:text-base"
      >
        Nolanは、意思決定の距離が近いチームです。役職や在籍年数ではなく、
        今どれだけ良い判断ができるかでプロダクトが前に進みます。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, delay: shouldReduceMotion ? 0 : 0.4, ease: EASE_PRODUCT }}
        className="mt-10 flex flex-col gap-3 sm:flex-row"
      >
        <Link
          href="/jobs"
          className="font-sans-jp inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-violet px-8 py-3.5 text-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(124,92,255,0.5)]"
        >
          求人を見る
          <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/members"
          className="font-sans-jp inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-ink-600 px-8 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-violet-soft"
        >
          メンバーの声を読む
        </Link>
      </motion.div>
    </div>
  );
}
