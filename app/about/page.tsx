import Link from "next/link";

export default function AboutPage() {
  return <main className="article-page"><header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク</Link><Link href="/">← ホームへ</Link></header><article className="prose shell">
    <p className="eyebrow">ABOUT</p><h1>ワクツクについて</h1>
    <p className="intro">仕事道具を選ぶときに必要な仕様、互換性、価格、向いている条件を、公式情報にもとづいて整理するメディアです。</p>
    <h2>編集方針</h2><ul><li>未使用の商品を使用済み・実機検証済みとは表現しません。</li><li>公開記事の事実確認には、メーカー、サービス運営元、規格団体、公的機関の情報を使います。</li><li>価格、在庫、キャンペーン、仕様は変わるため、購入・申込前にリンク先の最新情報をご確認ください。</li><li>広告を含む記事では、記事冒頭に広告であることを表示します。</li></ul>
    <h2>運営</h2><p>運営名: ワクツク</p><p>お問い合わせ: <a className="text-link" href="mailto:wakutsuku.lab@gmail.com">wakutsuku.lab@gmail.com</a></p>
  </article></main>;
}
