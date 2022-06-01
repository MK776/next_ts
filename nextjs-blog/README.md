## 開発環境作成

### 1. git clone

ローカル PC の任意のディレクトリにて以下 git コマンドを実行して当リポジトリをローカルへ持ってくる

```bash
> git clone https://github.com/ricecurryinc/ccc-frontend.git
```

### 2. dockerイメージの作成

現在開いている VSCode のターミナル上から以下のコマンドを実行<br>

```bash
> docker build --force-rm=true -t dev-ccc-frontend -f Dockerfile-local-dev . --no-cache=true
```

### 3. dockerコンテナを立ち上げる

現在開いている VSCode のターミナル上から以下のコマンドを実行<br>
その際実行するディレクトリ環境に docker-compose.yml が存在していることを確認する

```bash
> docker run -d -it --name dev-ccc-frontend -v `pwd`:/app dev-ccc-frontend:latest
```

### 4. コンテナへ入る

VScodeの remote-contaierプラグインをinstall後、VSCodeウィンド上の右下の緑のボタンから Attach to Running Container... を選択し、dev-ccc-frontend を選択する

### 5. Nodeライブラリのインストール

コンテナ内でNodeライブラリをダウンロードする

```bash
> yarn install
```

### 6. Nodeライブラリのインストール

```bash
> yarn run dev
```

上記コマンドで
http://localhost:3000
が立ち上がり、開発中の変更が確認できる