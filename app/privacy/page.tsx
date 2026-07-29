import Link from "next/link";

export default function PrivacyPage() {
  return <main className="article-page"><header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク研究所</Link><Link href="/">← ホームへ</Link></header><article className="prose shell">
    <p className="eyebrow">PRIVACY</p><h1>プライバシーポリシー</h1><p>制定日: 2026年7月30日</p>
    <h2>取得する情報</h2><p>現在、当サイト独自の会員登録、コメント、問い合わせフォームは設置していません。メールでお問い合わせいただいた場合は、返信に必要なメールアドレスと本文を取り扱います。</p>
    <h2>アクセス解析</h2><p>現時点ではアクセス解析サービスを接続していません。導入時は、利用するサービス、取得項目、Cookie等の利用、拒否方法を本ページへ追記します。</p>
    <h2>アフィリエイトリンク</h2><p>外部の販売サイトへ移動した後の情報取扱いは、移動先のプライバシーポリシーが適用されます。リンク識別子等により、紹介経由の購入・申込が集計される場合があります。</p>
    <h2>利用目的</h2><p>お問い合わせへの回答、不正利用の防止、サイト内容と導線の改善に必要な範囲で情報を利用します。法令に基づく場合を除き、目的外に利用しません。</p>
    <h2>お問い合わせ</h2><p><a className="text-link" href="mailto:wakutsuku.lab@gmail.com">wakutsuku.lab@gmail.com</a></p>
  </article></main>;
}
