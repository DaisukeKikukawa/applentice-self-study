function main(input) {
  const args = input.split("\n");
  // console.log(args[0]); // [ '3 4', '5', '' ]
  let count = 0;
  for (let i = 0; i <= args[0].length - 1; i++) {
    if (args[0][i] == "1") {
      count += 1;
    }
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
