export type SelectionFlowStep = {
  number: string;
  title: string;
  description: string;
};

/**
 * 選考フローのステップデータ。企画書⑥「選考フロー：ステップの可視化」に対応。
 * 各ステップに所要時間・進め方の実態を添え、応募のハードルを事前に下げる。
 */
export const SELECTION_FLOW_STEPS: SelectionFlowStep[] = [
  {
    number: "01",
    title: "エントリー",
    description: "応募フォームから必要事項を送信。所要時間の目安は5分です。",
  },
  {
    number: "02",
    title: "書類選考",
    description: "レジュメを拝見し、3営業日以内に結果をお伝えします。",
  },
  {
    number: "03",
    title: "カジュアル面談",
    description: "オンラインで30分。合否判定ではなく、相互理解の場です。",
  },
  {
    number: "04",
    title: "技術面接",
    description: "1〜2回、業務に近いテーマで実務力とチームとの相性を確認します。",
  },
  {
    number: "05",
    title: "オファー",
    description: "内定通知と条件のご案内。ご不明点はここですべて解消してください。",
  },
];
