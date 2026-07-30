import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { affiliateOffers, articleBySlug, articles } from "../article-data";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) return {};
  return {
    title: `${article.title}｜ワクツク`,
    description: article.conclusion,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: { title: article.title, description: article.conclusion, type: "article", images: ["/og.png"] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug.get(slug);
  if (!article) notFound();
  const related = articles.filter((candidate) => candidate.slug !== slug).slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.conclusion,
    datePublished: "2026-07-30",
    dateModified: "2026-07-30",
    author: { "@type": "Organization", name: "ワクツク" },
    publisher: { "@type": "Organization", name: "ワクツク" },
    mainEntityOfPage: `https://wakutsuku-lab.cnatgpt.chatgpt.site/articles/${slug}`,
  };

  return <main className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク</Link><Link href="/#articles">← 記事一覧へ</Link></header>
    <article className="prose shell">
      <p className="eyebrow">MOBILE MONITOR / 2026.07.30</p>
      <h1>{article.title}</h1>
      <p className="disclosure"><strong>広告</strong>　本記事にはアフィリエイトリンクが含まれます。価格・在庫・仕様はリンク先で最新情報をご確認ください。</p>
      <p className="intro">{article.conclusion}</p>
      <a className="button" href={affiliateOffers[0].url} rel="sponsored nofollow">標準仕様の候補を楽天で確認 ↗</a>
      <h2>購入前に確認する3項目</h2>
      <div className="check-list">{article.checks.map((check, index) => <section key={check.heading}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{check.heading}</h3><p>{check.body}</p></div></section>)}</div>
      <h2>この条件なら急いで買わない</h2>
      <ul>{article.avoid.map((item) => <li key={item}>{item}</li>)}</ul>
      <h2>候補3製品の選び分け</h2>
      <div className="product-grid">{affiliateOffers.map((offer) => <section key={offer.name}><span>{offer.label}</span><h3>{offer.name}</h3><p>{offer.condition}</p><a href={offer.url} rel="sponsored nofollow">価格と最新仕様を確認 ↗</a></section>)}</div>
      <h2>最終確認</h2>
      <p>購入前に、接続するPCのメーカー公式仕様と、商品の販売ページ・公式説明書を照合してください。端子の形だけでは映像出力や給電の可否を判断できません。</p>
      <a className="button" href={affiliateOffers[0].url} rel="sponsored nofollow">第一候補の価格と最新仕様を確認 ↗</a>
      {article.sources?.length ? <><h2>公式情報</h2><ul>{article.sources.map((source) => <li key={source.url}><a className="text-link" href={source.url} rel="noopener noreferrer">{source.label} ↗</a></li>)}</ul></> : null}
      <h2>関連記事</h2><ul>{related.map((item) => <li key={item.slug}><Link className="text-link" href={`/articles/${item.slug}`}>{item.title}</Link></li>)}</ul>
    </article>
    <footer><div className="shell footer-grid"><div><p className="footer-brand">WAKUTSUKU LAB</p><p>選ぶ条件を、わかりやすく。</p></div><div><p className="footer-label">NOTICE</p><p>当サイトはアフィリエイト広告を利用しています。</p></div></div></footer>
  </main>;
}
