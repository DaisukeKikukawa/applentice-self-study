function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const inputString = nums[0];
  let indexOfA = -1;
  let indexOfZ = -1;
  
  for (let i = 0; i < inputString.length;i++){
    if (inputString[i] === "A" && indexOfA === -1) {
      indexOfA = i;
    }
    if (inputString[i] === "Z") {
      indexOfZ = i;
    }
  }
  console.log(indexOfZ - indexOfA + 1 )
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
