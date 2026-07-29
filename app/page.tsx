/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return <main>
    <header className="site-header shell"><a className="brand" href="#top"><span className="brand-mark">W</span>ワクツク研究所</a><nav><a href="#about">研究方針</a><a href="#articles">記事</a><a href="#contact">連絡先</a></nav></header>
    <section className="hero" id="top"><img src="/wakutsuku-hero.png" alt="仕事道具を選ぶためのデスク風景"/><div className="hero-copy shell"><p className="eyebrow">WORKSTYLE × TOOLS</p><h1>仕事道具を選ぶ条件が、<br/>すぐわかる。</h1><p className="lead">仕様、互換性、価格、向いている用途。公式情報をもとに、買う前に確認したい条件をわかりやすく整理します。</p><Link className="button" href="/articles/mobile-monitor">モバイルモニターの選び方　↗</Link></div></section>
    <section className="manifesto shell" id="about"><p className="section-number">01 / POLICY</p><div className="policy"><h2>便利そう、で<br/>終わらせない。</h2><p>仕様、価格、相性、向いている人。買う前・使う前に知りたいことを整理し、判断できる材料として公開します。</p></div><div className="principles"><article><strong>01</strong><h3>実用から考える</h3><p>機能の多さではなく、日々の仕事がどう変わるかを見ます。</p></article><article><strong>02</strong><h3>条件を明記する</h3><p>検証日や情報源を示し、推測と確認済みの事実を分けます。</p></article><article><strong>03</strong><h3>合わない人も伝える</h3><p>おすすめだけでなく、買わない方がよい条件も掲載します。</p></article></div></section>
    <section className="articles" id="articles"><div className="shell"><div className="section-heading"><div><p className="section-number">02 / ARTICLES</p><h2>モバイルモニター特集</h2></div><span>10 GUIDES</span></div>{[
      ["/articles/mobile-monitor","仕事用モバイルモニターの選び方","接続、重さ、スタンド、保証を5分で確認"],
      ["/articles/mobile-monitor-usbc","USB-Cで映らない原因","端子の形だけでは分からない映像出力と給電"],
      ["/articles/mobile-monitor-size","14型と15.6型の選び方","移動頻度、バッグ、作業領域で比較"],
      ["/articles/mobile-monitor-weight","軽いモデルの選び方","付属品込みの総重量で比較"],
      ["/articles/mobile-monitor-stand","自立スタンドとカバー式","設置、角度、縦置き条件を確認"],
      ["/articles/mobile-monitor-hdmi","HDMI接続の注意点","映像ケーブルとは別に必要な電源を確認"],
      ["/articles/mobile-monitor-touch","タッチ対応の選び方","対応OS、信号、ケーブルを確認"],
      ["/articles/mobile-monitor-vertical","縦置きで使う条件","スタンド、端子、画面回転を確認"],
      ["/articles/mobile-monitor-remote-work","在宅勤務を二画面にする","机、用途、会社PCの条件で選ぶ"],
      ["/articles/mobile-monitor-travel","出張用の選び方","総重量、収納、現地の接続で比較"],
    ].map(([href,title,description], index)=><Link className="article-card" href={href} key={href}><div className="article-visual"><span>BUYING GUIDE</span><b>{index+1}</b><small>MOBILE MONITOR</small></div><div className="article-copy"><p className="tags">#モバイルモニター　#仕事道具</p><h3>{title}</h3><p>{description}</p><span className="text-link">記事を読む →</span></div></Link>)}</div></section>
    <footer id="contact"><div className="shell footer-grid"><div><p className="footer-brand">WAKUTSUKU LAB</p><p>選ぶ条件を、わかりやすく。</p></div><div><p className="footer-label">CONTACT</p><a href="mailto:wakutsuku.lab@gmail.com">wakutsuku.lab@gmail.com</a></div><div><p className="footer-label">NOTICE</p><p>当サイトはアフィリエイト広告を利用しています。</p></div></div><div className="shell copyright">© 2026 WAKUTSUKU LAB</div></footer>
  </main>;
}
