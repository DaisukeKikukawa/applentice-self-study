function main(input) {
  const args = input.split('\n');
  const nums = args[0].split(' ');
  const A = parseInt(nums[0], 10);
  const B = parseInt(nums[1], 10);

  let result = 0;
  for (let i = A; i <= B; i++) {
    let num = String(i);
    let reverseNum = num.split('').reverse().join('');
    if (num === reverseNum) {
      result += 1;
    }
  }
  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
