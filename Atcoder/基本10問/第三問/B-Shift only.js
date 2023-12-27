function main(input) {
  const args = input.split("\n");
  // console.log(args); // [ '3 4', '5', '' ]
  const nums = args[0].split(" ");
  const nums1 = args[1].split(" ");
  // console.log(nums)  // [ '3', '4' ]
  // console.log(nums1)
  // const num = parseInt(nums[0], 10);
  // console.log(num) // [3]
  const N = parseInt(nums[0], 10);
  const A1 = parseInt(nums1[0], 10);
  const A2 = parseInt(nums1[1], 10);
  const A3 = parseInt(nums1[2], 10);
  
  let numbers = [];
  let count = 0;
  for (let i = 0; i <=N-1;i++) {
    numbers.push(parseInt(nums1[i], 10));
  }
  // console.log(numbers)
  while(numbers.every(num => num % 2 === 0)) {
    for (let i = 0;i<numbers.length;i++) {
      numbers[i] = numbers[i] / 2
    }
    count++;
  }
  console.log(count)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
