export type Article = {
  slug: string;
  title: string;
  conclusion: string;
  checks: { heading: string; body: string }[];
  avoid: string[];
  publishedAt?: string;
  sources?: { label: string; url: string }[];
};

export const affiliateOffers = [
  { label: "標準仕様から選ぶ", name: "EVICIV G1 15.6型", condition: "FHD・非光沢IPS・自立スタンドを基準に比較したい人向け", url: "https://hb.afl.rakuten.co.jp/ichiba/56267716.35ae8522.56267717.6c98f125/_RTLink139613?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fpuchirabbit%2F1-monitor-b-m156b15%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" },
  { label: "軽さとタッチで選ぶ", name: "kksmart CT-1 15.6型", condition: "掲載仕様の590gとタッチ対応を優先して比較したい人向け", url: "https://hb.afl.rakuten.co.jp/ichiba/56267772.35a9c187.56267773.08236aef/_RTLink139613?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fiikakakustore%2Fx0010yt551%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" },
  { label: "販売窓口で選ぶ", name: "サンワダイレクト DP-06", condition: "国内メーカー直販窓口とHDMI入力を重視して比較したい人向け", url: "https://hb.afl.rakuten.co.jp/ichiba/562677e4.510633e4.562677e5.45f47b91/_RTLink139613?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsanwadirect%2Fdp-06%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9" },
];

export const articles: Article[] = [
  {
    slug: "mobile-monitor-windows-setup",
    title: "Windowsでモバイルモニターを設定する方法｜拡張・配置・検出",
    conclusion: "接続後はWindowsの「設定→システム→ディスプレイ」で画面を識別し、実際の机と同じ並びへ配置します。作業領域を増やすなら、Windowsキー+Pで「拡張」を選びます。",
    checks: [
      { heading: "画面を識別して並べる", body: "ディスプレイ設定の「識別」で番号を確認し、画面の配置をドラッグして机上の左右関係と合わせます。" },
      { heading: "複製か拡張か", body: "同じ内容を映す場合は複製、別々のアプリを表示する場合は拡張を選びます。Windowsキー+Pから切り替えられます。" },
      { heading: "検出と解像度", body: "表示されない場合は「複数のディスプレイ」の検出を試し、認識後に各画面の推奨解像度と拡大率を確認します。" },
    ],
    avoid: ["勤務先PCで外部画面や設定変更が禁止されている", "接続前の互換性をまだ確認していない"],
    sources: [{ label: "Microsoft: Windowsで複数のモニターを使用する方法", url: "https://support.microsoft.com/ja-JP/Windows/Hardware/Display-Graphics/how-to-use-multiple-monitors-in-windows" }],
  },
  {
    slug: "mobile-monitor-mac-setup",
    title: "Macでモバイルモニターを使う前の確認と設定",
    conclusion: "Macではモデルごとに外部ディスプレイの対応台数が異なります。接続前に技術仕様の「ディスプレイのサポート」を確認し、正しいポート・ケーブルで接続してから配置と拡張・ミラーリングを設定します。",
    checks: [
      { heading: "モデル別の対応台数", body: "Appleメニューのシステム情報から正確なモデルを特定し、Apple公式技術仕様で外部ディスプレイ対応台数を確認します。" },
      { heading: "ポートとケーブル", body: "Thunderbolt、USB-C、HDMIは外観が似る場合があります。Macとモニターの双方に合う映像対応ケーブルを使います。" },
      { heading: "配置と表示方法", body: "システム設定の「ディスプレイ」で配置、解像度、拡張またはミラーリングを選びます。" },
    ],
    avoid: ["Macのモデルと対応台数を確認できない", "必要なアダプターを増やしたくない"],
    sources: [
      { label: "Apple: Macで外部ディスプレイを接続する", url: "https://support.apple.com/ja-jp/guide/mac-help/-mchl7c7ebe08/mac" },
      { label: "Apple: Macにディスプレイを接続する", url: "https://support.apple.com/ja-jp/102555" },
    ],
  },
  {
    slug: "mobile-monitor-needed",
    title: "モバイルモニターはいらない？買う価値が出る条件を整理",
    conclusion: "常設できる大画面があり、外へ持ち出さないならモバイルモニターを急いで買う必要はありません。一方、自宅と外出先の両方で二画面を使い、画面切替の時間を減らしたい人には候補になります。",
    checks: [
      { heading: "移動先でも二画面が必要か", body: "出張、共有オフィス、自宅内移動など、常設モニターを使えない場所で二画面が必要かを確認します。" },
      { heading: "表示を分ける用途があるか", body: "会議と資料、表計算とブラウザーなど、同時表示したい具体的な組み合わせがある場合に価値が出ます。" },
      { heading: "据え置き型より合うか", body: "同じ机だけで使うなら、より大きい据え置きモニターの価格・作業領域・安定性とも比較します。" },
    ],
    avoid: ["現在の一画面で不便がない", "外へ持ち出さず据え置きモニターを置ける", "ケーブルや機器を増やしたくない"],
  },
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
  {
    slug: "mobile-monitor-vs-desktop",
    publishedAt: "2026-08-03",
    title: "モバイルモニターと据え置きモニターの違い｜机と移動頻度で選ぶ",
    conclusion: "同じ机だけで使うなら大きく安定した据え置き型、片付けや持ち運びが必要ならモバイル型が候補です。先に使用場所と移動頻度を決め、画面サイズより設置条件から比較します。",
    checks: [
      { heading: "使用場所を一つに決める", body: "毎日同じ机で使うのか、自宅内で片付けるのか、外出先へ持ち出すのかを決めます。移動しないなら携帯性へ費用をかける必要性は下がります。" },
      { heading: "机の幅と奥行きを測る", body: "ノートPCと並べた幅だけでなく、スタンドを開いた奥行き、ケーブルの向き、使わない時の収納場所まで確認します。" },
      { heading: "二画面の使い方を決める", body: "Windowsでは複製と拡張を選べます。資料と会議画面など別々の内容を表示するなら、拡張時の配置と見やすさを基準にします。" },
    ],
    avoid: ["常設できる机と大きい画面を置く余裕がある", "外出先で二画面を使わない", "毎回の設置とケーブル接続を避けたい"],
    sources: [{ label: "Microsoft: Windowsで複数のモニターを使用する方法", url: "https://support.microsoft.com/ja-JP/Windows/Hardware/Display-Graphics/how-to-use-multiple-monitors-in-windows" }],
  },
  {
    slug: "mobile-monitor-dual-display",
    publishedAt: "2026-08-03",
    title: "モバイルモニターを2台つなぐ前の確認｜PCの出力上限と給電",
    conclusion: "端子が二つあっても、外部画面を二台同時に出せるとは限りません。PCの正確な型番から対応台数と解像度を確認し、各画面の映像経路と給電を一台ずつ組み立てます。",
    checks: [
      { heading: "外部画面の対応台数", body: "PCメーカーの技術仕様で、外部ディスプレイの対応台数、解像度、リフレッシュレートを確認します。シリーズ名ではなく正確な型番で照合します。" },
      { heading: "映像経路を分ける", body: "USB-C、Thunderbolt、USB4、HDMIのどこから映像を出すかを一台ずつ決めます。ドックを使う場合も、ドックとPC双方の表示上限を確認します。" },
      { heading: "二台分の給電", body: "HDMI接続では別給電が必要な場合があります。二台のモニター、PC、ドックへ必要な電力を同時に供給できるかを公式仕様で確認します。" },
    ],
    avoid: ["PCの型番と外部画面の対応台数を確認できない", "勤務先PCでドックや複数画面の利用許可がない", "電源やケーブルを増やしたくない"],
    sources: [
      { label: "Microsoft: Windowsで複数のモニターを使用する方法", url: "https://support.microsoft.com/ja-JP/Windows/Hardware/Display-Graphics/how-to-use-multiple-monitors-in-windows" },
      { label: "Apple: Macにディスプレイを接続する", url: "https://support.apple.com/ja-jp/102555" },
    ],
  },
  {
    slug: "mobile-monitor-ipad",
    publishedAt: "2026-08-03",
    title: "iPadを外部モニターにつなぐ前の確認｜USB-C・表示方法・給電",
    conclusion: "iPadはモデルと接続方法によって、画面のミラーリング、対応アプリのセカンドスクリーン、拡張表示の可否が異なります。モデルを特定し、Apple公式の対応表示と必要なケーブルを先に確認します。",
    checks: [
      { heading: "iPadのモデルと端子", body: "USB-C搭載モデルか、別のアダプターが必要なモデルかを確認します。同じiPad名でも世代によって端子と表示機能が異なります。" },
      { heading: "表示方法を確認", body: "接続時にミラーリングになるか、対応アプリのセカンドスクリーンになるか、拡張表示へ対応するかをApple公式情報で確認します。" },
      { heading: "ケーブルと給電", body: "高解像度表示には対応帯域を満たす映像用ケーブルが必要です。モニター側の入力と電源条件も照合し、充電用ケーブルだけで判断しません。" },
    ],
    avoid: ["iPadのモデルを特定できない", "画面を増やして何を表示するか決まっていない", "アダプターや補助電源を持ち歩きたくない"],
    sources: [
      { label: "Apple: iPadのUSB-Cポートで充電・接続する", url: "https://support.apple.com/ja-jp/108894" },
      { label: "Apple: ケーブルを使ってiPadをディスプレイに接続する", url: "https://support.apple.com/ja-jp/guide/ipad/-ipadf1276cde/ipados" },
    ],
  },
];

export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
