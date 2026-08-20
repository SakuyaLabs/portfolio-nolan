export type JobRole = "engineer" | "designer" | "pm";

export type JobRoleMeta = {
  value: JobRole;
  label: string;
};

export const JOB_ROLES: JobRoleMeta[] = [
  { value: "engineer", label: "エンジニア" },
  { value: "designer", label: "デザイナー" },
  { value: "pm", label: "PM" },
];

export type JobRequirements = {
  must: string[];
  nice: string[];
};

export type Job = {
  slug: string;
  title: string;
  role: JobRole;
  roleLabel: string;
  employmentType: string;
  location: string;
  salary: string;
  summary: string;
  mission: string;
  responsibilities: string[];
  requirements: JobRequirements;
};

/**
 * 求人データ。④・⑤で確立したCMS移行想定のスキーマ設計（型定義とデータ取得関数の分離）を踏襲する。
 * 求人一覧（一覧カード用の`summary`）と求人詳細（`mission`/`responsibilities`/`requirements`）の
 * 両方で同じデータソースを参照する（データ一元化の方針）。
 */
const JOBS: Job[] = [
  {
    slug: "backend-engineer",
    title: "バックエンドエンジニア",
    role: "engineer",
    roleLabel: "エンジニア",
    employmentType: "正社員",
    location: "フルリモート（月1回出社）",
    salary: "年収600万〜900万円（経験・スキルに応ず）",
    summary: "課金・請求まわりのコアドメインを、設計から運用まで一貫して担当します。",
    mission:
      "Nolanの契約・課金基盤は事業成長の速度をそのまま左右します。複雑化しがちなドメインを、壊れにくい設計で支え続けることがこのポジションのミッションです。",
    responsibilities: [
      "契約・課金・請求ドメインのAPI設計と実装",
      "既存機能のリファクタリングとパフォーマンス改善",
      "PM・デザイナーと連携した要件定義への参加",
      "障害対応とポストモーテムの作成",
    ],
    requirements: {
      must: ["Webアプリケーションのバックエンド開発経験3年以上", "RDBを用いたスキーマ設計の経験"],
      nice: ["決済・課金ドメインの開発経験", "AWSやCloudflare等のインフラ運用経験"],
    },
  },
  {
    slug: "frontend-engineer",
    title: "フロントエンドエンジニア",
    role: "engineer",
    roleLabel: "エンジニア",
    employmentType: "正社員",
    location: "フルリモート（月1回出社）",
    salary: "年収550万〜850万円（経験・スキルに応ず）",
    summary: "管理画面のUI基盤を、デザイナーと二人三脚で作り直すポジションです。",
    mission:
      "機能追加のたびに複雑さが増していた管理画面のUI基盤を、コンポーネント設計から見直しています。使いやすさと保守性を両立させる設計判断そのものが評価対象です。",
    responsibilities: [
      "Next.js / TypeScriptによる管理画面の設計・実装",
      "デザインシステムのコンポーネント設計",
      "デザイナーと連携したUI仕様の詰め",
      "アクセシビリティ・パフォーマンスの改善",
    ],
    requirements: {
      must: ["React（またはVue等）を用いたフロントエンド開発経験2年以上", "TypeScriptでの開発経験"],
      nice: ["デザインシステムの構築・運用経験", "アクセシビリティ対応の実務経験"],
    },
  },
  {
    slug: "ui-designer",
    title: "UIデザイナー",
    role: "designer",
    roleLabel: "デザイナー",
    employmentType: "正社員",
    location: "フルリモート（月1回出社）",
    salary: "年収500万〜750万円（経験・スキルに応ず）",
    summary: "意思決定の最初から議論に加わり、デザインを後工程にしないポジションです。",
    mission:
      "デザインを「見た目を整える工程」ではなく「意思決定そのもの」として扱っています。要件が固まる前の議論からデザイナーが参加し、仕様自体を一緒に作ります。",
    responsibilities: [
      "プロダクト全体のUI/UXデザイン",
      "デザインシステムの設計・メンテナンス",
      "ユーザーインタビュー・usability testingの実施",
      "エンジニアと連携した実装フィードバック",
    ],
    requirements: {
      must: ["Webサービス・SaaSプロダクトのUIデザイン経験2年以上", "Figma等のデザインツールの実務経験"],
      nice: ["デザインシステムの構築経験", "ユーザーリサーチの実務経験"],
    },
  },
  {
    slug: "product-manager",
    title: "プロダクトマネージャー",
    role: "pm",
    roleLabel: "PM",
    employmentType: "正社員",
    location: "フルリモート（月1回出社）",
    salary: "年収650万〜1000万円（経験・スキルに応ず）",
    summary: "現場の一言を、次の四半期の最優先タスクに変えるポジションです。",
    mission:
      "ロードマップは会議室だけで作りません。カスタマーサポートやセールスと同席し、現場で拾った課題を優先度に反映させることを重視しています。",
    responsibilities: [
      "プロダクトロードマップの策定・優先順位付け",
      "エンジニア・デザイナーを横断した要件定義",
      "顧客インタビュー・データ分析による課題発見",
      "リリース後の効果測定と改善サイクルの運用",
    ],
    requirements: {
      must: ["Webサービス・SaaSプロダクトのPM経験2年以上", "エンジニア・デザイナーとの協働経験"],
      nice: ["BtoB SaaSでのPM経験", "データ分析ツールを用いた意思決定の経験"],
    },
  },
];

export async function getJobs(): Promise<Job[]> {
  return JOBS;
}

export async function getJob(slug: string): Promise<Job | undefined> {
  return JOBS.find((job) => job.slug === slug);
}
