import Link from "next/link";

export default function AdvertisingPolicyPage() {
  return <main className="article-page"><header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク</Link><Link href="/">← ホームへ</Link></header><article className="prose shell">
    <p className="eyebrow">ADVERTISING POLICY</p><h1>広告・アフィリエイト方針</h1>
    <p className="intro">当サイトはアフィリエイト広告を利用します。読者が当サイト経由で商品を購入・サービスへ申し込んだ場合、当サイトが紹介料を受け取ることがあります。</p>
    <h2>広告表示</h2><p>広告リンクを含む記事では、記事の冒頭に「広告」またはアフィリエイトリンクを含む旨を表示します。広告であることを隠した掲載は行いません。</p>
    <h2>記事の判断基準</h2><p>報酬の有無だけで掲載内容を決めず、公式に確認できる仕様、利用条件、制約をもとに記事を作成します。未使用の商品について使用経験を装う表現は行いません。</p>
    <h2>購入・契約</h2><p>価格、在庫、成果条件、契約条件はリンク先で更新されます。購入・申込・解約に関する最終判断と手続きは、リンク先の販売者・サービス提供者との間で行われます。</p>
    <h2>参加プログラム</h2><p>楽天アフィリエイトを利用しています。Amazonアソシエイト等は参加承認後、各プログラムが指定する表示を追加します。未参加のプログラムを参加済みとは表示しません。</p>
  </article></main>;
}
