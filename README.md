# filetree-maker

グーグルドライブのフォルダーツリーをテキストに出力します

## Description

以下のテキストファイルを出力します

```

2019/01/07 16:20

<root>
 ├ <folder1>
 │  └ <folder1-1>
 ├ <folder2>
 └ <folder3>
     ├ <folder3-1>
     │  ├ <folder3-1-1>
     │  └ <folder3-1-2>
     ├ <folder3-2>
     ├ <folder3-3>
     ├ <folder3-4>
     └ <folder3-5>

```

## Usage

Code.gs 内の folderId にフォルダーIDを設定して、実行する

```

const folderId = "*********************************";

```

この指定フォルダーの直下に指定したフォルダー名のテキストファイルが作成されます。
