// ============================================================
//  ★★★ ここを自分のIDに書き換えてください ★★★
// ============================================================

const AMAZON_ASSOCIATE_ID  = 'YOUR_AMAZON_ID-22';
//  確認方法: Amazon アソシエイト管理画面
//            → 上部メニュー「ツール」→「トラッキングID管理」
//  例: myfarm-22

const RAKUTEN_AFFILIATE_ID = 'YOUR_RAKUTEN_AFFILIATE_ID';
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
//  初期化
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProducts();
});
