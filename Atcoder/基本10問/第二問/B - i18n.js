function main(input) {
  const args = input.split("\n");
  const tmp = args[0].split(" ");
  const nums = tmp[0]
  const length = args[0].length
  const firstNum = nums[0];
  const lastNum = nums[length - 1];
  const middleNum = nums.slice(1,-1);
  const middleNumNumber = String(middleNum.length);
  console.log(firstNum + String(length - 2) + lastNum);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
