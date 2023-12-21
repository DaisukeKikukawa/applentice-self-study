function main(input) {
  const args = input.split("\n");
  // console.log(args)
  const nums = args[0].split(" ");
  // console.log(nums)
  const a = parseInt(nums[0], 10);
  const b = parseInt(nums[1], 10);

  if ((a * b) % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
