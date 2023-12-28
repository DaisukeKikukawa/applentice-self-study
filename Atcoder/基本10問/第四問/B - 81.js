function main(input) {
  const args = input.split("\n");
  const num = parseInt(args[0], 10);
  let result = "No";
  for (let i = 0;i < 10;i++) {
    for (let k = 0;k < 10;k++) {
      if (i*k === num) result = "Yes"
    }
  }
  console.log(result)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
