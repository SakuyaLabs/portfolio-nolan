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
 * Member's Voiceの見出し・リード文。TOPページ抜粋（h2）と`/members`単独ページ（h1）の
 * 両方で使い回すため、見出しレベルをpropで切り替える（⑤ミライ工務店`WorksCard`で確立した
 * headingLevelパターンを踏襲。共有コンポーネントの見出し順序スキップを防ぐ）。
 */
export default function MembersHeading({ headingLevel = "h2", eyebrow = "Member's Voice", title, lead }: Props) {
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
