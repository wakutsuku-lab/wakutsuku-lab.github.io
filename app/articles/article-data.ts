export type Article = {
  slug: string;
  title: string;
  conclusion: string;
  checks: { heading: string; body: string }[];
  avoid: string[];
  sources?: { label: string; url: string }[];
};

export const affiliateUrl = "https://hb.afl.rakuten.co.jp/ichiba/56267716.35ae8522.56267717.6c98f125/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpuchirabbit%2F1-monitor-b-m156b15%2F";

export const articles: Article[] = [
  {
    slug: "mobile-monitor-laptop-compatibility",
    title: "ノートPCとモバイルモニターの互換性｜型番から確認する方法",
    conclusion: "互換性はUSB-C端子の有無だけでは決まりません。ノートPCの正確な型番を確認し、メーカー公式仕様の映像出力、同時接続可能台数、対応解像度と、モニター側の入力・電源条件を照合します。",
    checks: [
      { heading: "PCの正確な型番", body: "同じシリーズ名でも世代や構成で端子仕様が異なる場合があります。本体表示やOSのシステム情報から型番を特定します。" },
      { heading: "映像出力と台数", body: "メーカー公式仕様でDisplay SupportやVideo Support、DisplayPort Alt Mode、Thunderbolt、HDMIの記載と、外部画面の対応台数を確認します。" },
      { heading: "解像度と給電", body: "PCが出せる解像度・リフレッシュレートと、モニターの入力・必要電力を照合します。端子の見た目だけでは判断しません。" },
    ],
    avoid: ["PCの型番を特定できない", "勤務先のPCで周辺機器利用ルールを確認できない"],
    sources: [
      { label: "VESA: DisplayPort over USB-C FAQ", url: "https://www.displayport.org/faq/" },
      { label: "Apple: Connect external displays with your Mac", url: "https://support.apple.com/guide/mac-help/connect-an-external-display-mchl7c7ebe08/mac" },
    ],
  },
  {
    slug: "mobile-monitor-cable-guide",
    title: "モバイルモニター用ケーブルの選び方｜USB-CとHDMIを整理",
    conclusion: "USB-Cケーブルは外見が同じでも、映像・データ・給電の対応が同じとは限りません。製品付属ケーブルを優先し、交換時はモニターとPCが要求する映像方式・電力・端子をすべて満たすものを選びます。",
    checks: [
      { heading: "映像を運べるか", body: "USB-C接続ではDisplayPort Alt Mode等に対応するPC・モニター・ケーブルの組み合わせが必要です。充電専用ケーブルでは映像が出ません。" },
      { heading: "必要電力を満たすか", body: "映像が出ても明るさ変更や安定動作に必要な給電が足りない場合があります。公式説明書の必要電力を確認します。" },
      { heading: "HDMIの端子サイズ", body: "標準HDMI、mini HDMIなど、PCとモニター両側に合う端子を確認します。HDMI接続では別途USB給電が必要な場合があります。" },
    ],
    avoid: ["仕様が不明な手持ちケーブルだけで済ませたい", "付属ケーブルを持ち運べない"],
    sources: [
      { label: "VESA: DisplayPort Alt Mode for USB-C", url: "https://www.displayport.org/pr/vesa-brings-displayport-new-usb-type-c-connector/" },
      { label: "Apple: Connect displays to your Mac", url: "https://support.apple.com/102555" },
    ],
  },
  {
    slug: "mobile-monitor-troubleshooting",
    title: "モバイルモニターが映らない時の確認順｜Windows・Mac共通",
    conclusion: "映らない時は、電源、入力端子、ケーブル、PCの表示設定の順に切り分けます。最初から製品故障と決めず、付属ケーブルと別ポートで最小構成を試してください。",
    checks: [
      { heading: "電源と物理接続", body: "モニターの電源、選択中の入力、ケーブルの差し込みを確認します。HDMI接続なら別給電の要否も確認します。" },
      { heading: "表示モード", body: "WindowsではWindowsキー+Pで複製・拡張を確認します。Macではシステム設定のディスプレイを確認します。" },
      { heading: "最小構成で切り分け", body: "ドックや変換器を外し、付属ケーブルでPCへ直接接続します。別ケーブル・別ポート・別PCで試せる場合は原因範囲を絞れます。" },
    ],
    avoid: ["焦げ臭い、異常発熱、破損がある状態で再接続する", "勤務先PCの設定を許可なく変更する"],
    sources: [
      { label: "Microsoft: Troubleshooting blank screens in Windows", url: "https://support.microsoft.com/windows/troubleshooting-blank-screens-in-windows-51ef7b96-47cb-b454-fcab-fac643784457" },
      { label: "Apple: Connect displays to your Mac", url: "https://support.apple.com/102555" },
    ],
  },
  {
    slug: "mobile-monitor-usbc",
    title: "USB-Cでモバイルモニターが映らない原因｜購入前に見る3項目",
    conclusion: "USB-C端子があっても、映像出力に対応しているとは限りません。PCの仕様表でDisplayPort Alt Mode、Thunderbolt、USB4の映像出力対応を確認し、必要電力とケーブル仕様まで合わせるのが先です。",
    checks: [
      { heading: "PC側の映像出力", body: "端子の形では判断せず、PCメーカーの公式仕様・説明書で映像出力対応を確認します。" },
      { heading: "モニター側の入力", body: "USB-Cの映像入力に対応する端子と、給電専用端子を取り違えないよう公式説明書で確認します。" },
      { heading: "ケーブルと給電", body: "充電専用ケーブルでは映像を運べません。付属ケーブルと必要電力、補助電源の条件を確認します。" },
    ],
    avoid: ["PCの型番や端子仕様を確認できない", "変換アダプターや補助電源を使いたくない"],
  },
  {
    slug: "mobile-monitor-size",
    title: "モバイルモニターは14型と15.6型のどちら？用途別の選び方",
    conclusion: "移動頻度とバッグ寸法を優先するなら14型前後、表計算や資料を広く表示したいなら15.6型前後が候補です。画面サイズだけでなく、本体外形寸法と重量を確認してください。",
    checks: [
      { heading: "持ち運び", body: "バッグの内寸と本体外形寸法を照合し、ケーブルや電源を含めた荷物で比べます。" },
      { heading: "作業領域", body: "同じ解像度でも画面サイズで文字の見え方が変わります。OSの拡大率も含めて考えます。" },
      { heading: "設置面積", body: "本体幅だけでなく、スタンドを開いた奥行きが机に収まるか確認します。" },
    ],
    avoid: ["常設できる24型以上のモニターを置ける", "荷物を少しでも増やしたくない"],
  },
  {
    slug: "mobile-monitor-weight",
    title: "軽いモバイルモニターの選び方｜本体重量だけで決めない",
    conclusion: "持ち運びでは本体重量だけでなく、カバー、スタンド、ケーブル、ACアダプターを含む総重量が重要です。販売ページの重量が何を含む数値か確認してください。",
    checks: [
      { heading: "重量の対象", body: "本体のみか付属品込みかを、公式仕様または説明書で確認します。" },
      { heading: "保護方法", body: "薄型でも保護ケースが別途必要なら、厚さと重量が増えます。" },
      { heading: "移動頻度", body: "毎日持つ場合と月数回では、許容できる重量の優先度が変わります。" },
    ],
    avoid: ["据え置きでしか使わない", "軽さより画面の大きさや端子数を優先する"],
  },
  {
    slug: "mobile-monitor-stand",
    title: "自立スタンド式とカバー式モバイルモニターの違い",
    conclusion: "設置の速さと角度調整を重視するなら自立スタンド式、薄さと一体収納を重視するならカバー式が候補です。縦置き対応は製品ごとに確認が必要です。",
    checks: [
      { heading: "設置の安定性", body: "狭い机や柔らかい面で使うなら、スタンドの接地面と必要奥行きを確認します。" },
      { heading: "角度調整", body: "調整できる範囲は製品ごとに異なるため、公式仕様と説明書を見ます。" },
      { heading: "縦置き", body: "物理的に置けてもOS側の回転設定が必要です。公式な縦置き可否も確認します。" },
    ],
    avoid: ["常にモニターアームへ固定する", "設置面の奥行きを確保できない"],
  },
  {
    slug: "mobile-monitor-hdmi",
    title: "モバイルモニターをHDMI接続する方法｜電源を忘れない",
    conclusion: "HDMIは通常、映像信号を送ってもモニターへ十分な電力を供給しません。HDMIケーブルに加えて、USB給電やACアダプターが必要か公式説明書で確認してください。",
    checks: [
      { heading: "端子サイズ", body: "標準HDMI、mini HDMIなど、PCとモニター両側の端子に合うケーブルを選びます。" },
      { heading: "別電源", body: "必要な電力と給電端子を確認し、対応する電源を用意します。" },
      { heading: "付属品", body: "必要なHDMIケーブルや電源ケーブルが同梱されるか確認します。" },
    ],
    avoid: ["ケーブルを一本にまとめたい", "補助電源を持ち歩きたくない"],
  },
  {
    slug: "mobile-monitor-touch",
    title: "タッチ対応モバイルモニターを買う前の確認事項",
    conclusion: "タッチ対応は接続するだけで必ず使えるとは限りません。対応OS、タッチ信号用USB接続、給電条件、映像接続の組み合わせを公式仕様で確認してください。",
    checks: [
      { heading: "対応OS", body: "PCやスマートフォンのOSが公式な対応対象か確認します。" },
      { heading: "信号経路", body: "HDMIで映像を送る場合、タッチ操作用に別のUSB接続が必要なことがあります。" },
      { heading: "用途", body: "資料閲覧だけなら、タッチ非対応の軽量モデルの方が条件に合う場合があります。" },
    ],
    avoid: ["タッチ操作を使う具体的な場面がない", "対応OSや必要ケーブルを確認できない"],
  },
  {
    slug: "mobile-monitor-vertical",
    title: "モバイルモニターを縦置きで使う前に確認すること",
    conclusion: "縦置きには、安定して保持できるスタンドとOS側の画面回転設定が必要です。端子やケーブルが机と干渉しないかも確認してください。",
    checks: [
      { heading: "公式な設置対応", body: "縦置き対応の記載と、必要なスタンド・カバーを公式情報で確認します。" },
      { heading: "端子位置", body: "縦向きにしたとき下側へ来る端子とケーブルが机に当たらないか確認します。" },
      { heading: "表示回転", body: "OSのディスプレイ設定で回転できることを確認します。" },
    ],
    avoid: ["横長の表計算や動画視聴が中心", "安定した設置面を確保できない"],
  },
  {
    slug: "mobile-monitor-remote-work",
    title: "在宅勤務を二画面にするモバイルモニターの選び方",
    conclusion: "自宅と外出先を同じ機器で二画面化したい人にはモバイルモニターが候補です。自宅だけなら、より大きい据え置きモニターとも比較してください。",
    checks: [
      { heading: "作業内容", body: "会議画面と資料、表計算とブラウザーなど、二画面に分けたい組み合わせを先に決めます。" },
      { heading: "机の広さ", body: "ノートPCとモニターを並べた幅、スタンドの奥行き、ケーブルの取り回しを確認します。" },
      { heading: "接続互換性", body: "会社支給PCでは端子と周辺機器の利用ルールを確認します。" },
    ],
    avoid: ["自宅に据え置きモニターを常設できる", "勤務先が外部ディスプレイ接続を認めていない"],
  },
  {
    slug: "mobile-monitor-travel",
    title: "出張用モバイルモニターの選び方｜荷物と接続で比較",
    conclusion: "出張用は、本体だけの軽さより総重量、収納寸法、接続ケーブル数、補助電源の有無で選ぶと失敗を減らせます。宿泊先の机で使うならスタンドの奥行きも重要です。",
    checks: [
      { heading: "総重量", body: "保護ケース、ケーブル、電源を含めて移動時の重量を見積もります。" },
      { heading: "収納寸法", body: "バッグのPC収納部に本体とノートPCを一緒に収められるか測ります。" },
      { heading: "現地での接続", body: "補助電源が必要な場合は、コンセント数と電源アダプターも準備します。" },
    ],
    avoid: ["移動中の荷物を最小化したい", "短時間の作業しかせず二画面の必要性が低い"],
  },
];

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
