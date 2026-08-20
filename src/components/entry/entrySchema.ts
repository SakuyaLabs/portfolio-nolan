import { z } from "zod";

/**
 * エントリーフォームのバリデーションスキーマ。④・⑤のContactFormと同じ
 * React Hook Form + Zodの構成。
 */
export const entrySchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  nameKana: z.string().min(1, "フリガナを入力してください"),
  email: z.string().min(1, "メールアドレスを入力してください").email("メールアドレスの形式が正しくありません"),
  phone: z.string().optional(),
  position: z.string().min(1, "応募職種を選択してください"),
  portfolioUrl: z
    .string()
    .optional()
    .refine((value) => !value || /^https?:\/\/.+/.test(value), {
      message: "URLの形式が正しくありません（http(s)://から入力してください）",
    }),
  message: z.string().min(20, "20文字以上でご記入ください"),
  agree: z.boolean().refine((value) => value === true, {
    message: "デモ応募であることへの同意が必要です",
  }),
});

export type EntryFormValues = z.infer<typeof entrySchema>;
