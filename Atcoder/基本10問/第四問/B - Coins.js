
function main(input) {
 
  const args = input.split("\n");
  const A = parseInt(args[0], 10);
  const B = parseInt(args[1], 10);
  const C = parseInt(args[2], 10);
  const X = parseInt(args[3], 10);
  let count = 0;
  
  for (let a = 0; a <= A; a++) {
        for (let b = 0; b <= B; b++) {
            for (let c = 0; c <= C; c++) {
                if (500 * a + 100 * b + 50 * c === X) {
                    count++;
                }
            }
        }
    }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
