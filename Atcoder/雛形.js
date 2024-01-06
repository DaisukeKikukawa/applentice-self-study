function main(input) {
  // 入力が
  3, 4;
  5;
  //の時
  const args = input.split("\n");
  console.log(args); // [ '3 4', '5', '' ]
  const nums = args[0].split(" ");
  console.log(nums)  // [ '3', '4' ]
  const num = parseInt(nums[0], 10);
  console.log(num) // [3]
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

