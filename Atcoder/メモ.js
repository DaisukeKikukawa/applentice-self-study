# 文字列の切り取り
あくまでindexの数値ではなく、開始位置の数値を渡す
## 引数二つの場合
var str = 文字列;
str.substr( 開始位置, 文字数 );

## 引数一つの場合
/ 文字数を省略して、末尾まですべてを抽出する
var result = str.substr( 5 );

## sliceメソッド
let str = "abcdefg";
let subStr = str.slice(1, -1); // 1番目のインデックスから始まり、最後のインデックスの1つ前まで取得します。
console.log(subStr); // "bcdef"

## substringメソッド
let str = "abcdefg";
let subStr = str.substring(1, str.length - 1); // 1番目のインデックスから始まり、最後のインデックスの1つ前まで取得します。
console.log(subStr); // "bcdef"
