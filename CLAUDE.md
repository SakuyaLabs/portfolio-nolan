# Project: Nolan 採用サイト

> このファイルは `sakuyalabs_portfolio_plan.md`(SakuyaLabs Web Portfolio Project 企画書)のCLAUDE.md雛形をNolan用に埋めたものです。
> 11案件中⑥で、証明する能力軸は「デザイン×UX×情報設計×コピー」。コピーライティングの比重が最も高い案件であり、
> 「良い会社です」ではなく固有名詞・エピソードで語る文章設計そのものが技術的な見せ場になる。
> 詳細な要件定義・IA・意思決定ログは `docs/planning.md` を参照してください。

## クライアント概要
- 業種：SaaSスタートアップ（BtoB SaaS、エンジニア採用に注力）
- 屋号：Nolan
- ターゲットペルソナ：転職検討中のミドルエンジニア。カルチャーフィットと裁量権を重視し、求人票だけでは
  判断できない「働く実感」を求めている。
- ゴール（CV地点）：求人へのエントリー（応募フォーム送信）

## サイト構成
- `/`：TOPページ（Hero→Culture→Member's Voice抜粋→働き方→仕事内容抜粋→選考フロー→最終CTA）
- `/jobs`：求人一覧（職種別フィルタ付き）
- `/jobs/[slug]`：求人詳細（SSG。SNS等での個別共有を想定した独立URL）
- `/members`：メンバーの声（全件）
- `/entry`：エントリー（応募フォーム）

## デザインルール
- カラー（`src/app/globals.css` の `@theme` に定義）：
  - Primary（インク、漆黒に近い）: `--color-ink: #0B0B14`
  - Secondary（淡い紫白）: `--color-paper: #F4F3FF`
  - Accent（ヴァイオレット、装飾・非テキスト用途）: `--color-violet: #7C5CFF`
    - 明背景でのテキスト用: `--color-violet-deep: #5329FF`（paper上でコントラスト比6.11）
    - 暗背景でのテキスト用: `--color-violet-soft: #8C70FF`（ink上でコントラスト比5.48）
  - Neutralは`ink`から派生したグレースケール
  - 配色は実装着手前にコントラスト比を計算し、明背景用・暗背景用のトークンを最初から分けて設計する
    （③FORGE以降の標準方針）
- フォント（`next/font/google`）：
  - 見出し欧文：Space Grotesk（`--font-space-grotesk`。幾何学的でプロダクト然としたテック感）
  - 見出し和文・本文：Noto Sans JP（`--font-sans-jp`）
- 余白の基準：8pxグリッド／セクション間 96px
- ボタン：角丸はやや大きめ（12px程度）。ホバーはヴァイオレットの淡いグロー（box-shadow）を使う
- **見出し（h1〜h6）の末尾に句読点（。等）を付けない**（sakuyalabs_web_portfolio_project全案件共通ルール。
  ④・⑤のレビューで指摘を受け標準化された。本文コピー（`<p>`等）には通常通り句読点を使ってよい）

## 技術スタック
- Next.js 16 (App Router) / TypeScript / Tailwind CSS v4（CSS-first設定）
- 求人データは④・⑤と同じCMS移行想定のスキーマ設計（型定義とデータ取得関数の分離）で実装
- `/jobs`の職種フィルタはクライアント側`useState`で実装（⑤の`/works`と同じパターン）
- `/jobs/[slug]`のみ`generateStaticParams`によるSSG。`generateStaticParams`はデータ取得関数から
  動的にslugを導出すること（⑤の`/news/[slug]`で確立した「更新漏れ防止」の方針を踏襲）
- アニメーション：Framer Motion（Cultureセクションはスクロール連動のバリュー視覚化演出を実装）
- フォーム：React Hook Form + Zod（エントリーフォーム）
- ビジュアル素材：写真は使用せず、CSS/SVGによる抽象ビジュアル（グリッド・ノード状の線）で
  プロダクトのUIらしい質感を表現する（①〜⑤と共通方針）

## 実装時の絶対ルール
- コンポーネントは Atomic に分割し、1ファイル1責務
- 写真を使う場合は必ず `next/image`（今回は未使用の想定）
- アクセシビリティ：全インタラクティブ要素にフォーカスリング、`prefers-reduced-motion` 対応必須
- `<dl>` を使う場合は dt/dd を div でラップしない（Fragmentでグループ化。①NAGI Phase 5の反省点）
- SVGフィルター（feTurbulence等）は使う場合、小タイル化して `<pattern>` で敷き詰める（①NAGI Phase 5の反省点）
- 複数列グリッドは `grid-cols-1` ベースで `sm:`/`lg:` を使い拡張する（④はる法律事務所Phase 5の反省点）
- 各ページに `<h1>` を最初から正しく設定する
- レスポンシブは 375 / 768 / 1440 の3ブレークポイントで確認
- Lighthouse スコア：Performance 90+ / Accessibility 95+ を最低ライン
- 実装はページ・セクション単位で進め、1つ完成するごとにブラウザで確認してから次に進む
- サイト内（フッター等）に `Concept Project by SakuyaLabs` を必ず明示する
- Lighthouse計測は最初から`--throttling-method=provided`（実測ベース）を使う
  （SakuyaLabs External Intelligence `PAT-004`）

## 参照
- 企画書全体：`../sakuyalabs_portfolio_plan.md`
- ①〜⑤の実装（テンプレートの参照元）：`../01 美容院/`, `../02 飲食店/`, `../03 ジム/`, `../04 士業/`,
  `../05 小規模法人/`
- Next.js 16 固有の破壊的変更に関する注意：`@AGENTS.md`

@AGENTS.md
