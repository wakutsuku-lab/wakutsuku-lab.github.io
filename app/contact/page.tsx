import Link from "next/link";

export default function ContactPage() {
  return <main className="article-page"><header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク</Link><Link href="/">← ホームへ</Link></header><article className="prose shell">
    <p className="eyebrow">CONTACT</p><h1>お問い合わせ</h1><p className="intro">記事内容の訂正、掲載情報、その他のお問い合わせはメールでご連絡ください。</p>
    <p><a className="button" href="mailto:wakutsuku.lab@gmail.com">メールを作成する</a></p>
    <p>認証情報、パスワード、クレジットカード番号、本人確認書類などの秘密情報は送信しないでください。</p>
  </article></main>;
}
