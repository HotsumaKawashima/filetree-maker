// 指定されたフォルダーIDから検索をかけてフォルダーツリーが記述されたテキストファイルを出力します
// テキストファイルは、指定されたフォルダーの直下に出力する
// folderId 変数を設定して実行する

function myFunction() {
  const folderId = "*********************************";
  const folder = DriveApp.getFolderById(folderId);

  var textName = folder.getName();

  var str = getTime() + '\n\n';
  str += doRoot(folder);

  folder.createFile(textName, str, MimeType.PLAIN_TEXT);
}

function getTime(){
  var dt = new Date();
  dt.setHours(dt.getHours() - 8);
  return Utilities.formatDate(dt, "GMT", "yyyy/MM/dd HH:mm");
}

function writeRoot(root){
  return '<' + root.getName() + '>\n';
}

// lastOrNotOfParents 全ての親のアイテムが最後のアイテムかどうかの配列
// lastOrNotOfItem    現在のアイテムが最後のアイテムかどうか
function writeItem(item, lastOrNotOfParents, lastOrNotOfItem){
  var str = '';

  for( var i = 0; i < lastOrNotOfParents.length; i++){
    str += lastOrNotOfParents[i] ? '    ' : ' │ ';
  }

  str += (lastOrNotOfItem ? ' └ ' : ' ├ ') + '<' + item.getName() + '>\n';
  return str;
}

function doRoot(root){
  var str = writeRoot(root);
  str += doChildren(root, []);
  return str;
}

function doChildren(parent, lastOrNotOfParents){
  var str = '';
  var children = parent.getFolders();

  while(children.hasNext()){
    var child = children.next();
    str += doEachItems(child, lastOrNotOfParents, !children.hasNext());
  }

  return str;
}

function doEachItems(item, lastOrNotOfParents, lastOrNotOfItem){
  var str = writeItem(item, lastOrNotOfParents, lastOrNotOfItem);

  lastOrNotOfParents.push(lastOrNotOfItem);
  str += doChildren(item, lastOrNotOfParents);
  lastOrNotOfParents.pop();

  return str;
}
