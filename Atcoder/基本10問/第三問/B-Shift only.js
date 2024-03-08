function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const N = parseInt(nums[0], 10);
  const a = args[1].split(" ").map((n) => parseInt(n, 10));
  let count = 0;
  
  while (true) {
    let exist_odd = false;
    for (let i = 0; i < N; i++) {
      if(a[i] % 2 !== 0) {
        exist_odd = true;
      }
    }
    if (exist_odd) break;
    for (let i = 0; i < N; i++) {
      a[i] /= 2; 
    }
    count++;
  }

  console.log(count)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
