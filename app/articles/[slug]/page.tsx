import Link from "next/link";
import { notFound } from "next/navigation";
import { affiliateUrl, articleBySlug, articles } from "../article-data";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();

  return <main className="article-page">
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク研究所</Link><Link href="/#articles">← 記事一覧へ</Link></header>
    <article className="prose shell">
      <p className="eyebrow">MOBILE MONITOR / 2026.07.30</p>
      <h1>{article.title}</h1>
      <p className="disclosure"><strong>広告</strong>　本記事にはアフィリエイトリンクが含まれます。価格・在庫・仕様はリンク先で最新情報をご確認ください。</p>
      <p className="intro">{article.conclusion}</p>
      <a className="button" href={affiliateUrl} rel="sponsored nofollow">15.6型の候補を楽天で確認 ↗</a>
      <h2>購入前に確認する3項目</h2>
      <div className="check-list">{article.checks.map((check, index) => <section key={check.heading}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{check.heading}</h3><p>{check.body}</p></div></section>)}</div>
      <h2>この条件なら急いで買わない</h2>
      <ul>{article.avoid.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>最終確認</h2>
      <p>購入前に、接続するPCのメーカー公式仕様と、商品の販売ページ・公式説明書を照合してください。端子の形だけでは映像出力や給電の可否を判断できません。</p>
      <a className="button" href={affiliateUrl} rel="sponsored nofollow">価格と最新仕様を確認 ↗</a>
      {article.sources?.length ? <><h2>公式情報</h2><ul>{article.sources.map((source) => <li key={source.url}><a className="text-link" href={source.url} rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></> : null}
    </article>
    <footer><div className="shell footer-grid"><div><p className="footer-brand">WAKUTSUKU LAB</p><p>選ぶ条件を、わかりやすく。</p></div><div><p className="footer-label">NOTICE</p><p>当サイトはアフィリエイト広告を利用しています。</p></div></div></footer>
  </main>;
}
