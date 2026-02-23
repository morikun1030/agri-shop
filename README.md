# AgriShop - 家庭菜園アフィリエイトサイト

## セットアップ（必須：IDの設定）

`app.js` の先頭にある2行を自分のIDに書き換えてください。

```js
const AMAZON_ASSOCIATE_ID  = 'YOUR_AMAZON_ID-22';
const RAKUTEN_AFFILIATE_ID = 'YOUR_RAKUTEN_AFFILIATE_ID';
```

### Amazon アソシエイトIDの確認方法
1. https://affiliate.amazon.co.jp にログイン
2. 上部メニュー「ツール」→「トラッキングID管理」
3. 表示されているID（例: `myfarm-22`）をコピー

### 楽天アフィリエイトIDの確認方法
1. https://affiliate.rakuten.co.jp にログイン
2. 「リンク作成」→ 任意のバナーを選択 → 「HTMLを取得」
3. 生成されたURLの `hb.afl.rakuten.co.jp/hgc/` の直後の英数字部分
   （例: `1a2b3c4d.5e6f7a8b`）をコピー

---

## ファイル構成

```
AgriShop/
├── index.html   # メインページ（構造）
├── style.css    # デザイン
├── app.js       # 商品データ + アフィリエイトURL生成 + レンダリング
└── README.md    # このファイル
```

---

## 商品を追加・編集する方法

`app.js` の `products` 配列にオブジェクトを追加するだけです。

```js
{
  id: 31,               // 他のIDと重複しない番号
  category: '種',       // '種' / '苗' / '肥料' / '資材' / '農具'
  emoji: '🌽',          // 見た目のアイコン
  name: 'とうもろこしの種（ゴールドラッシュ）',
  desc: '甘みが強く人気の品種。プランターより地植えで育てやすい。',
  season: '種まき: 4〜5月',  // 不要なら '' にする
  keyword: 'とうもろこし ゴールドラッシュ 種',  // Amazon/楽天の検索キーワード
},
```

---

## デプロイ方法

### GitHub Pages（無料・推奨）
```bash
cd AgriShop
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/agri-shop.git
git push -u origin main
```
その後、GitHubリポジトリの Settings → Pages → Branch: main → Save

### Netlify（無料）
1. https://netlify.com にログイン
2. 「Add new site」→「Deploy manually」
3. AgriShopフォルダをドラッグ＆ドロップ

---

## 法的表示について

Amazonアソシエイト・楽天アフィリエイトの規約により、
アフィリエイトリンクを含むページには広告表示義務があります。
`index.html` の notice バナーとフッターにすでに記載済みです。

- Amazon アソシエイト規約: https://affiliate.amazon.co.jp/help/operating/agreement
- 楽天アフィリエイト利用規約: https://affiliate.rakuten.co.jp/guide/rule/
