function main(input) {
  const args = input.split("\n");
  const n = parseInt(args[0], 10);
  const a = args[1].split(" ").map((n) => parseInt(n, 10));

  let sumOfAlice = 0;
  let sumOfBob = 0;
  
  var f = function (a, b) {
    return b - a;
  }
  a.sort(f);
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      sumOfAlice += a[i];
    } else {
      sumOfBob += a[i];
    }
  }
  console.log(sumOfAlice - sumOfBob);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
