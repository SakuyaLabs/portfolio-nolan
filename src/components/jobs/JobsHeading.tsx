"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

const EASE_PRODUCT = [0.16, 1, 0.3, 1] as const;

type Props = {
  headingLevel?: "h1" | "h2";
  eyebrow?: string;
  title: string;
  lead: string;
};

/**
 * 仕事内容の見出し・リード文。TOPページ抜粋（h2）と`/jobs`単独ページ（h1）の両方で使い回すため、
 * 見出しレベルをpropで切り替える（⑤ミライ工務店・Member's Voiceで確立したheadingLevelパターン）。
 */
export default function JobsHeading({ headingLevel = "h2", eyebrow = "Open Positions", title, lead }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const Heading = headingLevel as ElementType;

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: shouldReduceMotion ? 0.3 : 0.6, ease: EASE_PRODUCT }}
      className="max-w-xl"
    >
      <p className="font-space-grotesk text-sm tracking-[0.2em] text-violet-soft uppercase">{eyebrow}</p>
      <Heading className="font-space-grotesk mt-4 text-3xl leading-[1.3] font-bold text-paper sm:text-4xl">
        {title}
      </Heading>
      <p className="font-sans-jp mt-6 text-sm leading-loose text-paper-dim sm:text-base">{lead}</p>
    </motion.div>
  );
}
