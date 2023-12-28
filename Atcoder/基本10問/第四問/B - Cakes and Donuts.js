function main(input) {
  const args = input.split("\n");
  const num = parseInt(args[0], 10);
  let result = "No";
  for (let i = 0;i<30;i++) {
    for (let k = 0;k<30;k++) {
      if (4*i + 7*k === num) {
        result = "Yes";
        break;
      } 
    }
  }
  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
