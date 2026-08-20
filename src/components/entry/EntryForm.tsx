"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { entrySchema, type EntryFormValues } from "./entrySchema";

type PositionOption = { value: string; label: string };

const inputClass =
  "font-sans-jp mt-2 w-full rounded-xl border border-ink-600 bg-ink px-4 py-3 text-sm text-paper placeholder:text-ink-400 focus:border-violet focus:outline-none focus-visible:ring-2 focus-visible:ring-violet/40";

/**
 * エントリーフォーム。④・⑤のContactFormと同じくReact Hook Form + Zod、
 * 実送信は行わずクライアント側のみで完結するモック送信。送信前後に
 * 「ポートフォリオ用のデモ応募」であることを明示する（docs/planning.md Concept Project表記の方針）。
 */
export default function EntryForm({
  positionOptions,
  defaultPosition,
}: {
  positionOptions: PositionOption[];
  defaultPosition?: string;
}) {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EntryFormValues>({
    resolver: zodResolver(entrySchema),
    defaultValues: {
      position: defaultPosition ?? "",
      agree: false,
    },
  });

  const onSubmit = async (values: EntryFormValues) => {
    // デモのため実際の送信は行わず、擬似的な処理待ちのみ挟む。
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmittedName(values.name);
  };

  if (submittedName) {
    return (
      <div className="rounded-2xl border border-violet-soft/40 bg-ink-800 p-8 text-center sm:p-10">
        <h2 className="font-space-grotesk text-2xl font-bold text-paper">
          エントリーありがとうございます、{submittedName}様
        </h2>
        <p className="font-sans-jp mt-4 text-sm leading-loose text-paper-dim">
          内容を確認の上、担当者よりご連絡いたします。
          <br />
          なお本サイトはSakuyaLabsによるポートフォリオ用のConcept
          Project（架空案件）のため、実際にメールが送信されることはありません。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="font-sans-jp text-sm font-medium text-paper">
          お名前 <span className="text-violet-soft">必須</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="font-sans-jp mt-1.5 text-xs text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="nameKana" className="font-sans-jp text-sm font-medium text-paper">
          フリガナ <span className="text-violet-soft">必須</span>
        </label>
        <input
          id="nameKana"
          type="text"
          autoComplete="off"
          aria-invalid={Boolean(errors.nameKana)}
          aria-describedby={errors.nameKana ? "nameKana-error" : undefined}
          className={inputClass}
          {...register("nameKana")}
        />
        {errors.nameKana && (
          <p id="nameKana-error" role="alert" className="font-sans-jp mt-1.5 text-xs text-red-400">
            {errors.nameKana.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-sans-jp text-sm font-medium text-paper">
          メールアドレス <span className="text-violet-soft">必須</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="font-sans-jp mt-1.5 text-xs text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="font-sans-jp text-sm font-medium text-paper">
          電話番号（任意）
        </label>
        <input id="phone" type="tel" autoComplete="tel" className={inputClass} {...register("phone")} />
      </div>

      <div>
        <label htmlFor="position" className="font-sans-jp text-sm font-medium text-paper">
          応募職種 <span className="text-violet-soft">必須</span>
        </label>
        <select
          id="position"
          aria-invalid={Boolean(errors.position)}
          aria-describedby={errors.position ? "position-error" : undefined}
          className={inputClass}
          {...register("position")}
        >
          <option value="">選択してください</option>
          {positionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.position && (
          <p id="position-error" role="alert" className="font-sans-jp mt-1.5 text-xs text-red-400">
            {errors.position.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="portfolioUrl" className="font-sans-jp text-sm font-medium text-paper">
          ポートフォリオ・GitHub等のURL（任意）
        </label>
        <input
          id="portfolioUrl"
          type="text"
          inputMode="url"
          placeholder="https://"
          aria-invalid={Boolean(errors.portfolioUrl)}
          aria-describedby={errors.portfolioUrl ? "portfolioUrl-error" : undefined}
          className={inputClass}
          {...register("portfolioUrl")}
        />
        {errors.portfolioUrl && (
          <p id="portfolioUrl-error" role="alert" className="font-sans-jp mt-1.5 text-xs text-red-400">
            {errors.portfolioUrl.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="font-sans-jp text-sm font-medium text-paper">
          自己紹介・志望動機 <span className="text-violet-soft">必須</span>
        </label>
        <textarea
          id="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="font-sans-jp mt-1.5 text-xs text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-ink-600 bg-ink-800 p-4">
        <input
          id="agree"
          type="checkbox"
          aria-invalid={Boolean(errors.agree)}
          aria-describedby={errors.agree ? "agree-error" : undefined}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-400 accent-violet"
          {...register("agree")}
        />
        <label htmlFor="agree" className="font-sans-jp text-xs leading-relaxed text-paper-dim">
          本サイトはSakuyaLabsによるポートフォリオ用のConcept
          Project（架空案件）であり、このフォームからの送信は実際の応募として処理されないことに同意します。
        </label>
      </div>
      {errors.agree && (
        <p id="agree-error" role="alert" className="font-sans-jp -mt-4 text-xs text-red-400">
          {errors.agree.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="font-sans-jp w-full rounded-full bg-violet px-6 py-4 text-sm font-medium text-ink transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(124,92,255,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "送信中…" : "この内容で送信する（デモ）"}
      </button>
    </form>
  );
}
