function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const nums1 = args[1].split(" ");
  const N = parseInt(nums[0], 10);
  const A1 = parseInt(nums1[0], 10);
  const A2 = parseInt(nums1[1], 10);
  const A3 = parseInt(nums1[2], 10);
  let numbers = [];
  let maxMinusNum = 0;
  let currentMinusNum = 0;
  for (let i=0;i<N;i++) {
    numbers.push(parseInt(nums1[i], 10))
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers[N - 1] - numbers[0])
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
