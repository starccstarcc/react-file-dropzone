# react-file-dragdrop

<img src="docs/icon-file-dragdrop.png" width="100" height="100">

This is a sample of a file drag-and-drop function, based on the "[react-dropzone](https://github.com/react-dropzone/react-dropzone)" module. Workaround for 'react-dropzone' bug and deletion of selected files are added.


ファイルのドラッグ＆ドロップ機能のサンプルで、「[react-dropzone](https://github.com/react-dropzone/react-dropzone)」モジュールをベースにしています。
「react-dropzone」のバグのワークアラウンド対策や選択ファイルの削除を追加しています。

<img src="docs/demo-file-dragdrop.gif" width="640" height="480" style="border: 1px solid #cccccc">



---

### Purpose:

Create a function in React that allows you to select and cancel local files. Introduce lightweight and low dependency.

目的：
Reactでローカルファイルの選択やキャンセルができる機能を作成します。軽量かつ依存度が少なく導入します。

### Background:
When selecting, checking, and uploading files locally, we would like to use libraries to streamline event handler settings and differences between browsers.
In addition, many existing well-known drag-and-drop libraries are rich in functionality, and in some cases it takes time to support React18.
Therefore, we have created a sample file drag & drop library that implements only the simplest functions. We use "react-dropzone" as a base.

背景：
ファイルをローカルから選択・確認しアップロードする場合、イベントハンドラの設定やブラウザ間の差異はライブラリを利用して効率化を図りたいです。
また既存の有名なドラッグ&ドロップライブラリはリッチな機能の物が多かったり、React18のサポートに時間が掛かるケースがありました。
そのため、一番シンプルな機能のみを実装したファイルドラッグ&ドロップのサンプルを作成しました。ベースに「react-dropzone」を使用しています。

### Additional Functions:
There is a bug in "react-dropzone" that does not have the ability to delete selected files and some css (flex-direction, etc.). The workaround is included.

追加機能：
「react-dropzone」には選択したファイルの削除機能がなかったり、一部css（flex-direction等）が使えないバグがあります。そのワークアラウンド対策も含まれています。



## Installation

1. Download files from this github page.
https://github.com/ikezaworld/react-file-dragdrop


2. Install modules.
```
npm install
```

3. Start the app.
```
npm run start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. Select a file and drop it on the drop zone. You can also delete the selected file.
     (Dummy file for upload is here: [".txt",",csv",".jpg",".png"](https://github.com/ikezaworld/react-file-dragdrop/tree/main/dummy_file))


### Main Modules

- [create-react-app](https://github.com/facebook/create-react-app)
- [react-dropzone](https://github.com/react-dropzone/react-dropzone)