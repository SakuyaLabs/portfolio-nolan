export type WorkStyleItem = {
  number: string;
  title: string;
  description: string;
};

/**
 * 働き方セクションのデータ。企画書⑥「働き方：制度・環境（リモート、評価制度等）」に対応。
 * Cultureセクションと同様、制度名の説明だけで終わらせず、なぜその制度なのかの一文を添える。
 */
export const WORK_STYLE_ITEMS: WorkStyleItem[] = [
  {
    number: "01",
    title: "フルリモート可",
    description: "出社は任意。オフィスは月1回の全社会議のためだけに存在します。住む場所で働き方を制限しません。",
  },
  {
    number: "02",
    title: "コアタイムなし",
    description: "生活の順番を会社が決めることはありません。成果に対する合意さえあれば、働く時間は各自に委ねています。",
  },
  {
    number: "03",
    title: "成果ベースの評価",
    description: "半期ごとの1on1で、行動と結果を本人と上長が一緒に言語化します。在席時間は評価指標に含みません。",
  },
  {
    number: "04",
    title: "学習支援 上限なし",
    description: "書籍代・カンファレンス参加費・資格取得費は上限を設けず全額会社負担です。申請フローは1営業日で完了します。",
  },
  {
    number: "05",
    title: "副業OK",
    description: "本業に支障がない範囲で、副業を制限していません。社外での経験がプロダクトに還元されると考えています。",
  },
  {
    number: "06",
    title: "有給取得率92%",
    description: "「言い出しにくい」を個人の努力に頼らず、取得予定を四半期の初めに宣言する仕組みで解決しています。",
  },
];
