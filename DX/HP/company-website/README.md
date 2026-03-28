# 企業サイト - TOPページ

Next.js + TypeScript + Tailwind CSS + GSAP で構築した1ページ完結型の企業サイトです。

## 🚀 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **GSAP v3** + ScrollTrigger
- **Lenis** (スムーススクロール)

## 📦 セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## 🎯 実装されている機能

### セクション一覧

1. **Loading** - ロゴアニメーション付きオープニング演出
2. **Header** - 固定ヘッダー（スクロール時に背景色変化）+ SPハンバーガーメニュー
3. **Hero** - 100vhファーストビュー + キャッチコピーアニメーション
4. **Message** - 2カラムレイアウト + 画像マスクアニメーション
5. **Business** ⭐ - 横スクロール実装（GSAP pin + scrub）
6. **Service** - 8枚のサービスカードグリッド + staggerアニメーション
7. **PickupProduct** - 無限ループカルーセル
8. **News** - タブ切り替えUI + 記事リスト
9. **Company** - 企業情報テーブル
10. **Recruit** - 採用情報 + collage写真レイアウト
11. **ContactCTA** - お問い合わせCTA + 波形SVG背景
12. **Footer** - サイトフッター

### アニメーション

- GSAPを使用したスクロールアニメーション
- 横スクロール（Businessセクション）
- フェードイン・スライドアップ
- Staggerアニメーション
- 画像マスクエフェクト
- 無限ループカルーセル

## 📁 プロジェクト構造

```
company-website/
├── app/
│   ├── globals.css       # グローバルスタイル
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # TOPページ（Lenis統合）
├── components/
│   ├── Loading.tsx       # オープニング演出
│   ├── Header.tsx        # 固定ヘッダー
│   ├── Hero.tsx          # ファーストビュー
│   ├── Message.tsx       # メッセージセクション
│   ├── Business.tsx      # ⭐横スクロールセクション
│   ├── Service.tsx       # サービス一覧
│   ├── PickupProduct.tsx # プロダクト紹介
│   ├── News.tsx          # ニュース
│   ├── Company.tsx       # 企業情報
│   ├── Recruit.tsx       # 採用情報
│   ├── ContactCTA.tsx    # お問い合わせ
│   └── Footer.tsx        # フッター
└── public/images/        # 画像用ディレクトリ
```

## 🎨 カスタマイズ

### カラーパレット

プロジェクトのカラーは `app/globals.css` で定義されています：

- **Primary**: #0057B8（メインブルー）
- **Primary Dark**: #003D82（ホバー時のダークブルー）
- **Secondary**: #00A0E9（ライトブルー）
- **Accent**: #E60012（レッド）

### 画像の差し替え

すべての画像はプレースホルダーで実装されています。
`public/images/` ディレクトリに画像を配置して、各コンポーネントの画像パスを更新してください。

## 📱 レスポンシブ対応

- **SP**: 375px〜
- **Tablet**: 768px〜
- **PC**: 1280px〜

## 📄 ライセンス

MIT License

## 🙏 参考サイト

https://www.cosawell.co.jp/
