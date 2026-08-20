export type MemberRole = "engineer" | "designer" | "pm";

export type MemberRoleMeta = {
  value: MemberRole;
  label: string;
};

export const MEMBER_ROLES: MemberRoleMeta[] = [
  { value: "engineer", label: "エンジニア" },
  { value: "designer", label: "デザイナー" },
  { value: "pm", label: "PM" },
];

export type MemberQA = { question: string; answer: string };

export type Member = {
  slug: string;
  name: string;
  role: MemberRole;
  roleLabel: string;
  tenure: string;
  quote: string;
  qa: MemberQA[];
};

/**
 * メンバーインタビューのモックデータ。④・⑤で確立したCMS移行想定のスキーマ設計（型定義と
 * データ取得関数の分離）を踏襲する。デザイン・エンジニア・PMそれぞれの視点を見せることで、
 * 職種の違いを伝える（企画書⑥「複数名のインタビュー」）。
 */
const MEMBERS: Member[] = [
  {
    slug: "tanaka",
    name: "田中 遼",
    role: "engineer",
    roleLabel: "バックエンドエンジニア",
    tenure: "入社1年目",
    quote: "「聞いてから動く」より「動いてから聞く」が歓迎される。",
    qa: [
      {
        question: "入社の決め手は？",
        answer:
          "面接で「まず触ってみて、違和感があったら直してください」と言われたことです。裁量が建前じゃないと感じました。",
      },
      {
        question: "実際に働いてみて、ギャップはありましたか？",
        answer:
          "ありませんでした。むしろ入社3ヶ月目で課金フローの改善提案がそのまま採用されて驚きました。",
      },
    ],
  },
  {
    slug: "kimura",
    name: "木村 彩",
    role: "designer",
    roleLabel: "UIデザイナー",
    tenure: "入社半年",
    quote: "入社2週間で出した意見が、価格設計を変えました。",
    qa: [
      {
        question: "デザイナーとして働きやすさを感じる瞬間は？",
        answer:
          "議論の場に最初から呼ばれることです。デザインが後工程ではなく、意思決定の一部として扱われています。",
      },
      {
        question: "Nolanのデザイン文化を一言で表すと？",
        answer: "「きれいさより、伝わるか」を優先する文化だと思います。",
      },
    ],
  },
  {
    slug: "sasaki",
    name: "佐々木 淳",
    role: "engineer",
    roleLabel: "CTO",
    tenure: "創業メンバー",
    quote: "分からないと言えることの方が、知ったかぶりより評価される。",
    qa: [
      {
        question: "CTOとして大事にしていることは？",
        answer: "自分が一番知らない側に立つことです。新しいツールの使い方を若手に聞くのも普通のことにしています。",
      },
      {
        question: "採用で重視する点は？",
        answer: "技術力より、分からないことを分からないと言える素直さです。",
      },
    ],
  },
  {
    slug: "nakamura",
    name: "中村 美咲",
    role: "pm",
    roleLabel: "プロダクトマネージャー",
    tenure: "入社2年目",
    quote: "現場で拾った一言から、画面設計を作り直しました。",
    qa: [
      {
        question: "PMとして印象に残っているエピソードは？",
        answer:
          "カスタマーサポートに同席した時に聞いた「設定画面が分かりにくい」の一言が、次の四半期の最優先タスクになりました。",
      },
      {
        question: "エンジニアやデザイナーとの距離感は？",
        answer: "職種の壁をあまり感じません。要件定義の段階からエンジニアが意見を出すのが当たり前です。",
      },
    ],
  },
];

export async function getMembers(): Promise<Member[]> {
  return MEMBERS;
}

export async function getMember(slug: string): Promise<Member | undefined> {
  return MEMBERS.find((member) => member.slug === slug);
}
