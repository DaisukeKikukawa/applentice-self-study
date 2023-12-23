function main(input) {
  const args = input.split("\n");
  const N = parseInt(args[0], 10);
  const A = parseInt(args[1], 10);
  if (N % 500 <= A) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
