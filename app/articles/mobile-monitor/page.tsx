import Link from "next/link";

const products = [
  {label:"価格と基本仕様",name:"EVICIV G1 15.6型",body:"FHD、非光沢IPS、657g、自立スタンド、USB-C、mini HDMI。",url:"https://hb.afl.rakuten.co.jp/ichiba/56267716.35ae8522.56267717.6c98f125/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpuchirabbit%2F1-monitor-b-m156b15%2F"},
  {label:"軽さとタッチ",name:"kksmart CT-1 15.6型",body:"FHD、非光沢IPS、590g、自立スタンド、タッチ、USB-C。",url:"https://hb.afl.rakuten.co.jp/ichiba/56267772.35a9c187.56267773.08236aef/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fiikakakustore%2Fx0010yt551%2F"},
  {label:"販売窓口を重視",name:"サンワダイレクト DP-06",body:"15.6型、非光沢、自立スタンド、タッチ、USB-C、HDMI。",url:"https://hb.afl.rakuten.co.jp/ichiba/562677e4.510633e4.562677e5.45f47b91/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanwadirect%2Fdp-06%2F"},
];
const checks = [
  ["PCのUSB-C端子は映像を出せるか","USB-Cは端子の形であり、すべてが映像出力に対応するわけではありません。PCメーカーの仕様でDisplayPort Alt Mode、Thunderbolt、USB4の映像出力対応を確認します。"],
  ["ケーブル一本で給電まで足りるか","映像が出ても給電能力が足りない場合があります。付属ケーブル、必要電力、別電源入力の有無を販売ページと説明書で確認しましょう。"],
  ["持ち運ぶなら付属品込みで考える","保護カバー、スタンド、ケーブル、ACアダプターも荷物になります。バッグの内寸とモニターの外形寸法も照合してください。"],
  ["カバー式か自立スタンド式か","薄さを優先するならカバー式、設置と角度調整を重視するなら自立スタンド式が有力です。縦置きの可否も確認します。"],
  ["保証と返品条件を確認する","保証期間だけでなく、初期不良の連絡期限、返品条件、ドット欠けの扱い、国内窓口の有無まで確認してください。"],
];
export default function Article(){return <main className="article-page">
  <header className="site-header shell"><Link className="brand" href="/"><span className="brand-mark">W</span>ワクツク研究所</Link><Link href="/">← ホームへ</Link></header>
  <article className="prose shell"><p className="eyebrow">WORK TOOLS / 2026.07.29</p><h1>仕事用モバイルモニターの選び方｜買う前の5分チェック</h1>
    <p className="disclosure"><strong>広告</strong>　本記事にはアフィリエイトリンクが含まれます。価格・在庫・仕様は販売ページで最新情報をご確認ください。</p>
    <p className="intro">先に結論です。仕事用なら「15.6型前後・FHD・IPS・自立スタンド・USB-C映像入力」から選べば、大外しは減らせます。ただし「USB-Cがある＝ケーブル一本で映る」は勘違い。ここを見落とすと、届いた日に詰みます。</p>
    <h2>候補3製品の比較</h2><p>価格は2026年7月29日の確認値です。筆者による実機比較ではなく、商品ページに掲載された仕様を整理しています。</p>
    <div className="product-grid">{products.map(p=><section key={p.name}><span>{p.label}</span><h3>{p.name}</h3><p>{p.body}</p><a href={p.url} rel="sponsored nofollow">楽天で候補を確認 ↗</a></section>)}</div>
    <h2>買う前の5分チェック</h2><div className="check-list">{checks.map(([title,body],i)=><section key={title}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{title}</h3><p>{body}</p></div></section>)}</div>
    <h2>買わない方がよい人</h2><ul><li>同じ机でしか使わず、24型以上を置く場所がある</li><li>PCの端子仕様を確認できず、変換アダプターも使いたくない</li><li>厳密な色精度が必要だが、色域や校正の実測情報がない</li><li>現在の一画面でも困っておらず、荷物を増やしたくない</li></ul>
    <h2>まとめ</h2><p>ランキング順位より接続互換性が先です。映像出力、給電、付属品込み重量、スタンド、保証の5点を確認すれば、候補を大きく絞れます。購入前に必ずリンク先で最新情報をご確認ください。</p>
  </article><footer><div className="shell footer-grid"><div><p className="footer-brand">WAKUTSUKU LAB</p><p>選ぶ条件を、わかりやすく。</p></div><div><p className="footer-label">CONTACT</p><a href="mailto:wakutsuku.lab@gmail.com">wakutsuku.lab@gmail.com</a></div></div></footer>
</main>}
