---
sidebar_position: 1
---

# このサイトにコントリビュートするには

## サイトを`clone`する

このorgのメンバーである場合は、GitHubを利用してこのサイトをcloneしてください。

このorgのメンバーではない場合は、GitHubを利用してこのサイトをforkして、cloneしてください。

## ローカル開発

このリポジトリでは`pnpm`を利用しています。Nodeの開発環境が必要です。

```sh
# pnpmがない場合
npm i -g pnpm
```

ライブラリをインストールします。

```sh
pnpm i --frozen-lockfile
```

ローカルで開発サーバを起動するには以下のコマンドを実行してください。

```sh
pnpm run start
```

## デプロイ

サイトをデプロイできるのはこのorgの資格を持つメンバに限られます。

```sh
pnpm run deploy
```
