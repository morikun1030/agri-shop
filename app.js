// ============================================================
//  ★★★ ここを自分のIDに書き換えてください ★★★
// ============================================================

const AMAZON_ASSOCIATE_ID  = 'burichan0d-22';
//  確認方法: Amazon アソシエイト管理画面
//            → 上部メニュー「ツール」→「トラッキングID管理」
//  例: myfarm-22

const RAKUTEN_AFFILIATE_ID = '5140d37d.f8fb7eb4.5140d37e.429f963f';
//  確認方法: 楽天アフィリエイト管理画面
//            → 「リンク作成」→ 任意のバナーを選択 → 生成されたURLの
//               hb.afl.rakuten.co.jp/hgc/ の後ろの英数字部分
//  例: 1a2b3c4d.5e6f7a8b

// ============================================================
//  URL 生成
// ============================================================

function amazonUrl(keyword) {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}&tag=${AMAZON_ASSOCIATE_ID}`;
}

function rakutenUrl(keyword) {
  const dest = `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`;
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${encodeURIComponent(dest)}`;
}

// ============================================================
//  商品データ
// ============================================================

const products = [

  // ── 種 ───────────────────────────────────────────────────
  {
    id: 1, category: '種', emoji: '🍅',
    name: 'ミニトマト（こあまちゃん）',
    desc: '糖度が高く人気のミニトマト品種。プランターでもよく実る家庭菜園の定番。',
    season: '種まき: 3〜4月',
    keyword: 'ミニトマト こあまちゃん 種',
  },
  {
    id: 2, category: '種', emoji: '🥒',
    name: 'きゅうりの種（夏すずみ）',
    desc: 'べと病・うどんこ病に強い耐病性品種。たくさん収穫できる夏の定番品種。',
    season: '種まき: 4〜5月',
    keyword: 'きゅうり 夏すずみ 種',
  },
  {
    id: 3, category: '種', emoji: '🍆',
    name: 'ナスの種（千両二号）',
    desc: '光沢があり味のよい中長ナス。家庭菜園で最もよく栽培される代表品種。',
    season: '種まき: 2〜3月',
    keyword: 'ナス 千両二号 種',
  },
  {
    id: 4, category: '種', emoji: '🫑',
    name: 'ピーマンの種（京みどり）',
    desc: '肉厚で甘みがあり苦みが少ない。初心者でも育てやすく夏の収穫を楽しめる。',
    season: '種まき: 2〜3月',
    keyword: 'ピーマン 京みどり 種',
  },
  {
    id: 5, category: '種', emoji: '🥬',
    name: 'ホウレンソウの種（次郎丸）',
    desc: '葉が肉厚で甘みが強い定番品種。寒さに強く秋まきがとくにおすすめ。',
    season: '種まき: 3〜5月 / 9〜10月',
    keyword: 'ホウレンソウ 次郎丸 種',
  },
  {
    id: 6, category: '種', emoji: '🥗',
    name: 'コマツナの種',
    desc: '年間を通じて育てやすい万能葉物。プランター・地植えどちらでもOK。',
    season: '種まき: 通年（夏は高温注意）',
    keyword: 'コマツナ 種 家庭菜園',
  },
  {
    id: 7, category: '種', emoji: '🥕',
    name: 'にんじんの種（向陽二号）',
    desc: '甘みが強く発芽率が高い人気品種。短根タイプはプランター栽培にも向く。',
    season: '種まき: 3〜4月 / 7〜8月',
    keyword: 'にんじん 向陽二号 種',
  },
  {
    id: 8, category: '種', emoji: '🌿',
    name: 'バジルの種',
    desc: 'トマトのコンパニオンプランツとして最適。害虫忌避効果もある万能ハーブ。',
    season: '種まき: 4〜6月',
    keyword: 'バジル 種 ハーブ',
  },
  {
    id: 9, category: '種', emoji: '🧅',
    name: '玉ねぎの種（ネオアース）',
    desc: '貯蔵性が高く辛みが少ない人気品種。秋まきして翌春に収穫する定番野菜。',
    season: '種まき: 9〜10月',
    keyword: '玉ねぎ ネオアース 種',
  },
  {
    id: 10, category: '種', emoji: '🥦',
    name: 'ブロッコリーの種',
    desc: '栄養価が高く家庭菜園で人気。脇芽が次々出てきて長期間収穫を楽しめる。',
    season: '種まき: 7〜8月（秋作）',
    keyword: 'ブロッコリー 種 家庭菜園',
  },

  // ── 苗・球根 ─────────────────────────────────────────────
  {
    id: 11, category: '苗', emoji: '🍅',
    name: 'トマト 接ぎ木苗（大玉）',
    desc: '病害虫に強い接ぎ木苗。初心者も安心して育てられる家庭菜園の主役。',
    season: '定植: 4〜5月',
    keyword: 'トマト 接ぎ木苗 大玉',
  },
  {
    id: 12, category: '苗', emoji: '🥒',
    name: 'きゅうり 接ぎ木苗',
    desc: '連作障害に強い接ぎ木苗。支柱を立てて伸ばすと次々に収穫できる。',
    season: '定植: 5月',
    keyword: 'きゅうり 接ぎ木苗',
  },
  {
    id: 13, category: '苗', emoji: '🍆',
    name: 'ナス 接ぎ木苗',
    desc: '接ぎ木苗なら長期収穫が可能。秋ナスまで収穫できる長寿命タイプ。',
    season: '定植: 5月',
    keyword: 'ナス 接ぎ木苗',
  },
  {
    id: 14, category: '苗', emoji: '🍓',
    name: 'イチゴ苗（とちおとめ・女峰）',
    desc: '秋に植えて翌春に収穫。ランナーから増やせるのも家庭菜園の楽しみ。',
    season: '定植: 9〜11月',
    keyword: 'イチゴ 苗 家庭菜園',
  },
  {
    id: 15, category: '苗', emoji: '🥬',
    name: 'キャベツ・レタス 苗セット',
    desc: '春・秋の葉物野菜を手軽にスタート。ポット苗で定植しやすい。',
    season: '定植: 3〜4月 / 9〜10月',
    keyword: 'キャベツ レタス 苗 セット',
  },

  // ── 肥料 ─────────────────────────────────────────────────
  {
    id: 16, category: '肥料', emoji: '🌿',
    name: '有機配合肥料（野菜・果菜用）',
    desc: '有機成分が土を豊かにする元肥・追肥兼用タイプ。臭いが少なく扱いやすい。',
    season: '',
    keyword: '有機配合肥料 野菜用',
  },
  {
    id: 17, category: '肥料', emoji: '💧',
    name: 'ハイポネックス 液体肥料',
    desc: '水で薄めて使う速効性液肥。週1回の追肥で元気に育つ万能タイプ。',
    season: '',
    keyword: 'ハイポネックス 液体肥料 野菜',
  },
  {
    id: 18, category: '肥料', emoji: '🪨',
    name: '苦土石灰',
    desc: '酸性土壌を中和しマグネシウムも補給。植え付け2週間前に混ぜ込む基本資材。',
    season: '',
    keyword: '苦土石灰 家庭菜園',
  },
  {
    id: 19, category: '肥料', emoji: '🌱',
    name: '腐葉土（40L）',
    desc: '土をふかふかにして保水・排水性を改善。元肥として混ぜ込む土壌改良材。',
    season: '',
    keyword: '腐葉土 40L 家庭菜園',
  },
  {
    id: 20, category: '肥料', emoji: '🐛',
    name: 'ぼかし肥料（発酵有機肥料）',
    desc: '発酵済みで即効性もある有機肥料。土の微生物を活性化して健康な土作りに。',
    season: '',
    keyword: 'ぼかし肥料 有機 家庭菜園',
  },

  // ── 土・資材 ─────────────────────────────────────────────
  {
    id: 21, category: '資材', emoji: '🪴',
    name: '野菜用培養土（14L）',
    desc: '肥料配合済みですぐ使えるプランター向け培養土。開けてそのまま使える。',
    season: '',
    keyword: '野菜用培養土 プランター 14L',
  },
  {
    id: 22, category: '資材', emoji: '📦',
    name: '大型プランター（65cm以上）',
    desc: 'トマト・ナスなど根が深い野菜に。深さ30cm以上のものが安心で育ちがよい。',
    season: '',
    keyword: '大型プランター 野菜用 深型',
  },
  {
    id: 23, category: '資材', emoji: '🎋',
    name: '支柱セット（8本組）',
    desc: 'トマト・キュウリの誘引に必須。錆びにくいグラスファイバー製が長持ちでお得。',
    season: '',
    keyword: '支柱 セット 家庭菜園 8本',
  },
  {
    id: 24, category: '資材', emoji: '🕸️',
    name: '防虫ネット（目合い0.8〜1mm）',
    desc: 'アオムシ・アブラムシを物理的に防ぐ。農薬不使用で安心の基本的害虫対策。',
    season: '',
    keyword: '防虫ネット 家庭菜園 細目',
  },
  {
    id: 25, category: '資材', emoji: '🎍',
    name: 'マルチシート（黒マルチ）',
    desc: '雑草防止・地温上昇・水分蒸発防止の3役。夏野菜の栽培に欠かせないアイテム。',
    season: '',
    keyword: 'マルチシート 黒 家庭菜園',
  },
  {
    id: 26, category: '資材', emoji: '🪣',
    name: 'プランター受け皿セット',
    desc: 'ベランダ菜園に必須。余分な水を溜めて室内や廊下を汚さず清潔に管理できる。',
    season: '',
    keyword: 'プランター 受け皿 セット',
  },

  // ── 農具 ─────────────────────────────────────────────────
  {
    id: 27, category: '農具', emoji: '🔧',
    name: '移植ごてセット（3本組）',
    desc: '種まき・植え付けに必須の基本道具。握りやすいグリップで疲れにくい。',
    season: '',
    keyword: '移植ごて ミニスコップ セット',
  },
  {
    id: 28, category: '農具', emoji: '🚿',
    name: 'じょうろ（5L・シャワー付き）',
    desc: '細かいシャワーヘッドで苗を傷めず優しく水やり。バランスが取りやすい形状。',
    season: '',
    keyword: 'じょうろ 5L シャワー 野菜',
  },
  {
    id: 29, category: '農具', emoji: '🧤',
    name: '農作業用手袋（滑り止め付き）',
    desc: '通気性が良く汚れにくい。長時間の作業でも手が痛くならないフィット感。',
    season: '',
    keyword: '農作業手袋 滑り止め 薄手',
  },
  {
    id: 30, category: '農具', emoji: '✂️',
    name: '収穫用ハサミ（剪定ばさみ）',
    desc: 'トマトの脇芽摘み・収穫・剪定に。錆びにくいステンレス刃で切れ味長持ち。',
    season: '',
    keyword: '収穫ハサミ 剪定ばさみ 家庭菜園',
  },

  // ── 種（追加分） ──────────────────────────────────────────
  {
    id: 31, category: '種', emoji: '🫑',
    name: 'パプリカの種（カリフォルニアワンダー）',
    desc: '肉厚で甘みたっぷり。ピーマンより長い栽培期間が必要だが、収穫の喜びは格別。',
    season: '種まき: 2〜3月',
    keyword: 'パプリカ カリフォルニアワンダー 種',
  },
  {
    id: 32, category: '種', emoji: '🥝',
    name: 'ゴーヤの種（沖縄あばし）',
    desc: '緑のカーテンとしても人気。苦みが少なく食べやすい。グリーンカーテンに最適。',
    season: '種まき: 4〜5月',
    keyword: 'ゴーヤ 沖縄あばし 種',
  },
  {
    id: 33, category: '種', emoji: '🥬',
    name: 'ズッキーニの種',
    desc: '栽培しやすく多収穫。イタリア料理やソテーに活躍。大型になるので広い場所向き。',
    season: '種まき: 4〜5月',
    keyword: 'ズッキーニ 種 家庭菜園',
  },
  {
    id: 34, category: '種', emoji: '🌿',
    name: 'えだまめの種（湯あがり娘）',
    desc: '甘みが強く粒ぞろいの人気品種。採れたてを茹でるだけで絶品の夏の味覚。',
    season: '種まき: 4〜6月',
    keyword: 'えだまめ 湯あがり娘 種',
  },
  {
    id: 35, category: '種', emoji: '⭐',
    name: 'オクラの種（スターオブデイビッド）',
    desc: '星形の断面が美しい人気品種。高温に強く夏の暑さでも元気に育つ。',
    season: '種まき: 4〜6月',
    keyword: 'オクラ 種 家庭菜園',
  },
  {
    id: 36, category: '種', emoji: '🌿',
    name: 'しそ（大葉）の種',
    desc: '薬味・天ぷら・料理の彩りに万能。一度植えると毎年こぼれ種で増える育てやすいハーブ。',
    season: '種まき: 4〜6月',
    keyword: 'しそ 大葉 種',
  },
  {
    id: 37, category: '種', emoji: '🥬',
    name: 'ハクサイの種',
    desc: '鍋料理の主役。秋まきで大株に育つ。アブラムシ対策に防虫ネットが必須。',
    season: '種まき: 8〜9月',
    keyword: 'ハクサイ 白菜 種',
  },
  {
    id: 38, category: '種', emoji: '🔴',
    name: '二十日大根（ラディッシュ）の種',
    desc: '20〜30日で収穫できる超短期野菜。初心者やお子さんとの栽培体験に最適。',
    season: '種まき: 3〜5月 / 9〜10月',
    keyword: '二十日大根 ラディッシュ 種',
  },
  {
    id: 39, category: '種', emoji: '🌽',
    name: 'とうもろこしの種（ゴールドラッシュ）',
    desc: '甘みが強く生でも食べられる超甘口品種。収穫直後が一番甘い夏の醍醐味。',
    season: '種まき: 4〜5月',
    keyword: 'とうもろこし ゴールドラッシュ 種',
  },
  {
    id: 40, category: '種', emoji: '🌻',
    name: 'ひまわりの種（食用・観賞用）',
    desc: '夏の定番。種を収穫して食べることもできる。コンパニオンプランツとしても活躍。',
    season: '種まき: 4〜6月',
    keyword: 'ひまわり 種 食用 観賞用',
  },

  // ── 苗・球根（追加分） ────────────────────────────────────
  {
    id: 41, category: '苗', emoji: '🥝',
    name: 'ゴーヤ苗',
    desc: '緑のカーテンにも最適。種から育てるより確実に育つ接ぎ木苗がおすすめ。',
    season: '定植: 5〜6月',
    keyword: 'ゴーヤ 苗 グリーンカーテン',
  },
  {
    id: 42, category: '苗', emoji: '🫑',
    name: 'パプリカ苗（赤・黄・オレンジ）',
    desc: '色が変わるまで長期間管理が必要だが完熟の甘さは格別。ピーマンより温度管理重要。',
    season: '定植: 5月',
    keyword: 'パプリカ 苗 赤 黄色',
  },
  {
    id: 43, category: '苗', emoji: '🫐',
    name: 'ブルーベリー苗（2年生）',
    desc: '鉢植えでも育てやすい果樹。酸性土壌が必要。ハイブッシュ・ラビットアイ系など豊富。',
    season: '定植: 2〜3月 / 10〜11月',
    keyword: 'ブルーベリー 苗 2年生',
  },
  {
    id: 44, category: '苗', emoji: '🌿',
    name: 'ハーブ苗セット（ミント・ローズマリー・バジル）',
    desc: '料理に使えるハーブを一気に揃えるセット。キッチンの窓辺でも育てられる。',
    season: '定植: 4〜6月',
    keyword: 'ハーブ 苗 セット ミント ローズマリー バジル',
  },
  {
    id: 45, category: '苗', emoji: '🍓',
    name: '四季成りイチゴ苗（ローズベリーレッド）',
    desc: '春から秋まで長期間収穫できる四季成り品種。プランターでも育てやすく初心者向け。',
    season: '定植: 3〜4月 / 9〜10月',
    keyword: '四季成りイチゴ 苗 プランター',
  },

  // ── 肥料（追加分） ────────────────────────────────────────
  {
    id: 46, category: '肥料', emoji: '🧴',
    name: 'カルシウム補給剤（尻腐れ防止）',
    desc: 'トマト・ピーマンの尻腐れ病を予防する葉面散布型カルシウム液。症状が出てからでも効果的。',
    season: '',
    keyword: 'カルシウム 補給剤 尻腐れ トマト',
  },
  {
    id: 47, category: '肥料', emoji: '🪨',
    name: '油かす肥料（固形）',
    desc: '緩効性の有機窒素肥料。微生物を活性化して土壌改良にも効果的。臭いが少ない発酵タイプも人気。',
    season: '',
    keyword: '油かす 肥料 固形 有機',
  },
  {
    id: 48, category: '肥料', emoji: '💎',
    name: '珪酸白土（ミリオン）',
    desc: '根腐れ・土壌改良・水質浄化に。プランター底に敷くだけで通気性・排水性が改善する定番資材。',
    season: '',
    keyword: '珪酸白土 ミリオン 根腐れ防止',
  },
  {
    id: 49, category: '肥料', emoji: '🌾',
    name: '草木灰（木灰）',
    desc: 'カリウムとカルシウムを補給できる天然肥料。アルカリ性で土壌の酸度調整にも使える。',
    season: '',
    keyword: '草木灰 木灰 肥料 カリウム',
  },

  // ── 土・資材（追加分） ────────────────────────────────────
  {
    id: 50, category: '資材', emoji: '🧱',
    name: 'セルトレイ（72穴）',
    desc: '種の一斉育苗に欠かせないプラグトレー。ポット上げの手間を省いて定植の管理も楽になる。',
    season: '',
    keyword: 'セルトレイ 72穴 育苗',
  },
  {
    id: 51, category: '資材', emoji: '🏴',
    name: '不織布べたがけシート',
    desc: '霜・低温・害虫から守る薄くて軽い防寒シート。べたがけで発芽促進にも効果的。',
    season: '',
    keyword: '不織布 べたがけ 防寒シート 家庭菜園',
  },
  {
    id: 52, category: '資材', emoji: '🪨',
    name: '鉢底石（軽石・バーミキュライト）',
    desc: '排水性を高めて根腐れを防ぐ。プランター底に3〜5cm敷くだけで土の状態が大きく改善。',
    season: '',
    keyword: '鉢底石 軽石 バーミキュライト プランター',
  },
  {
    id: 53, category: '資材', emoji: '🧶',
    name: '麻ひも（誘引・結束用）',
    desc: 'トマト・きゅうりの誘引に最適な天然素材。土に還るので環境に優しく後処理も楽。',
    season: '',
    keyword: '麻ひも 誘引 結束 家庭菜園',
  },
  {
    id: 54, category: '資材', emoji: '⏱️',
    name: '散水タイマー（自動水やり機）',
    desc: '設定した時間に自動で水やりするタイマー。旅行中や留守がちな方にも人気の時短アイテム。',
    season: '',
    keyword: '散水タイマー 自動水やり 家庭菜園',
  },
  {
    id: 55, category: '資材', emoji: '💡',
    name: '植物育成ライト（LED）',
    desc: '日照不足の室内・ベランダで威力を発揮。冬の育苗や通年のハーブ栽培にも便利。',
    season: '',
    keyword: '植物育成ライト LED 家庭菜園 室内',
  },

  // ── 農具（追加分） ────────────────────────────────────────
  {
    id: 56, category: '農具', emoji: '💨',
    name: '手動噴霧器（スプレイヤー）',
    desc: '液肥の葉面散布・防虫スプレーに。1〜2Lタイプが家庭菜園には使いやすい。',
    season: '',
    keyword: '噴霧器 スプレイヤー 手動 家庭菜園',
  },
  {
    id: 57, category: '農具', emoji: '🔬',
    name: 'pH計（土壌酸度計）',
    desc: '土の酸性度を数値で確認。ブルーベリーや酸性土壌を好む植物の管理に必須のツール。',
    season: '',
    keyword: 'pH計 土壌酸度計 家庭菜園',
  },
  {
    id: 58, category: '農具', emoji: '💧',
    name: '土壌水分計',
    desc: '土に刺すだけで水やりのタイミングがわかる。根腐れや水切れを防ぐ初心者の強い味方。',
    season: '',
    keyword: '土壌水分計 水分センサー 家庭菜園',
  },
  {
    id: 59, category: '農具', emoji: '🌡️',
    name: '最高最低温度計',
    desc: '一日の気温の変化を記録。発芽・栽培管理に欠かせない温度管理の基本アイテム。',
    season: '',
    keyword: '最高最低温度計 温度管理 家庭菜園',
  },
];

// ============================================================
//  カテゴリ定義
// ============================================================

const CATEGORIES = [
  { id: 'all', label: 'すべて',  emoji: '🌿' },
  { id: '種',  label: '種',      emoji: '🌱' },
  { id: '苗',  label: '苗・球根', emoji: '🪴' },
  { id: '肥料', label: '肥料',   emoji: '💊' },
  { id: '資材', label: '土・資材', emoji: '📦' },
  { id: '農具', label: '農具',   emoji: '🔧' },
];

// ============================================================
//  SVG アイコン
// ============================================================

const ICON_EXTERNAL =
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;

// ============================================================
//  レンダリング
// ============================================================

let currentCategory = 'all';

function renderCategories() {
  const el = document.getElementById('categories');
  el.innerHTML = CATEGORIES.map(c => `
    <button
      class="cat-btn${c.id === currentCategory ? ' active' : ''}"
      data-cat="${c.id}">
      ${c.emoji} ${c.label}
    </button>
  `).join('');

  el.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.cat;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('products');
  const filtered = currentCategory === 'all'
    ? products
    : products.filter(p => p.category === currentCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty">
        <div class="icon">🔍</div>
        <p>該当する商品が見つかりませんでした</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="card">
      <div class="card-thumb">${p.emoji}</div>
      <div class="card-body">
        <span class="card-category">${p.category}</span>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.desc}</div>
        ${p.season ? `<div class="card-season">📅 ${p.season}</div>` : ''}
      </div>
      <div class="card-actions">
        <a class="btn-shop btn-amazon"
           href="${amazonUrl(p.keyword)}"
           target="_blank" rel="noopener noreferrer">
          ${ICON_EXTERNAL} Amazon
        </a>
        <a class="btn-shop btn-rakuten"
           href="${rakutenUrl(p.keyword)}"
           target="_blank" rel="noopener noreferrer">
          ${ICON_EXTERNAL} 楽天
        </a>
      </div>
    </div>
  `).join('');
}

// ============================================================
//  キットデータ
// ============================================================

const kits = [
  {
    id: 'spring-starter',
    emoji: '🌸',
    name: '春のスターターキット',
    tagline: 'GWに向けて夏野菜を一から始めよう。種・土・肥料・道具がそろう入門セット。',
    level: '初心者向け',
    season: '3〜5月',
    tip: '種まきは3〜4月が適期。発芽後は日当たりの良い場所に置き、本葉が2〜3枚になったら定植しましょう。',
    items: [
      { emoji: '🍅', name: 'ミニトマトの種',  keyword: 'ミニトマト こあまちゃん 種'  },
      { emoji: '🥒', name: 'きゅうりの種',    keyword: 'きゅうり 夏すずみ 種'        },
      { emoji: '🪴', name: '野菜用培養土',    keyword: '野菜用培養土 プランター'      },
      { emoji: '🌿', name: '有機配合肥料',    keyword: '有機配合肥料 野菜用'          },
      { emoji: '🔧', name: '移植ごてセット',  keyword: '移植ごて ミニスコップ セット' },
      { emoji: '🚿', name: 'じょうろ',        keyword: 'じょうろ 5L シャワー 野菜'   },
    ],
  },
  {
    id: 'summer-vegetables',
    emoji: '☀️',
    name: '夏野菜フルセット（苗から）',
    tagline: 'ゴールデンウィークに苗を植えてたっぷり収穫。支柱・防虫対策までまとめて。',
    level: '初心者向け',
    season: '5〜6月',
    tip: '定植後は1週間ほど毎日水やりを。気温が上がる前の朝か夕方に水をあげると根付きやすくなります。',
    items: [
      { emoji: '🍅', name: 'トマト 接ぎ木苗',   keyword: 'トマト 接ぎ木苗 大玉'         },
      { emoji: '🥒', name: 'きゅうり 接ぎ木苗', keyword: 'きゅうり 接ぎ木苗'            },
      { emoji: '🍆', name: 'ナス 接ぎ木苗',     keyword: 'ナス 接ぎ木苗'                },
      { emoji: '🎋', name: '支柱セット',         keyword: '支柱 セット 家庭菜園 8本'     },
      { emoji: '🕸️', name: '防虫ネット',         keyword: '防虫ネット 家庭菜園 細目'     },
      { emoji: '🎍', name: 'マルチシート（黒）', keyword: 'マルチシート 黒 家庭菜園'     },
    ],
  },
  {
    id: 'autumn-greens',
    emoji: '🍂',
    name: '秋冬 葉物野菜キット',
    tagline: '虫が減って育てやすい秋。ホウレンソウ・コマツナ・大根を一気に始めよう。',
    level: '初心者向け',
    season: '8〜10月',
    tip: '秋まきは害虫が少なく初心者に最適です。霜が降りる前に不織布でトンネルをかけると冬も収穫できます。',
    items: [
      { emoji: '🥬', name: 'ホウレンソウの種', keyword: 'ホウレンソウ 次郎丸 種'      },
      { emoji: '🥗', name: 'コマツナの種',     keyword: 'コマツナ 種 家庭菜園'        },
      { emoji: '🥦', name: 'ブロッコリーの種', keyword: 'ブロッコリー 種 家庭菜園'    },
      { emoji: '🪨', name: '苦土石灰',         keyword: '苦土石灰 家庭菜園'           },
      { emoji: '🌱', name: '腐葉土',           keyword: '腐葉土 40L 家庭菜園'         },
      { emoji: '🏴', name: '不織布べたがけ',   keyword: '不織布 べたがけ 防寒シート'  },
    ],
  },
  {
    id: 'balcony-starter',
    emoji: '🪴',
    name: 'ベランダ菜園スタートセット',
    tagline: 'マンション・アパートのベランダでも本格家庭菜園。土から道具まで全部入り。',
    level: '初心者向け',
    season: '通年',
    tip: 'ベランダは風が強いので支柱はしっかり立てましょう。受け皿を使って床を汚さないのもポイントです。',
    items: [
      { emoji: '📦', name: '大型プランター（深型）', keyword: '大型プランター 野菜用 深型'   },
      { emoji: '🪴', name: '野菜用培養土',           keyword: '野菜用培養土 プランター 14L' },
      { emoji: '🌿', name: '有機配合肥料',           keyword: '有機配合肥料 野菜用'         },
      { emoji: '🪣', name: 'プランター受け皿',       keyword: 'プランター 受け皿 セット'    },
      { emoji: '🚿', name: 'じょうろ',               keyword: 'じょうろ 5L シャワー 野菜'   },
      { emoji: '🔧', name: '移植ごてセット',         keyword: '移植ごて ミニスコップ セット' },
    ],
  },
  {
    id: 'tools-only',
    emoji: '🔧',
    name: 'はじめての農具セット',
    tagline: '家庭菜園に必要な道具をまとめて揃えたい方に。これだけあれば一通りこなせる。',
    level: '初心者向け',
    season: '通年',
    tip: '道具は使った後に土をよく落として乾かすと長持ちします。刃物は年1回研ぐのがおすすめです。',
    items: [
      { emoji: '🔧', name: '移植ごてセット（3本組）',     keyword: '移植ごて ミニスコップ セット'    },
      { emoji: '🚿', name: 'じょうろ（5L・シャワー付き）', keyword: 'じょうろ 5L シャワー 野菜'      },
      { emoji: '🧤', name: '農作業用手袋',               keyword: '農作業手袋 滑り止め 薄手'        },
      { emoji: '✂️', name: '収穫用ハサミ（剪定ばさみ）',  keyword: '収穫ハサミ 剪定ばさみ 家庭菜園' },
      { emoji: '💨', name: '手動噴霧器',                 keyword: '噴霧器 スプレイヤー 手動 家庭菜園'},
    ],
  },
  {
    id: 'companion-plants',
    emoji: '🤝',
    name: 'コンパニオンプランツ基本セット',
    tagline: '相性のよい野菜を組み合わせて病害虫を減らす。農薬に頼らない栽培を始めよう。',
    level: '中級者向け',
    season: '3〜5月',
    tip: 'トマト＋バジル、キュウリ＋ネギなど相性のいい組み合わせを同じプランターに植えると効果的です。',
    items: [
      { emoji: '🍅', name: 'ミニトマトの種',        keyword: 'ミニトマト こあまちゃん 種' },
      { emoji: '🌿', name: 'バジルの種',            keyword: 'バジル 種 ハーブ'           },
      { emoji: '🥒', name: 'きゅうりの種',          keyword: 'きゅうり 夏すずみ 種'       },
      { emoji: '🧅', name: '玉ねぎの種（ネオアース）', keyword: '玉ねぎ ネオアース 種'   },
      { emoji: '🪴', name: '野菜用培養土',          keyword: '野菜用培養土 プランター'    },
      { emoji: '🌱', name: '腐葉土',                keyword: '腐葉土 40L 家庭菜園'        },
    ],
  },
];

// ============================================================
//  キット レンダリング
// ============================================================

function renderKits() {
  const grid = document.getElementById('kits');

  grid.innerHTML = kits.map(kit => {
    const levelClass = kit.level === '初心者向け' ? 'badge-level-beginner' : 'badge-level-mid';

    const itemsHtml = kit.items.map(item => `
      <div class="kit-item">
        <span class="kit-item-emoji">${item.emoji}</span>
        <span class="kit-item-name">${item.name}</span>
        <div class="kit-item-btns">
          <a class="btn-mini btn-mini-amazon"
             href="${amazonUrl(item.keyword)}"
             target="_blank" rel="noopener noreferrer">Amazon</a>
          <a class="btn-mini btn-mini-rakuten"
             href="${rakutenUrl(item.keyword)}"
             target="_blank" rel="noopener noreferrer">楽天</a>
        </div>
      </div>
    `).join('');

    return `
      <div class="kit-card">
        <div class="kit-header">
          <div class="kit-header-top">
            <span class="kit-emoji">${kit.emoji}</span>
            <div class="kit-meta">
              <div class="kit-name">${kit.name}</div>
              <div class="kit-badges">
                <span class="badge ${levelClass}">${kit.level}</span>
                <span class="badge badge-season">📅 ${kit.season}</span>
              </div>
            </div>
          </div>
          <div class="kit-tagline">${kit.tagline}</div>
        </div>
        <div class="kit-items-label">📦 セット内容（${kit.items.length}点）</div>
        <div class="kit-items">${itemsHtml}</div>
        <div class="kit-footer">
          <div class="kit-tip">💡 ${kit.tip}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
//  初期化
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // 商品一覧
  renderCategories();
  renderProducts();

  // キット
  renderKits();

  // タブ切り替え
  document.querySelectorAll('.view-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const view = tab.dataset.view;
      document.getElementById('view-products').classList.toggle('hidden', view !== 'products');
      document.getElementById('view-kits').classList.toggle('hidden', view !== 'kits');
    });
  });
});
