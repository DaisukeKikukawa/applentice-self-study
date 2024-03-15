function main(input) {
  const args = input.split('\n');
  const nums = args[0].split(' ');
  const N = parseInt(nums[0], 10);
  const K = parseInt(nums[1], 10);
  const l = args[1].split(" ").map((N) => parseInt(N, 10));
  let result = 0;

  var f = function (a, b) {
      return b - a
  }
  l.sort(f);
  
  for (let i = 0; i < 3; i++) {
    result += l[i];
  }
  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
