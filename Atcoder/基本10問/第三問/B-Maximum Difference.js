function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const nums1 = args[1].split(" ");
  const N = parseInt(nums[0], 10);
  let numbers = [];
  for (let i=0;i<N;i++) {
    numbers.push(parseInt(nums1[i], 10))
  }
  
  let maxCount = 0;
  for (let i = 0; i < N; i++) {
    for (let k = 1; k < N; k++) {
      if (Math.abs(numbers[i] - numbers[k]) > maxCount) {
        maxCount = Math.abs(numbers[i] - numbers[k]);
      } 
    }
  }
  console.log(maxCount);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
