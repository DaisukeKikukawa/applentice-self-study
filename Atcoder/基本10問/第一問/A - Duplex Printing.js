function main(input) {
  // 入力が
  3, 4;
  5;
  //の時
  const args = input.split("\n");
  const num = parseInt(args[0], 10);
  // console.log(num) // [3]
  console.log(Math.ceil(num / 2));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

