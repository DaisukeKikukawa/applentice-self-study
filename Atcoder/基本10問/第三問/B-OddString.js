function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  // console.log(nums[0]) // [3]
  const inputStrings = nums[0];
  let resultStrings = "";
  for (let i = 0; i < inputStrings.length; i++) {
    if (i % 2 === 0) { // 0, 2, 4, ... は奇数文字目に相当
      resultStrings += inputStrings[i];
    }
  }

  console.log(resultStrings);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
